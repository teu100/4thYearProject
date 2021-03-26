import React from 'react';
import PropTypes from 'prop-types';

export default class Droppable extends React.Component{



    drop = (e) => {
        try {
            e.preventDefault();
        const data = e.dataTransfer.getData('transfer', e.target.id);
        var TaskidLocation = this.getColumnValue(e)
        e.target.appendChild(document.getElementById(data))
        var taskID = 0
        var columnName = ""
        var taskID = e.target.children[TaskidLocation].id
        var columnName = e.target.id
        console.log(columnName, taskID)
        this.updateTaskStatus(columnName,taskID)
        } catch (error) {
            console.log(error)
        }
        

    }

    allowDrop = (e) => {
        e.preventDefault();
    }

    getColumnValue(e){
        var latest = e.target.children
        var length = latest.length
        return length
    }


    updateTaskStatus(a,id) {
        fetch('https://localhost:5001/api/MoveTask?id='+id+'&statusString='+a,{
            method: 'PUT',
            headers:{
                'Accept': 'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                taskID:id,
                statusString: a
            })
        }
        )
        .then(res=> res.json())
        .then((result)=>
        {
            console.log(result);
        },
        (error)=>{
            alert('Failed')
        })

    }
    
    render(){
        return(
            <div id={this.props.id} onDrop={this.drop} onDragOver={this.allowDrop} style={this.props.style}  colValue={this.props.colValue} taskColumn={this.props.taskColumn} taskID={this.props.taskID}> 
                {this.props.children} 
            </div>
        );
    }
}



Droppable.propTypes = {
    id: PropTypes.string,
    style: PropTypes.object,
    colValue: PropTypes.string,
    children: PropTypes.node,
    taskColumn: PropTypes.string
}