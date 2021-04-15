import React, {useState} from 'react';
import { View, Text, Image, StyleSheet, SafeAreaView, ScrollView, Alert } from 'react-native'
import PieChartExample from  './Charts/PieChartExample'
import { Text as TextRNE } from 'react-native-elements';

import TaskDueSoon from './tasksDueSoon/TasksDueSoon'
import { auth } from '../../firebase';


function HomeScreen(props) {

    var user = auth.currentUser;
    if(!user){
        return(
            <Text>Please Log in</Text>
        )
        
    }else{
    return (
        <SafeAreaView >
            <ScrollView >
                <View style={styles.container}>
                    <View>
                        <TextRNE h3>Company's progress</TextRNE>
                        <View style={styles.chartBox}>
                            <View>
                                <View style={styles.chartDesc}>
                                    <Text>Chart Colours : </Text>
                                    <Text style={styles.toDoColor}>To do  </Text>
                                    <Text style={styles.inProgColor}>In progress  </Text>
                                    <Text style={styles.doneColor}>Done</Text>
                                </View>
                                <View styles={styles.chart}>
                                    <PieChartExample  navigation={props}/>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View>
                        <TextRNE h3>Tasks due soon: </TextRNE>
                        <TaskDueSoon />
                    </View>
                </View>
                
            </ScrollView>
        </SafeAreaView>
    );
    }
}

export default HomeScreen;

const styles = StyleSheet.create({
    container:{
        margin: 10,
    },
    toDoColor:{
        color: '#3366ff',

    },
    inProgColor:{
        color: '#ffbf00',

    },
    doneColor:{
        color: '#33cc33',

    },
    chartBox:{
        borderWidth: 4,
        borderColor: "#20232a",
        borderRadius: 6,
        alignItems: 'flex-start',


    },
    chart:{
        alignItems: 'center',
        marginBottom: 10,
    },
    chartDesc:{
        flexDirection:"row",
        justifyContent: "space-between"
    }
})