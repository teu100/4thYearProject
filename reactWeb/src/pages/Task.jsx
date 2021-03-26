import React from 'react';
import styled from 'styled-components';
import Draggable from '../components/Draggable'
import Droppable from '../components/Droppable'
import {Col,Button, ButtonToolbar} from 'react-bootstrap'
import  {AddNewTask}  from '../components/NewTask';
import {EditTask} from '../components/EditTask';
import '../index.css';

import Card from '@material-ui/core/Card';
import { Grid } from "@material-ui/core";


import calendar  from '../images/calendar.png'

//import {DeleteForeverIcon} from '@material-ui/icons';
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

const topCardDetails = {
    spacing: 8,
}

const cardDeleteButton = {
    marginLeft: "right",
}


export default class DndTest extends React.Component {
    constructor(props){
        super(props);
        this.state = {tasks:[], addTaskShow : false, editTaskShow : false , weather:[]}


    }

    componentDidMount(){
        this.refreshList();
    }


    refreshList(){
        try {
            fetch('https://localhost:5001/api/Task', {mode:'cors'})
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

    

    getWeather(){
        try {
            fetch('https://api.openweathermap.org/data/2.5/onecall?lat=53.3498&lon=6.2603&exclude=current,minutely,hourly,alerts&units=metric&appid=f9b55b1ec70b6f42ddf52b37bfd054b4')
        .then(response=> response.json())
        .then(data => 
            {
            this.setState({weather:data})
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
            window.location.reload()
        }
         

    }
    

    
    

    render() {

        let addTaskClose =() => this.setState({addTaskShow:false})
        let editTaskClose =() => this.setState({editTaskShow:false})


        const {task, taskID, taskName, taskPriority, taskDescription, personResponsible} = this.state;
        var dueDate1 =  new Date();
        const todoTasks = this.getTODO();
        const inProgTask = this.getInProg();
        const doneTask =  this.getDoneTask();
        
        console.log(todoTasks)
        
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
                                                <p>#{task.taskID}</p>
                                            </div>

                                            <div class="dueDate"> 
                                                <img className="calendarIcon" src={calendar} alt="calendarIcon"/>
                                                <p className="dueDateString">{task.dueDate.substring(0,10)}</p>
                                                <EditIcon className="editIconButton" onClick= {()=> this.setState({editTaskShow:true, taskID:task.taskID, taskName:task.taskName,taskPriority:task.priorityLevel, taskDescription:task.taskDescription
                                                    ,personResponsible:task.personResponsible, dueDate1: task.dueDate  })}/>
                                                    
                                                <EditTask
                                                show = {this.state.editTaskShow}
                                                onHide = {editTaskClose}
                                                taskid = {taskID}
                                                taskname = {taskName}
                                                taskDescription = {taskDescription}
                                                priorityLevel = {taskPriority}
                                                personResponsible = {personResponsible}
                                                dueDate = {dueDate1}
                                                />
                                            
                                            </div>
                                            
                                        </div>
                                        
                                        <div class="bottomDetails">
                                            <div class="taskName">
                                                {task.taskName}
                                            </div>
                                        
                                            <div><p>{task.taskDescription}</p></div>
                                            {/**<div><p>{task.priorityLevel}</p></div> */}
                                        </div>
                                        <div class="deleteIconButton">
                                            <DeleteForeverIcon  className="deleteIconButton" onClick={()=>this.deleteTask(task.taskID)}></DeleteForeverIcon>
                                        </div>
                                        
                                    </div>
                                    
                                </Draggable>
                                )}
                                    <Card className={cardRoot}>
                                        <CardContent>
                                            <Grid container spacing="1">
                                                <Grid item>  {/*textPrimary to have title black*/}
                                                    <Typography className={cardTitle} color="textSecondary">#1 </Typography>
                                                </Grid>

                                                <Grid item>
                                                    <Typography><img className="calendarIcon" src={calendar} alt="calendarIcon"/>2021-09-03</Typography>
                                                </Grid>

                                                <Grid item>
                                                    <EditIcon className="editIconButton" onClick= {()=> this.setState({editTaskShow:true})}/>
                                                </Grid>
                                            </Grid>
                                                    
                                            
                                            <Divider />
                                            <Typography variant="h6" component="h6">
                                                Task Name
                                            </Typography>
                                            <Typography variant="body2">
                                                Task description will go here.
                                            </Typography>
                                        </CardContent>
                                        <DeleteForeverIcon className="cardDeleteButton"/>
                                    </Card>
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
                                                <p>#{task.taskID}</p>
                                            </div>

                                            <div class="dueDate">  
                                                <img className="calendarIcon" src={calendar} alt="calendarIcon"/>
                                                <p className="dueDateString">{task.dueDate.substring(0,10)}</p>
                                                <EditIcon className="editIconButton" onClick= {()=> this.setState({editTaskShow:true, taskID:task.taskID, taskName:task.taskName,taskPriority:task.priorityLevel, taskDescription:task.taskDescription
                                                        ,personResponsible:task.personResponsible, dueDate: task.dueDate  })}/>
                                                        
                                                    <EditTask
                                                    show = {this.state.editTaskShow}
                                                    onHide = {editTaskClose}
                                                    taskid = {taskID}
                                                    taskname = {taskName}
                                                    taskDescription = {taskDescription}
                                                    priorityLevel = {taskPriority}
                                                    personResponsible = {personResponsible}
                                                    dueDate = {dueDate1}
                                                    />                                       
                                            </div>
                                        </div>
                                        
                                        <div class="bottomDetails">
                                            <div class="taskName">
                                                {task.taskName}
                                            </div>
                                        
                                            <div><p>{task.taskDescription}</p></div>
                                            <div><p>{task.priorityLevel}</p></div>

                                        </div>
                                        <div class="deleteIconButton">
                                            <DeleteForeverIcon  className="deleteIconButton" onClick={()=>this.deleteTask(task.taskID)}></DeleteForeverIcon>
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
                                                <p>#{task.taskID}</p>
                                            </div>

                                            <div class="dueDate">  
                                                <img className="calendarIcon" src={calendar} alt="calendarIcon"/>
                                                <p className="dueDateString">{task.dueDate.substring(0,10)}</p>
                                                <EditIcon className="editIconButton" onClick= {()=> this.setState({editTaskShow:true, taskID:task.taskID, taskName:task.taskName,taskPriority:task.priorityLevel, taskDescription:task.taskDescription
                                                        ,personResponsible:task.personResponsible, dueDate: task.dueDate  })}/>
                                                <EditTask
                                                    show = {this.state.editTaskShow}
                                                    onHide = {editTaskClose}
                                                    taskid = {taskID}
                                                    taskname = {taskName}
                                                    taskDescription = {taskDescription}
                                                    priorityLevel = {taskPriority}
                                                    personResponsible = {personResponsible}
                                                    dueDate = {dueDate1}
                                                />      
                                            </div>
                                        </div>
                                        
                                        <div class="bottomDetails">
                                            <div class="taskName">
                                                {task.taskName}
                                            </div>
                                        
                                            <div><p>{task.taskDescription}</p></div>
                                            <div><p>{task.priorityLevel}</p></div>

                                        </div>
                                        <div class="EditDeleteButton">
                                            <DeleteForeverIcon  className="deleteIconButton" onClick={()=>this.deleteTask(task.taskID)}></DeleteForeverIcon>
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





// put address id on employee table