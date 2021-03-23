import React, {useEffect, useState} from 'react';
import { View, Text, Image, StyleSheet, SafeAreaView, ScrollView } from 'react-native'
import { Card, ListItem, Button, Icon } from 'react-native-elements'

function ViewToDo(props) {


    const tasks = [{id:1,title: "Get pages working", description:"Get all tasks page done", duedate: "18/03/2021", priority: "Medium"},
    {id:2,title: "Routing", description:"Get routing done", duedate: "18/03/2021", priority: "Low"},
    {id:3,title: "Log-in", description:"Get log-in working ", duedate: "18/03/2021", priority: "High"},
    {id:4,title: "Register", description:"Get register working ", duedate: "18/03/2021", priority: "High"},
    {id:5,title: "Edit", description:"Get edit working", duedate: "18/03/2021", priority: "High"},
    {id:6,title: "Delete", description:"Get delete working", duedate: "18/03/2021", priority: "High"}]

    const [data, setData] = useState([]);

    function handleDone(){
        console.log("Moved to Done");
    }

    function handleToDo(){
        console.log("Moved to ToDo")
    }

    
    const getTasks = () => {
        return fetch('https://reactnative.dev/movies.json')
        .then((response) => response.json())
        .then((json) => {
            setData(json);
        })
        .catch((error) => {
        console.error(error);
        });
    };

    

    const movies =  getTasks();


    console.log("Movies 1: ",data);

    //console.log("Movies 2 : ", getMoviesFromApiAsync())


    return (
        <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
        <View>
            <View style={styles.Gapfiller}>
            </View>
            <View style={styles.Header}>
                <Text style={styles.pageTitle}>Tasks - To Do</Text>
            </View>
            {
            tasks.map((u, i) => {
                return (
                    <Card key={i}>
                        <View style={styles.TopCardDetails}>
                            <View>
                                <Text>{tasks[i].id}</Text>
                            </View>
                            <View>
                                <Text>{tasks[i].duedate}</Text>
                            </View>
                        </View>
                        <Card.Title>{tasks[i].title}</Card.Title>
                        <Card.Divider/>
                        <View style={styles.description}>
                            <Text >{tasks[i].description}</Text>
                        </View>
                        
                        <View style={{flexDirection:"row", justifyContent: "space-around"}}>
                            <View >
                                <Button
                                    onPress={handleToDo}
                                    buttonStyle={styles.LeftButton}
                                    title='To do'/>
                            </View>
                            
                            <View>
                                <Button
                                    onPress={handleDone}
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