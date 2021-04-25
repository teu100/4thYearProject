import axios from 'axios';
import React, {useEffect, useState} from 'react';
import { View, Text, Image, StyleSheet, SafeAreaView, ScrollView, Alert } from 'react-native'
import { Card, Button, Icon } from 'react-native-elements'
import { Button as Button1} from 'react-native-paper'

function ViewInProgress(props) {
    const [isLoading, setLoading] = useState(true);
    const [IpTask, setTasks] = useState([]);

    function handleDone(task){
        task.statusString = "Done";
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

    function handleToDo(task){
        task.statusString = "To do";
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

    useEffect(()=>{
        fetch('https://4thyearprojectapi20210323220948.azurewebsites.net/api/Task/getByStatusString?statusString=In%20Progress')
        .then((response) => response.json())
        .then((json) => setTasks(json))
        .catch((error) => console.error(error))
        .finally(() => setLoading(false));
    }, [IpTask]);


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

    return (
        <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
        <View>
            

            {
            IpTask.map((u, i) => {
                return (
                    <Card key={i}>
                        <View style={styles.TopCardDetails}>
                            <View>
                                <Text>{IpTask[i].taskID}</Text>
                            </View>
                            <View>
                                <Text>Due Date: {IpTask[i].dueDate.substring(0,10)}</Text>
                            </View>
                        </View>
                        <Button1 mode='text' compact={true} onPress={()=> props.navigate.push('taskEdit',IpTask[i])}>
                            <Card.Title>{IpTask[i].taskName}</Card.Title>
                        </Button1>
                        <Card.Divider/>
                        <View style={styles.description}>
                            <Text>{IpTask[i].taskDescription}</Text>
                        </View>
                        
                        <View style={{flexDirection:"row", justifyContent: "space-around"}}>
                            <View >
                                <Button
                                    onPress={()=>handleToDo(IpTask[i])}
                                    buttonStyle={styles.LeftButton}
                                    title='To do'/>
                            </View>
                            
                            <View>
                                <Button
                                    onPress={()=>handleDone(IpTask[i])}
                                    buttonStyle={styles.RightButton}
                                    title='Done'/>
                            </View>
                        </View>
                        <Card.Divider/>
                        <Icon 
                            name='trash'
                            type='font-awesome-5'
                            color='#517fa4'
                            onPress={() => deleteAlert(IpTask[i].taskID)}
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

export default ViewInProgress;

const styles = StyleSheet.create({
    RightButton:{
        marginRight: 10,
        marginLeft: 178
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