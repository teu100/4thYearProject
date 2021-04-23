import React, {useEffect, useState} from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from 'react-native'

import { Button, TextInput, Snackbar  } from 'react-native-paper'
import { DatePickerModal  } from 'react-native-paper-dates'

import { Picker } from '@react-native-picker/picker';


export default function EditTask(props) {

    const [checked, setChecked] = React.useState(false);
    const [visible, setVisible] = React.useState(false);
    const [taskTitle, settaskTitle] = React.useState(props.route.params.taskName);
    const [taskDescription, settaskDescription] = React.useState(props.route.params.taskDescription);
    const [taskPriority, settaskPriority] = React.useState(props.route.params.priorityLevel);
    const [date, setDate] = React.useState(new Date());
    const [emps, setEmps] = React.useState([]);
    const [empID , setEmpID] = React.useState(0);
    const [isLoading, setLoading] = useState(true);

    useEffect(()=>{
        fetch('https://4thyearprojectapi20210323220948.azurewebsites.net/api/Employee')
        .then((response) => response.json())
        .then((json) => setEmps(json))
        .catch((error) => console.error(error))
        .finally(() => setLoading(false));
    }, [emps]);
 

  const onDismiss = React.useCallback(() => {
    setVisible(false)
  }, [setVisible])

  const onConfirm = React.useCallback(
    (params) => {
      setVisible(false);
      setDate(params.date);

    },
    [setVisible]
  );

  function getEmpName() {
    var i;
    var empName = "";
    for(i=0; i < emps.length; i++){
        if(empID === emps[i].employeeID){
            empName = emps[i].firstName;
        }
    }
    return empName;
}

    



    function handleSubmit() {
        
        if( taskPriority == ''){
            alert('Please input a priority.')
        }
        else if(taskPriority.toString() == "Low" || taskPriority.toString() == 'Medium' || taskPriority.toString() == 'High'){
            if(taskTitle == ''){
                alert('Please input a task title.')
            }
            else if( taskDescription == ''){
                alert('Please input a description.')
            }else{
                fetch('https://4thyearprojectapi20210323220948.azurewebsites.net/api/Task',{
                method: 'PUT',
                headers:{
                    'Accept': 'application/json',
                    'Content-Type':'application/json'
                },
                body:JSON.stringify({
                    taskID: props.route.params.taskID,
                    dueDate: date,
                    taskDescription: taskDescription,
                    personResponsible: getEmpName(),
                    statusString: props.route.params.statusString,
                    employeeID: empID,
                    compID: 1,
                    deptID: 2,
                    priorityLevel: taskPriority,
                    taskName: taskTitle

                })
            }
            )
            .then(res=> res.json)
            .then((result)=>
            {
                alert('Updated Successfully');
            },
            (error)=>{
                alert('Failed')
            })
            }
            
        }
        else{
            alert('Failed.')
        }
    }
console.log();
  return (
    <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
            <View>
                <View style={styles.taskID}>
                    <TextInput
                        label='Task ID'
                        mode='outlined'
                        value={props.route.params.taskID.toString()}
                        disabled={true}
                        
                    />
                </View>
                <View style={styles.taskTitle}>
                    <TextInput
                        placeholder='Task Title'
                        label='Task Title'
                        mode='outlined'
                        value={taskTitle}
                        onChangeText={taskTitle => settaskTitle(taskTitle)}
                        
                    />
                </View>
                <View style={styles.taskDes}>
                    <TextInput
                        placeholder='Task Description'
                        label='Task Description'
                        multiline={true}
                        mode='outlined'
                        value={taskDescription}
                        onChangeText={taskDescription => settaskDescription(taskDescription)}
                        />
                </View>
                <View style={styles.taskPri}>
                    <TextInput placeholder='Low, Medium, High'
                        label='Task Priority'
                        mode='outlined'
                        value={taskPriority}
                        onChangeText={taskPriority => settaskPriority(taskPriority)}
                        />
                </View>
                <View style={styles.taskDueD}>
                    <DatePickerModal
                        // locale={'en'} optional, default: automatic
                        mode="single"
                        visible={visible}
                        onDismiss={onDismiss}
                        date={date}
                        onConfirm={onConfirm}
                        validRange={{
                        startDate: new Date(),  // optional
                        }}
                    />
                    <Button 
                    mode='outlined'
                    icon='calendar' 
                    onPress={()=> setVisible(true)}>
                        Pick Due Date
                    </Button >
                </View>
                <View>
                    <Text>Person Responsible</Text>
                    <Picker selectedValue={empID}
                            onValueChange={(itemValue, itemIndex) =>
                                setEmpID(itemValue)
                            }>
                                {
                                    emps.map(emp =>(
                                        <Picker.Item key={emp.employeeID} value={emp.employeeID} label={emp.firstName} />
                                    ))}
                    </Picker>
                </View>
                <View>
                <Button 
                    mode='contained'
                    onPress={()=> handleSubmit()}>
                        Update New Task
                    </Button >
                </View>
            </View>  
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container:{
        margin: 10,
        height: '100%',
    },
    taskID:{
        marginBottom: 50,
    },
    taskTitle:{
        marginBottom: 50,
    },
    taskDes:{
        marginBottom: 50,
    },
    taskPri:{
        marginBottom: 50,
    },
    taskDueD:{
        marginBottom: 50,
    },
    
})