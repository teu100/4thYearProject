/* eslint-disable no-undef */
/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';
import { Modal, Button, Row, Col, Form } from 'react-bootstrap';

export class AddNewTask extends Component {
    constructor(props) {
        super(props);
    }

    handleSubmit(event) {
        event.preventDefault();
        alert(event.target.taskName.value);
        alert(event.target.dueDate.value)
        alert(event.target.taskDescription.value)
        alert(event.target.personResponsible.value)
        alert(event.target.priority.value)
    }


    render() {
        return (
            <Modal
                {...this.props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        New Task
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="modalContainer">
                    <Form onSubmit={this.handleSubmit}>
                    <Form.Row>
                        <Form.Group as={Col} controlId="taskName">
                            <Form.Label>Task Name</Form.Label>
                            <Form.Control type="text" name="TaskName" placeholder="Task Name" required/>
                        </Form.Group>

                        <Form.Group as={Col} controlId="dueDate">
                            <Form.Label>Due Date</Form.Label>
                            <Form.Control type="date"  />
                        </Form.Group>
                    </Form.Row>

                    <Form.Group controlId="taskDescription">
                        <Form.Label>Task description</Form.Label>
                        <Form.Control as="textarea" placeholder="Task description" />
                    </Form.Group>


                    <Form.Row>
                        <Form.Group as={Col} controlId="personResponsible">
                            <Form.Label>Person responsible</Form.Label>
                            <Form.Control as="select" defaultValue="Choose...">
                                <option>Choose...</option>
                                <option>get from database</option>
                                <option>Mark</option>
                                <option>Alan</option>
                            </Form.Control>
                        </Form.Group>

                        <Form.Group as={Col} controlId="priority">
                            <Form.Label>Priority</Form.Label>
                            <Form.Control as="select" defaultValue="Choose...">
                                <option>Choose...</option>
                                <option>High</option>
                                <option>Medium</option>
                                <option>Low</option>
                            </Form.Control>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridZip">
                            <Form.Label>Zip</Form.Label>
                            <Form.Control />
                        </Form.Group>
                    </Form.Row>

                    <Form.Group id="formGridCheckbox">
                        <Form.Check type="checkbox" label="Not a mistake" />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                Submit
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

