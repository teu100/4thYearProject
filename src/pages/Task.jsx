import React from 'react';
import styled from 'styled-components';
import Draggable from '../components/Draggable'
import Droppable from '../components/Droppable'
import { Container, Row, Col, Navbar, Nav, NavDropdown, Button, Card, Form, ButtonToolbar} from 'react-bootstrap'
import  {AddNewTask}  from '../components/NewTask';
import '../index.css';



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
    height: '1000px',
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

    componentDidUpdate(){
        this.refreshList();
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
            <div className="taskPage">
                 <div className="myNavBarCSS">
                    <ul>
                        <li><a href="/">Task Managment</a></li>
                        <li><a href="/task">Tasks</a></li>
                        <li><a href="/users">User's</a></li>
                        <li><a href="/companyDetails">Company Details</a></li>
                    </ul>
                </div>

                <div className="taskColumns">
                    <div>
                        <br></br>
                        <ButtonToolbar>
                            <Button 
                            variant="primary" 
                            onClick={()=> this.setState({addTaskShow: true})}>New Task + </Button>
                            <AddNewTask 
                            show={this.state.addTaskShow} 
                            onHide={addTaskClose}/>
                        </ButtonToolbar>
                </div>

        
                    <Wrapper>
                        <Col >
                        <h1 id="ToDO">To do</h1>
                            <Droppable id="dr1" style={droppableStyle} >
                            {todoTasks.map(task=>
                                <Draggable id={task.taskID} style={{ margin: '8px' }}>
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
                                <Draggable id={task.taskID} style={{ margin: '8px' }}>
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
                                <Draggable id={task.taskID} style={{ margin: '8px' }}>
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
                </div>

                <button>New button</button>


                <div className="myFooter">
                    <ul>
                        <li><a href="/">Task Managment</a></li>
                        <li><a href="https://github.com/teu100" target="_blank" rel='noreferrer'>GitHub</a></li>
                    </ul>
            </div>
            </div>
        );
    }
}

// Fix drag and drop -  save to database 
// or read the task status from database and get in the right column
// company line bussiness
// put address id on employee table