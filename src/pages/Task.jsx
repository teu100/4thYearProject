import React from 'react';
import styled from 'styled-components';
import Draggable from '../components/Draggable'
import Droppable from '../components/Droppable'
import {Col,Button, ButtonToolbar} from 'react-bootstrap'
import  {AddNewTask}  from '../components/NewTask';
import {EditTask} from '../components/EditTask';
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
        this.state = {tasks:[], addTaskShow : false, editTaskShow : false }


    }

    componentDidMount(){
        this.refreshList();
    }


    refreshList(){
        try {
            fetch('https://localhost:44384/api/Task')
        .then(response=> response.json())
        .then(data => 
            {
            this.setState({tasks:data})
            }
            );
        } catch (error) {
            console.log(error)
        }
        
    }

    // componentDidUpdate(){
    //     this.refreshList();
    // }

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
            if(this.state.tasks[i].statusString === "In Progress")
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

    deleteTask(taskID){
        if(window.confirm('Are you sure you want to Delete?')){
            fetch('https://localhost:44384/api/Task/'+taskID,{
                method:'DELETE',
                headers:{
                    'Accept': 'application/json',
                    'Content-Type':'application/json'
                }
            })
        }
    }
    

    
    

    render() {

        let addTaskClose =() => this.setState({addTaskShow:false})
        let editTaskClose =() => this.setState({editTaskShow:false})


        const {task, taskID, taskName, taskPriority, taskDescription, personResponsible,dueDate} = this.state;
        
        const todoTasks = this.getTODO();
        const inProgTask = this.getInProg();
        const doneTask =  this.getDoneTask();
        
        

        



        return (
            <div className="taskPage">
                 

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
                            <Droppable id="To do" style={droppableStyle} >
                            {todoTasks.map(task=>
                                <Draggable id={task.taskID} style={{ margin: '8px' }} >
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
                                            <div><p>{task.statusString }</p></div>
                                            <div><p>{task.priorityLevel}</p></div>
                                        </div>
                                        
                                            <ButtonToolbar>
                                            <Button
                                                 className="mr-2" variant="info"
                                                 onClick= {()=> this.setState({editTaskShow:true, taskID:task.taskID, taskName:task.taskName,taskPriority:task.priorityLevel, taskDescription:task.taskDescription
                                                ,personResponsible:task.personResponsible, dueDate:task.dueDate  })}
                                                >Edit</Button>
                                                <EditTask
                                                show = {this.state.editTaskShow}
                                                onHide = {editTaskClose}
                                                taskid = {taskID}
                                                taskname = {taskName}
                                                taskDescription = {taskDescription}
                                                priorityLevel = {taskPriority}
                                                personResponsible = {personResponsible}
                                                dueDate= {dueDate}
                                                />
                                                <Button className="mr-2" onClick={()=>this.deleteTask(task.taskID)} variant="danger" >Delete</Button>
                                            </ButtonToolbar>
                                        
                                    </div>
                                </Draggable>
                                )}
                            </Droppable>
                        </Col>

                        <Col>
                            <h1>In Progress</h1>
                            <Droppable id="In Progress" style={droppableStyle} onDrop={this.state.tasks.values}>
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
                                            <div><p>{task.statusString }</p></div>
                                        </div>
                                        <div class="EditDeleteButton">
                                            
                                            <ButtonToolbar>
                                            <Button
                                                 className="mr-2" variant="info"
                                                 onClick= {()=> this.setState({editTaskShow:true, taskID:task.taskID, taskName:task.taskName,taskPriority:task.priorityLevel, taskDescription:task.taskDescription
                                                ,personResponsible:task.personResponsible  })}
                                                >Edit</Button>
                                                <EditTask
                                                show = {this.state.editTaskShow}
                                                onHide = {editTaskClose}
                                                taskid = {taskID}
                                                taskname = {taskName}
                                                taskDescription = {taskDescription}
                                                priorityLevel = {taskPriority}
                                                personResponsible = {personResponsible}
                                                />
                                                <Button className="mr-2" onClick={()=>this.deleteTask(task.taskID)} variant="danger" >Delete</Button>
                                            </ButtonToolbar>
                                        </div>
                                    </div>
                                </Draggable>
                                )}
                            </Droppable>
                        </Col>

                        <Col>
                            <h1>Done</h1>
                            <Droppable id="Done" style={droppableStyle}>
                                
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
                                            <div><p>{task.statusString}</p></div>
                                        </div>
                                        <div class="EditDeleteButton">
                                            <ButtonToolbar>
                                            <Button
                                                 className="mr-2" variant="info"
                                                 onClick= {()=> this.setState({editTaskShow:true, taskID:task.taskID, taskName:task.taskName,taskPriority:task.priorityLevel, taskDescription:task.taskDescription
                                                ,personResponsible:task.personResponsible  })}
                                                >Edit</Button>
                                                <EditTask
                                                show = {this.state.editTaskShow}
                                                onHide = {editTaskClose}
                                                taskid = {taskID}
                                                taskname = {taskName}
                                                taskDescription = {taskDescription}
                                                priorityLevel = {taskPriority}
                                                personResponsible = {personResponsible}
                                                />
                                                <Button className="mr-2" onClick={()=>this.deleteTask(task.taskID)} variant="danger" >Delete</Button>
                                            </ButtonToolbar>
                                        </div>
                                    </div>
                                </Draggable>
                                )}
                            </Droppable>
                        </Col>

                    </Wrapper>
                </div>

                <div className="taskPageUnderColumn">

                </div>


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