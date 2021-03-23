import React, {useEffect, useState} from 'react';
import { View, Text, Image, StyleSheet, SafeAreaView, ScrollView } from 'react-native'
import { Card, ListItem, Button, Icon } from 'react-native-elements'

function ViewDone(props) {


    const tasks = [{id:1,title: "Get pages working", description:"Get all tasks page done", duedate: "18/03/2021", priority: "Medium"},
    {id:2,title: "Routing", description:"Get routing done", duedate: "18/03/2021", priority: "Low"},
    {id:3,title: "Log-in", description:"Get log-in working ", duedate: "18/03/2021", priority: "High"},
    {id:4,title: "Register", description:"Get register working ", duedate: "18/03/2021", priority: "High"},
    {id:5,title: "Edit", description:"Get edit working", duedate: "18/03/2021", priority: "High"},
    {id:6,title: "Delete", description:"Get delete working", duedate: "18/03/2021", priority: "High"}]

    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [movies, setMovies] =  useState([]);

    function handleDone(){
        console.log("Moved to Done");
    }

    function handleToDo(){
        console.log("Moved to ToDo")
    }

    

    useEffect(()=>{
        fetch('https://4thyearprojectapi20210323220948.azurewebsites.net/api/task')
        .then((response) => response.json())
        .then((json) => setData(json))
        .catch((error) => console.error(error))
        .finally(() => setLoading(false));
    }, []);

    
    function componentDidMount(){
        this.refreshList();
    }




    





    //console.log("Movies 2 : ", getMoviesFromApiAsync())


    return (
        <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
        <View>
            <View style={styles.Gapfiller}>
            </View>
            <View style={styles.Header}>
                <Text style={styles.pageTitle}>Tasks - Done</Text>
            </View>
            {
            data.map((u, i) => {
                return (
                    <Card key={i}>
                        <View style={styles.TopCardDetails}>
                            <View>
                                <Text>{data[i].taskID}</Text>
                            </View>
                            <View>
                                <Text>{data[i].dueDate}</Text>
                            </View>
                        </View>
                        <Card.Title>{data[i].taskName}</Card.Title>
                        <Card.Divider/>
                        <View style={styles.description}>
                            <Text >Description</Text>
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
            {console.log(data)}
            
        </View>
        </ScrollView>
        </SafeAreaView>
    );
}

export default ViewDone;

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