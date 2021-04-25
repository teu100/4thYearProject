import React from 'react';
import styled from 'styled-components';
import Draggable from '../components/Draggable'
import Droppable from '../components/Droppable'
import {Col,Button, ButtonToolbar} from 'react-bootstrap'
import  {AddNewTask}  from '../components/NewTask';
import {EditTask} from '../components/EditTask';
import '../index.css';

import Card from '@material-ui/core/Card';


import calendar  from '../images/calendar.png'
import AddIcon from '@material-ui/icons/Add';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import EditIcon from '@material-ui/icons/Edit';
import { CardContent, Divider, Typography } from '@material-ui/core';

const Wrapper = styled.div`
    width: 60%;
    padding: 32px;
    padding-top: 10px;
    display: flex;
    justify-content: center;
    
`;




const droppableStyle = {
    backgroundColor: '#f6f6f6',
    borderStyle: 'solid',
    borderColor: '#f6f6f6',
    paddingTop: "20px",
    width: '305px',
    height: '1000px',
    margin: '0px'
}

const cardRoot = {
    minWidth: 275,
}

const cardTitle = {
    fontSize: 14,
}



export default class DndTest extends React.Component {
    constructor(props){
        super(props);
        this.state = {tasks:[], addTaskShow : false, editTaskShow : false , weather:[], isLoaded: false, error: null}


    }

    componentDidMount(){
    fetch("https://4thyearprojectapi20210323220948.azurewebsites.net/api/Task")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            tasks: result
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
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

    deleteTask(taskID){
        if(window.confirm('Are you sure you want to Delete?')){
            fetch('https://4thyearprojectapi20210323220948.azurewebsites.net/api/Task?id='+taskID,{
                method:'DELETE',
                headers:{
                    'Accept': 'application/json',
                    'Content-Type':'application/json'
                }
            })
            
        }
         

    }
    

    
    closeAddModal(){
        this.state.addTaskShow = false;
    }


    



    render() {

        const {error, isLoaded, tasks} = this.state;
        let addTaskClose =() => this.setState({addTaskShow:false})
        let editTaskClose =() => this.setState({editTaskShow:false})


        const {taskID, taskName, taskPriority, taskDescription, personResponsible, dueDate1, statusString1} = this.state;
        const todoTasks = this.getTODO();
        const inProgTask = this.getInProg();
        const doneTask =  this.getDoneTask();
        
        if (error) {
            return <div>Error: {error.message}</div>;
          } else if (!isLoaded) {
            return <div><h1>Loading...</h1></div>;
          } else {
        return (
            <div className="taskPage">
                 

                <div className="taskColumns">
                    <div>
                        <br></br>
                        <ButtonToolbar>
                            <Button 
                            variant="primary" 
                            onClick={()=> this.setState({addTaskShow: true})}>New Task <AddIcon/> </Button>
                            <AddNewTask 
                            show={this.state.addTaskShow} 
                            onHide={()=> this.setState({addTaskShow: false})}/>
                        </ButtonToolbar>
                </div>
                    <Wrapper>
                        <Col >
                        <h1 id="ToDO">To do</h1>
                            <Droppable id="To do" style={droppableStyle} >
                                {todoTasks.map(task=>
                                    <Draggable id={task.taskID} style={{ margin: '8px' }} >
                                        <Card className={cardRoot}>
                                            <CardContent>
                                            <div class="topDetails">
                                                <div class="cardID">
                                                    <Typography className={cardTitle} color="textSecondary">#{task.taskID}</Typography>
                                                </div>
                                                <div class="dueDate">
                                                    <img className="calendarIcon" src={calendar} alt="calendarIcon"/>
                                                    <Typography className="dueDateString">{task.dueDate.substring(0,10)}</Typography>
                                                    <EditIcon className="editIconButton" onClick= {()=> this.setState({editTaskShow:true, taskID:task.taskID, taskName:task.taskName,taskPriority:task.priorityLevel, taskDescription:task.taskDescription
                                                                    ,personResponsible:task.personResponsible, dueDate: task.dueDate, statusString1: task.statusString  })}
                                                    />
                                                    <EditTask
                                                        show = {this.state.editTaskShow}
                                                        onHide = {editTaskClose}
                                                        taskid = {task.taskID}
                                                        taskname = {task.taskName}
                                                        taskDescription = {task.taskDescription}
                                                        priorityLevel = {task.priorityLevel}
                                                        personResponsible = {task.personResponsible}
                                                        dueDate = {task.dueDate}
                                                        statusString = {task.statusString}
                                                    />                                           
                                                </div>
                                            </div>
                                                <Divider />
                                                <Typography variant="h6" component="h6">{task.taskName}</Typography>
                                                <Typography variant="body2">{task.taskDescription}</Typography>
                                            </CardContent>
                                            <DeleteForeverIcon className="deleteIconButton" onClick={()=>this.deleteTask(task.taskID)}/>
                                        </Card>
                                        
                                    </Draggable>
                                )}
                                    
                            </Droppable>
                        </Col>

                        <Col>
                            <h1>In Progress</h1>
                            <Droppable id="In progress" style={droppableStyle} onDrop={this.state.tasks.values}>
                                {inProgTask.map(task=>
                                    <Draggable id={task.taskID} style={{ margin: '8px' }}>
                                        <Card className={cardRoot}>
                                            <CardContent>
                                                <div class="topDetails">
                                                    <div class="cardID">
                                                        <Typography className={cardTitle} color="textSecondary">#{task.taskID}</Typography>
                                                    </div>
                                                    <div class="dueDate">
                                                        <img className="calendarIcon" src={calendar} alt="calendarIcon"/>
                                                        <Typography className="dueDateString">{task.dueDate.substring(0,10)}</Typography>
                                                        <EditIcon className="editIconButton" onClick= {()=> this.setState({editTaskShow:true, taskID:task.taskID, taskName:task.taskName,taskPriority:task.priorityLevel, taskDescription:task.taskDescription
                                                                        ,personResponsible:task.personResponsible, dueDate: task.dueDate, statusString1: task.statusString  })}/>
                                                                        
                                                                    <EditTask
                                                                    show = {this.state.editTaskShow}
                                                                    onHide = {editTaskClose}
                                                                    taskid = {taskID}
                                                                    taskname = {taskName}
                                                                    taskDescription = {taskDescription}
                                                                    priorityLevel = {taskPriority}
                                                                    personResponsible = {personResponsible}
                                                                    dueDate = {dueDate1}
                                                                    statusString = {statusString1}
                                                                    />                                           
                                                    </div>
                                                </div>
                                                <Divider />
                                                <Typography variant="h6" component="h6">{task.taskName}</Typography>
                                                <Typography variant="body2">{task.taskDescription}</Typography>
                                            </CardContent>
                                            <DeleteForeverIcon className="deleteIconButton" onClick={()=>this.deleteTask(task.taskID)}/>
                                        </Card>
                                    </Draggable>
                                )}
                            </Droppable>
                        </Col>

                        <Col>
                            <h1>Done</h1>
                            <Droppable id="Done" style={droppableStyle}> 
                                {doneTask.map(task=>
                                    <Draggable id={task.taskID} style={{ margin: '8px' }}>
                                        <Card className={cardRoot}>
                                            <CardContent>
                                            <div class="topDetails">
                                                <div class="cardID">
                                                    <Typography className={cardTitle} color="textSecondary">#{task.taskID}</Typography>
                                                </div>

                                                <div class="dueDate">
                                                    <img className="calendarIcon" src={calendar} alt="calendarIcon"/>
                                                    <Typography className="dueDateString">{task.dueDate.substring(0,10)}</Typography>
                                                    <EditIcon className="editIconButton" onClick= {()=> this.setState({editTaskShow:true, taskID:task.taskID, taskName:task.taskName,taskPriority:task.priorityLevel, taskDescription:task.taskDescription
                                                                    ,personResponsible:task.personResponsible, dueDate: task.dueDate, statusString1: task.statusString  })}/>
                                                                    
                                                                <EditTask
                                                                show = {this.state.editTaskShow}
                                                                onHide = {editTaskClose}
                                                                taskid = {taskID}
                                                                taskname = {taskName}
                                                                taskDescription = {taskDescription}
                                                                priorityLevel = {taskPriority}
                                                                personResponsible = {personResponsible}
                                                                dueDate = {dueDate1}
                                                                statusString = {statusString1}
                                                                />                                           
                                                </div>
                                            </div>
                                            <Divider />
                                            <Typography variant="h6" component="h6">{task.taskName}</Typography>
                                            <Typography variant="body2">{task.taskDescription}</Typography>
                                            </CardContent>
                                            <DeleteForeverIcon className="deleteIconButton" onClick={()=>this.deleteTask(task.taskID)}/>
                                        </Card>
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

}



// put address id on employee table