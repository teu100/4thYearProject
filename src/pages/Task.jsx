import React from 'react';
import styled from 'styled-components';
import Draggable from '../components/Draggable'
import Droppable from '../components/Droppable'
import { Container, Row, Col, Navbar, Nav, NavDropdown, Button, Card, Form, ProgressBar} from 'react-bootstrap'


const Wrapper = styled.div`
    width: 60%;
    padding: 32px;
    padding-top: 10px;
    display: flex;
    justify-content: center;
`;




const droppableStyle = {
    backgroundColor: 'white',
    borderStyle: 'solid',
    borderColor: 'white lightGrey',
    paddingTop: "20px",
    width: '305px',
    height: '450px',
    margin: '0px'
}

export default class DndTest extends React.Component {
    constructor(props){
        super(props);
        this.state={tasks:[]}
    }

    componentDidMount(){
        this.refreshList();
    }

    refreshList(){
        fetch('https://localhost:44384/api/Task')
        .then(response=> response.json())
        .then(data => 
            {
            this.setState({tasks:data})
            }
            );
    }


    render() {
        const {tasks} = this.state;
        return (
            <div>
                <Navbar bg="light" expand="lg">
                    <Navbar.Brand href="/">Task Managment</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="/task">Tasks</Nav.Link>
                            <Nav.Link href="/users">User</Nav.Link>
                            <Nav.Link href="/companyDetails">Company Details</Nav.Link>

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
                    <Wrapper>
                        <Col>
                            <h1>To do</h1>
                            <Droppable id="dr1" style={droppableStyle} >
                            {tasks.map(task=>
                            <Draggable id={task.taskID} style={{ margin: '8px' }} key={task.taskID}>
                                <Card className="text-center" style={{width: '18rem'}} bg="primary" text="white" >
                                        <Card.Header>{task.taskID}</Card.Header>
                                        <Card.Body>
                                            <Card.Text>{task.taskDescription}</Card.Text>
                                        </Card.Body>
                                </Card>
                            </Draggable>
                            )}
                            </Droppable>
                        </Col>
                        <Col>
                            <h1>In progress</h1>
                            <Droppable id="dr2" style={droppableStyle}>
                            {tasks.map(task=>
                                <Draggable id={"item2"} style={{ margin: '8px' }}>
                                   <div class="card">
                                       <div class="topDetails">
                                       <div class="cardID">
                                            <p>ID : {task.taskID}</p>
                                       </div>
                                       <div class="dueDate">  
                                            <p>{task.dueDate.substring(0,10)}</p>
                                       </div>
                                       </div>
                                       <br/>
                                        <p>{task.taskDescription}</p>
                                   </div>
                                </Draggable>
                                )}
                            </Droppable>
                        </Col>

                        <Col>
                            <h1>Done</h1>
                            <Droppable id="dr3" style={droppableStyle}>
                                <Draggable id={"item3"} style={{ margin: '8px' }}>
                                    
                                </Draggable>
                            </Droppable>
                        </Col>

                    </Wrapper>
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
        );
    }
}