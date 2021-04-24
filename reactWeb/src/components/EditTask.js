/* eslint-disable no-undef */
/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';
import { Modal, Button, Col, Form } from 'react-bootstrap';

export class EditTask extends Component {
    constructor(props) {
        super(props);
        this.state={emps:[]}
    }





    componentDidMount() {
        fetch('https://4thyearprojectapi20210323220948.azurewebsites.net/api/Employee')
          .then((response) => response.json())
          .then((json) => {
            this.setState({ emps: json });
          })
          .catch((error) => console.error(error))
          .finally(() => {
            this.setState({ isLoading: false });
          });
    }


    handleSubmit(event) {
        console.log(event);
        event.preventDefault();
        fetch('https://4thyearprojectapi20210323220948.azurewebsites.net/api/Task',{
            method: 'PUT',
            headers:{
                'Accept': 'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                taskID: event.target.taskID.value,
                dueDate: event.target.dueDate.value,
                taskDescription: event.target.taskDescription.value,
                personResponsible: "Mateus",//the API handle the name of the person by using the empID
                statusString: 'To do',
                employeeID: event.target.personResponsible.value,//this value is the id
                compID: 1,
                deptID: 2,
                priorityLevel: event.target.priority.value,
                taskName: event.target.taskName.value
            })
        }
        )
        
        .then(res=> res.json())
        .then((result)=>
        {
            console.log(result);
            console.log(event.target.taskID.value);
            console.log(event.target.taskName.value);     
            console.log(event.target.dueDate.value);  
            //window.location.reload() 
        },
        (error)=>{
            alert('Failed')
        })
        
    }




    render() {

        const {emps} = this.state;

        //const string = this.props.statusString
        return (
            <Modal
                {...this.props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Edit Task
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>


                    <div className="modalContainer">
                    <Form onSubmit={this.handleSubmit}>
                    <Form.Row>
                        <Form.Group as={Col} controlId="taskID">
                            <Form.Label>Task ID</Form.Label>
                            <Form.Control 
                            type="text" 
                            name="taskID" 
                            disabled 
                            defaultValue = {this.props.taskid}/>
                        </Form.Group>

                        <Form.Group as={Col} controlId="taskName">
                            <Form.Label>Task Name</Form.Label>
                            <Form.Control 
                            type="text" 
                            name="taskName" 
                            defaultValue = {this.props.taskname}
                            />
                        </Form.Group>

                        <Form.Group as={Col} controlId="dueDate">
                            <Form.Label>Due Date</Form.Label>
                            <Form.Control type="date" name="dueDate" defaultValue={this.props.dueDate}/>
                        </Form.Group>
                    </Form.Row>



                    <Form.Group controlId="taskDescription">
                        <Form.Label>Task description</Form.Label>
                        <Form.Control as="textarea" 
                        name="taskDescription"
                        defaultValue={this.props.taskDescription}
                        />
                    </Form.Group>

                    
                    <Form.Row>
                    
                    <Form.Group as={Col} controlId="personResponsible" >
                            <Form.Label>Person responsible</Form.Label>
                            
                            <Form.Control as="select" defaultValue="Choose...">
                            {emps.map(emp=>
                                <option key = {emp.employeeID} value={emp.employeeID}>{emp.firstName}</option>
                            )}
                            </Form.Control>
                            
                        </Form.Group>
                        

                        <Form.Group as={Col} controlId="priorityLevel">
                            <Form.Label>Priority</Form.Label>
                            <Form.Control as="select" defaultValue={this.props.priorityLevel}
                            name="priority"
                            >
                                <option>Choose...</option>
                                <option>High</option>
                                <option>Medium</option>
                                <option>Low</option>
                            </Form.Control>
                        </Form.Group>
                    </Form.Row>

                    <Form.Group controlId="taskStatusString">
                        <Form.Label>Task Status</Form.Label>
                        <Form.Control style={{width: 110}} type="text" disabled defaultValue={this.props.statusString}
                        name="taskStatusString"
                        />
                    </Form.Group>

                    

                    <Button variant="primary" type="submit">
                        Update Task
                    </Button>
                </Form>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant='danger' onClick={this.props.onHide}>Close</Button>
                            
                </Modal.Footer>
            </Modal >
        )
    }
}

