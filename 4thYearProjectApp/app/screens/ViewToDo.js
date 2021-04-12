import React, {useEffect, useState} from 'react';
import { View, Text, Image, StyleSheet, SafeAreaView, ScrollView, Alert } from 'react-native'
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import { Button as Button1 } from 'react-native-paper'
import EditTask from './EditTask';

function ViewToDo(props) {

    const [isLoading, setLoading] = useState(true);
    const [toDoTasks, setTasks] = useState([]);

    function handleInProg(task){
        task.statusString = "In progress";
        fetch('https://4thyearprojectapi20210323220948.azurewebsites.net/api/Task', {
            method: 'PUT',
            headers:{
                'Accept': 'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                "taskID": task.taskID,
                "dueDate": task.dueDate,
                "taskDescription": task.taskDescription,
                "personResponsible": task.personResponsible,
                "statusString": task.statusString,
                "employeeID": task.employeeID,
                "compID": task.compID,
                "deptID": task.deptID,
                "priorityLevel": task.priorityLevel,
                "taskName": task.taskName
            })
        })
        .catch((error) => console.error(error))
    }
    function deleteAlert(id){
        Alert.alert(
            "Delete Task #"+id,
            "Are you sure you want to delete task "+id+"  ?",
            [
              {
                text: "Cancel",
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel"
              },
              { text: "OK", onPress: () => deleteTask(id) }
            ]
          );
    }

    function deleteTask(id){
        fetch('https://4thyearprojectapi20210323220948.azurewebsites.net/api/Task?id='+id,{
                method:'DELETE',
                headers:{
                    'Accept': 'application/json',
                    'Content-Type':'application/json'
                }
            })
    }
 



    
    useEffect(()=>{
        fetch('https://4thyearprojectapi20210323220948.azurewebsites.net/api/Task/getByStatusString?statusString=To%20do')
        .then((response) => response.json())
        .then((json) => setTasks(json))
        .catch((error) => console.error(error))
        .finally(() => setLoading(false));
    }, [toDoTasks]);

    //console.log(props.navigate)
    
    return (
        <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
        <View>
            
        <Button1 
            mode='contained'
            onPress={()=> props.navigate.push('newTask')}
            >
            New Task
        </Button1 >
            {
            toDoTasks.map((u, i) => {
                return (
                    <Card key={i}>
                        <View style={styles.TopCardDetails}>
                            <View>
                                <Text>{toDoTasks[i].taskID}</Text>
                            </View>
                            <View>
                                <Text>Due Date: {toDoTasks[i].dueDate.substring(0,10)}</Text>
                            </View>
                        </View>
                        <Button1 mode='text' compact={true} onPress={()=> props.navigate.push('taskEdit',toDoTasks[i])}>
                            <Card.Title>{toDoTasks[i].taskName}</Card.Title>
                        </Button1>
                        <Card.Divider/>
                        <View style={styles.description}>
                            <Text >{toDoTasks[i].taskDescription}</Text>
                        </View>
                        
                        <View style={{flexDirection:"row", justifyContent: "space-around"}}>

                            
                            <View>
                                <Button
                                    onPress={()=>handleInProg(toDoTasks[i])}
                                    buttonStyle={styles.RightButton}
                                    title='In Progress'/>
                            </View>
                        </View>
                        <Card.Divider/>
                        <Icon 
                            name='trash'
                            type='font-awesome-5'
                            color='#517fa4'
                            onPress={() => deleteAlert(toDoTasks[i].taskID)}
                            style={styles.deleteButton}
                            size={16}
                        />
                    </Card>
                );
            })
            }
            
        </View>
        </ScrollView>
        </SafeAreaView>
    );
}

export default ViewToDo;

const styles = StyleSheet.create({
    RightButton:{
        marginRight: 10,
        marginLeft: 200,
        marginBottom: 5,
    },
    LeftButton:{
    },
    TopCardDetails:{
        flexDirection:"row",
        justifyContent: "space-between"
    },
    description:{
        alignItems: "center"
    },
    Header:{
        alignItems: "center",
        position:"relative",
    },
    pageTitle:{
        fontWeight: "bold"
    },
    deleteButton:{
        alignItems: 'center',
    }
})