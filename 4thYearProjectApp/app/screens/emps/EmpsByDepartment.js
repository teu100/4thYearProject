import React, {useEffect, useState} from 'react';
import { View, StyleSheet, SafeAreaView, ScrollView, Text } from 'react-native'

import { List } from 'react-native-paper';

function EmpsByDepartment(props) {


    const [isLoading, setLoading] = useState(true);
    const [employees, setEmployees] = useState([]);
    const [deptIDC , setDeptIDC] = useState(props.deptID);


    useEffect(()=>{
        fetch('https://4thyearprojectapi20210323220948.azurewebsites.net/api/Employee')
        .then((response) => response.json())
        .then((json) => setEmployees(json))
        .catch((error) => console.error(error))
        .finally(() => setLoading(false));
    }, [employees]);


    function employeesList(){
        if(employees){
        
    }
    }

    return (

                <View style={styles.container}>
                        {employees.map((u, i) => {
                            if(employees[i].deptID == deptIDC){
                                var fullName = employees[i].firstName +" "+ employees[i].lastName;
                                return(
                                    <List.Item key={i}
                                        title={fullName}
                                        description={employees[i].compRole}
                                        left={props => <List.Icon {...props} icon="account-circle" />}
                                    />
                                )
                            }
                            })
                        }
                </View>
    );
}

export default EmpsByDepartment;

const styles = StyleSheet.create({
    container:{
        marginTop: 30,
        margin: 10,

    }

})