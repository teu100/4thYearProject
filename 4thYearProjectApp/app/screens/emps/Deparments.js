import React, {useEffect, useState} from 'react';
import { View, StyleSheet, SafeAreaView, ScrollView, Text } from 'react-native'

import { List } from 'react-native-paper';

import EmpsByDepartment from './EmpsByDepartment';

function Deparments(props) {


    const [isLoading, setLoading] = useState(true);
    const [departments, setDepartments] = useState([]);



///api/Deparment/getByCompID?compID=1
    useEffect(()=>{
        fetch('https://4thyearprojectapi20210323220948.azurewebsites.net/api/Deparment/getByCompID?compID=1')
        .then((response) => response.json())
        .then((json) => setDepartments(json))
        .catch((error) => console.error(error))
        .finally(() => setLoading(false));
    }, [departments]);



    function getDeptLenght(){
        var lenght = departments.length();
        return lenght;
    }
    


    return (
                <View style={styles.container}>
                    <List.Section>
                {
                    departments.map((u, i) => {
                        return(
                            <>
                                <List.Subheader key={departments[i].deptName}>{departments[i].deptName}</List.Subheader>
                                <EmpsByDepartment key={departments[i].deptID} deptID={departments[i].deptID}/>
                            </>
                            
                        )
                    })
                }
                </List.Section>
                
                
                </View>
    );
}

export default Deparments;

const styles = StyleSheet.create({
    container:{
        marginTop: 30,
        margin: 10,

    }

})