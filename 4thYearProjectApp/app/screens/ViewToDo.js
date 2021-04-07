import React, {useEffect, useState} from 'react';
import { View, Text, Image, StyleSheet, SafeAreaView, ScrollView } from 'react-native'
import { Card, ListItem, Button, Icon } from 'react-native-elements'

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



    
    useEffect(()=>{
        fetch('https://4thyearprojectapi20210323220948.azurewebsites.net/api/Task/getByStatusString?statusString=To%20do')
        .then((response) => response.json())
        .then((json) => setTasks(json))
        .catch((error) => console.error(error))
        .finally(() => setLoading(false));
    }, [toDoTasks]);



    return (
        <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
        <View>
            
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
                        <Card.Title>{toDoTasks[i].taskName}</Card.Title>
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
    Gapfiller:{
        width: "100%",
        height: 70,
        backgroundColor: "white",
        alignItems: "center",
        bottom: 5,
    },
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