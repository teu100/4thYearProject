/* eslint-disable no-undef */
/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';
import { Modal, Button, Col, Form } from 'react-bootstrap';

export class EditTask extends Component {
    constructor(props) {
        super(props);
        this.state={emps:[]}


    }





    refreshList(){
        fetch('https://localhost:44384/api/employee')
        .then(response=> response.json())
        .then(data => 
            {
            this.setState({emps:data})
            }
            );
    }


    handleSubmit(event) {
        event.preventDefault();
        fetch('https://localhost:44384/api/Task/',{
            method: 'PUT',
            headers:{
                'Accept': 'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                taskID:event.target.taskID.value,
                duedate: event.target.dueDate.value,
                taskDescription: event.target.taskDescription.value,
                personResponsible: event.target.personResponsible.value,
                priorityLevel:event.target.priorityLevel.value,
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
            window.location.reload() 
        },
        (error)=>{
            alert('Failed')
        })
        
    }


    render() {

        const {emps} = this.state;

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
                            
                            <Form.Control as="select" defaultValue={this.props.personResponsible}>
                            {emps.map(emp=>
                                <option key = {emp.employeeID}>{emp.firstName}</option>
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

