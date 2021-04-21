import React, {useEffect, useState} from 'react';
import { View, StyleSheet, SafeAreaView, ScrollView, Text } from 'react-native'

import { List } from 'react-native-paper';

import Deparments from './Deparments'
function Employes(props) {


    const [isLoading, setLoading] = useState(true);
    const [employees, setEmployees] = useState([]);



    useEffect(()=>{
        fetch('https://4thyearprojectapi20210323220948.azurewebsites.net/api/Employee')
        .then((response) => response.json())
        .then((json) => setEmployees(json))
        .catch((error) => console.error(error))
        .finally(() => setLoading(false));
    }, [employees]);





    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView}>
                <View style={styles.container}>
                        <Deparments />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

export default Employes;

const styles = StyleSheet.create({
    container:{
        marginTop: 30,
        margin: 10,

    }

})