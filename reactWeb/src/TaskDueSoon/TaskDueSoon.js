import { ListItem } from '@material-ui/core';
import React from 'react'
import {ListGroup} from 'react-bootstrap'

class TaskDueSoon extends React.PureComponent {
    constructor(props) {
        super(props);
    
        this.state = {
          data: [],
          isLoading: true
        };
      }

    componentDidMount() {
         var date = new Date();
         var dateString = date.getFullYear() +"-"+(date.getMonth()+1)+"-"+date.getDate(); 
        fetch('https://4thyearprojectapi20210323220948.azurewebsites.net/api/Count/getTaskDueSoon?date='+dateString)
          .then((response) => response.json())
          .then((json) => {
            this.setState({ data: json });
          })
          .catch((error) => console.error(error))
          .finally(() => {
            this.setState({ isLoading: false });
          });
      }

      componentDidUpdate(prevProps) {
        var date = new Date();
         var dateString = date.getFullYear() +"-"+(date.getMonth()+1)+"-"+date.getDate(); 
        fetch('https://4thyearprojectapi20210323220948.azurewebsites.net/api/Count/getTaskDueSoon?date='+dateString)
          .then((response) => response.json())
          .then((json) => {
            this.setState({ data: json });
          })
          .catch((error) => console.error(error))
          .finally(() => {
            this.setState({ isLoading: false });
          });
      }

      tasksDueSoon(){
        let i;
        let tasksDueSoon = [];

        for (i = 0; i < this.state.data.length; i++)
        {
            tasksDueSoon.push(this.state.data[i])
        }
        return tasksDueSoon;
      }
      

    render() {
        const { data, isLoading } = this.state;
        const tasksDueSoon = this.tasksDueSoon();
        var borderHeigth = 200 * tasksDueSoon.length;
        //console.log("Tasks : ",this.state.data)
        if(tasksDueSoon!==0 ){
            return(
                <div style={{width: '80%', margin: 10, borderRadius: '25px',
                border: '2px solid #0088FE',
                padding: '20px',
                height: borderHeigth,
                display: '',
}}>
                    <h2 >Tasks Due Soon</h2>
                    {
                        tasksDueSoon.map((t, i) =>(
                            <ListGroup key={i} bottomDivider>
                                    <ListGroup.Item><p style={{ margin: 0,color: 'GrayText'}}>#{tasksDueSoon[i].taskID}</p><p style={{ margin: 0,}}>{tasksDueSoon[i].taskName}</p></ListGroup.Item>
                            </ListGroup>
                        ))
                    }
                    
                </div>
            );
        }
        else{
            return (
                <dicv>
                    <p> Hello Mateus </p>
                </dicv>
            );
        }
 
        
        
    }
}

export default TaskDueSoon;
