import React from 'react';
import styled from 'styled-components';
import Draggable from '../components/Draggable'
import Droppable from '../components/Droppable'
import { Container, Row, Col, Navbar, Nav, NavDropdown, Button, Card, Form, ButtonToolbar} from 'react-bootstrap'
import  {AddNewTask}  from '../components/NewTask';


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
        this.state = { addTaskShow : false }
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

    getTODO(){
        let i;
        let toDoTask = [];

        for (i = 0; i < this.state.tasks.length; i++)
        {
            if(this.state.tasks[i].statusString === "To do")
            {
                toDoTask.push(this.state.tasks[i])
                
            }
        }
        return toDoTask;
    }

    getInProg(){
        let i;
        let inProgTask = [];

        for (i = 0; i < this.state.tasks.length; i++)
        {
            if(this.state.tasks[i].statusString === "In progress")
            {
                inProgTask.push(this.state.tasks[i])
                
            }
        }
        return inProgTask;
    }

    getDoneTask(){
        let i;
        let doneTask = [];

        for (i = 0; i < this.state.tasks.length; i++)
        {
            if(this.state.tasks[i].statusString === "Done")
            {
                doneTask.push(this.state.tasks[i])
                
            }
        }
        return doneTask;
    }

    render() {
        let addTaskClose =() => this.setState({addTaskShow:false})

        
        
        const todoTasks = this.getTODO();
        const inProgTask = this.getInProg();
        const doneTask =  this.getDoneTask();
        
        

        



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
                <ButtonToolbar>
                    <Button 
                    variant="primary" 
                    onClick={()=> this.setState({addTaskShow: true})}
                    >New Task + </Button>
                    <AddNewTask 
                    show={this.state.addTaskShow} 
                    onHide={addTaskClose}/>
                </ButtonToolbar>


        
                    <Wrapper>

                        <Col>
                        <h1 id="ToDO">To do</h1>
                            <Droppable id="dr1" style={droppableStyle} >
                            {todoTasks.map(task=>
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
                                        
                                        <div class="bottomDetails">
                                            <div class="taskName">
                                                {task.taskName}
                                            </div>
                                        
                                            <div><p>{task.taskDescription}</p></div>
                                        </div>
                                    </div>
                                </Draggable>
                                )}
                            </Droppable>
                        </Col>

                        <Col>
                            <h1>In progress</h1>
                            <Droppable id="dr2" style={droppableStyle}>
                            {inProgTask.map(task=>
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
                                        
                                        <div class="bottomDetails">
                                            <div class="taskName">
                                                {task.taskName}
                                            </div>
                                        
                                            <div><p>{task.taskDescription}</p></div>
                                        </div>
                                    </div>
                                </Draggable>
                                )}
                            </Droppable>
                        </Col>

                        <Col>
                            <h1>Done</h1>
                            <Droppable id="dr3" style={droppableStyle}>
                            {doneTask.map(task=>
                                <Draggable id={"item3"} style={{ margin: '8px' }}>
                                     <div class="card">
                                        <div class="topDetails">
                                            <div class="cardID">
                                                <p>ID : {task.taskID}</p>
                                            </div>

                                            <div class="dueDate">  
                                                <p>{task.dueDate.substring(0,10)}</p>
                                            </div>
                                        </div>
                                        
                                        <div class="bottomDetails">
                                            <div class="taskName">
                                                {task.taskName}
                                            </div>
                                        
                                            <div><p>{task.taskDescription}</p></div>
                                        </div>
                                    </div>
                                </Draggable>
                                )}
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

// Fix drag and drop -  save to database 
// or read the task status from database and get in the right column
// company line bussiness
// put address id on employee table