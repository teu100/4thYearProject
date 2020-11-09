import React, {Component} from "react";

import { Container, Row, Col, Navbar, Nav, NavDropdown, Button, Card, Form, FormControl, ButtonToolbar } from 'react-bootstrap'
import  {AddNewTask}  from '../components/NewTask';




export class homePage extends Component {

    constructor(props) {
        super(props);
        this.state = { addTaskShow : false }
        
    }


    render(){

        
        let addTaskClose =() => this.setState({addTaskShow:false})

    return(

        <div>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="/">Task Managment</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/task">Tasks</Nav.Link>
                        <Nav.Link href="/users">User</Nav.Link>
                        <Nav.Link href="/drag">drag</Nav.Link>

                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">New Task</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>



            <Container>
                <ButtonToolbar>
                    <Button 
                    variant="primary" 
                    onClick={()=> this.setState({addTaskShow: true})}
                    >New Task + </Button>
                    <AddNewTask 
                    show={this.state.addTaskShow} 
                    onHide={addTaskClose}/>
                </ButtonToolbar>

                


                <Row>
                    <Col md>
                        <h1 class="h1forProgress">To do</h1>
                        <Card className="text-center" style={{ width: '18rem' }} bg="primary" text="white">
                            <Card.Header>Task title</Card.Header>
                            <Card.Body>
                                <Card.Text>
                            Task description will go here
              </Card.Text>
                            </Card.Body>
                            <Card.Footer >
                                <small >Last updated 3 mins ago(if it was edited)</small>
                            </Card.Footer>
                        </Card>

                        <Card className="text-center" style={{ width: '18rem' }} bg="primary" text="white">
                            <Card.Header>Task title</Card.Header>
                            <Card.Body>
                                <Card.Text>
                            Task description will go here
              </Card.Text>
                            </Card.Body>
                            <Card.Footer >
                                <small >Last updated 3 mins ago(if it was edited)</small>
                            </Card.Footer>
                        </Card>

                        <Card className="text-center" style={{ width: '18rem' }} bg="primary" text="white">
                            <Card.Header>Task title</Card.Header>
                            <Card.Body>
                                <Card.Text>
                            Task description will go here
              </Card.Text>
                            </Card.Body>
                            <Card.Footer >
                                <small >Last updated 3 mins ago(if it was edited)</small>
                            </Card.Footer>
                        </Card>
                    </Col>

                    <Col>
                        <h1 class="h1forProgress">In progress</h1>
                        <Card className="text-center" style={{ width: '18rem' }} bg="primary" text="white">
                            <Card.Header>Task title</Card.Header>
                            <Card.Body>
                                <Card.Text>
                            Task description will go here
              </Card.Text>
                            </Card.Body>
                            <Card.Footer >
                                <small >Last updated 3 mins ago(if it was edited)</small>
                            </Card.Footer>
                        </Card>
                    </Col>


                    <Col>
                        <h1 class="h1forProgress">Done</h1>
                        <Card className="text-center" style={{ width: '18rem' }} bg="primary" text="white">
                            <Card.Header>Task title</Card.Header>
                            <Card.Body>
                            <Card.Text>
                                Task description will go here
                            </Card.Text>
                            </Card.Body>
                            <Card.Footer >
                                <small >Last updated 3 mins ago(if it was edited)</small>
                            </Card.Footer>
                        </Card>
                    </Col>
                </Row>
            </Container>

            <Navbar id="footerNav" fixed="bottom" bg="light" expand="lg">
                <Navbar.Brand href="/">Task Managment</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="https://github.com/teu100" target="_blank">GitHub</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            </div>
    )
    }
    
}

export default homePage;