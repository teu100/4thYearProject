/* eslint-disable no-undef */
/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';
import { Modal, Button, Col, Form , Card} from 'react-bootstrap';
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from 'react-router-dom'


export default function EmpSignUp(){
    const {currentUser} = useAuth()
    const history = useHistory()


    function handleSubmit(event) {
        event.preventDefault();
        fetch('https://localhost:44384/api/employee/',{
            method: 'POST',
            headers:{
                'Accept': 'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                firstName: event.target.empFName.value,
                lastName: event.target.empLName.value,
                email: event.target.empEmail.value,
                compRole: event.target.compRole.value,
                compID: event.target.compID.value,
                deptID: event.target.deptID.value
            })
        }
        )
        .then(res=> res.json())
        .then((result)=>
        {
            console.log(result);
            history.push('/dashboard')
        },
        (error)=>{
            alert('Failed')
            console.log(error);
        })

    }



    return(
        <>
            <Card>
                <Card.Body>
                    <div className="modalContainer">
                    <Form onSubmit={handleSubmit}>
                        <Form.Row>
                            <Form.Group as={Col} controlId="empEmail">
                                <Form.Label>Employee Email</Form.Label>
                                    <Form.Control 
                                    type="email" 
                                    name="empEmail" 
                                    defaultValue = {currentUser.email}
                                    />
                            </Form.Group>
                        </Form.Row>

                        <Form.Row>
                            <Form.Group as={Col} controlId="empFName">
                                <Form.Label>First Name</Form.Label>
                                    <Form.Control 
                                    type="text" 
                                    name="empFName" 
                                    />
                            </Form.Group>
                        </Form.Row>

                        <Form.Row>
                            <Form.Group as={Col} controlId="empLName">
                                <Form.Label>Last Name</Form.Label>
                                    <Form.Control 
                                    type="text" 
                                    name="empLName" 
                                    />
                            </Form.Group>
                        </Form.Row>

                    
                        <Form.Row>
                            <Form.Group as={Col} controlId="compRole">
                                <Form.Label>Company Role</Form.Label>
                                    <Form.Control 
                                    type="text" 
                                    name="compRole" 
                                    />
                            </Form.Group>
                        </Form.Row>

                        <Form.Row>
                            <Form.Group as={Col} controlId="compID">
                                <Form.Label>Company ID</Form.Label>
                                    <Form.Control 
                                    type="text" 
                                    name="compID"
                                    />
                            </Form.Group> 
                        </Form.Row>

                        <Form.Row>
                            <Form.Group as={Col} controlId="deptID">
                                <Form.Label>Department ID</Form.Label>
                                    <Form.Control 
                                    type="text" 
                                    name="deptID"
                                    />
                            </Form.Group> 
                        </Form.Row>

                    

                        <Button variant="primary" type="submit">
                            Finish Sign up
                        </Button>
                    </Form>
                    </div>
                </Card.Body>
            </Card>
        </>
    )
}

