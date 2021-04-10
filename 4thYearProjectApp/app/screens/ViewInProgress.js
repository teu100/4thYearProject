import axios from 'axios';
import React, {useEffect, useState} from 'react';
import { View, Text, Image, StyleSheet, SafeAreaView, ScrollView } from 'react-native'
import { Card, ListItem, Button, Icon } from 'react-native-elements'

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
                                <Text>{IpTask[i].dueDate}</Text>
                            </View>
                        </View>
                        <Card.Title>{IpTask[i].taskName}</Card.Title>
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
    }
})