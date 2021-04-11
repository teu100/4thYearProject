import React, {useEffect} from 'react';
import { View, Text, Image, StyleSheet, SafeAreaView, ScrollView } from 'react-native'

import { Button, TextInput, Snackbar  } from 'react-native-paper'
import { DatePickerModal  } from 'react-native-paper-dates'

export default function NewTask() {

    const [checked, setChecked] = React.useState(false);
    const [visible, setVisible] = React.useState(false);
    const [taskTitle, settaskTitle] = React.useState('');
    const [taskDescription, settaskDescription] = React.useState('');
    const [taskPriority, settaskPriority] = React.useState('');
    const [date, setDate] = React.useState(new Date());

    useEffect(() => {
    }, [date])


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
                method: 'Post',
                headers:{
                    'Accept': 'application/json',
                    'Content-Type':'application/json'
                },
                body:JSON.stringify({
                    dueDate: date,
                    taskDescription: taskDescription,
                    personResponsible: 'Mateus',
                    statusString: 'To do',
                    employeeID: 6,
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
                alert('Added Successfully');
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

  return (
    <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
            <View>
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
                <Button 
                    mode='contained'
                    onPress={()=> handleSubmit()}>
                        Submit
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