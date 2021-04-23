/* eslint-disable no-undef */
/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';
import { Modal, Button, Col, Form } from 'react-bootstrap';

export class EditUser extends Component {
    constructor(props) {
        super(props);
        this.state={emps:[],isLoaded: false,error:null}

    }



    // componentDidMount(){
    //     this.refreshList();
    // }

    componentDidUpdate(){
        fetch("https://4thyearprojectapi20210323220948.azurewebsites.net/api/Employee")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            emps: result
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
    }

    


    handleSubmit(event) {
        event.preventDefault();
        fetch('https://4thyearprojectapi20210323220948.azurewebsites.net/Employee',{
            method: 'PUT',
            headers:{
                'Accept': 'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                employeeID: event.target.empID.value,
                lastName: event.target.empLName.value,
                compRole: event.target.compRole.value,
                email: event.target.empEmail.value,
               

            })
        }
        )
        .then(res=> res.json())
        .then((result)=>
        {
            console.log(result);
 
        },
        (error)=>{
            alert('Failed')
            console.log(error);
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
                        <Form.Group as={Col} controlId="empID">
                            <Form.Label>Employee ID</Form.Label>
                            <Form.Control 
                            type="text" 
                            name="empID" 
                            disabled 
                            defaultValue = {this.props.empid}/>
                        </Form.Group>

                        

                        <Form.Group as={Col} controlId="empLName">
                            <Form.Label>Employee Last Name</Form.Label>
                            <Form.Control 
                            type="text" 
                            name="empLName" 
                            defaultValue = {this.props.emplname}
                            />
                        </Form.Group>

                        
                    </Form.Row>

                    
                    <Form.Row>
                    
                    <Form.Group as={Col} controlId="compRole">
                            <Form.Label>Company Role</Form.Label>
                            <Form.Control 
                            type="text" 
                            name="compRole" 
                            defaultValue = {this.props.comprole}
                            />
                            </Form.Group>
                    <Form.Group as={Col} controlId="empEmail">
                            <Form.Label>Employee Email</Form.Label>
                            <Form.Control 
                            type="email" 
                            name="empEmail" 
                            defaultValue = {this.props.empemail}
                            />
                    </Form.Group>

                        
                    </Form.Row>

                    

                    <Button variant="primary" type="submit">
                        Update Employee
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

