import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import NewTask from './NewTask';
import EditTask from './EditTask';

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import NavTabs from './NavTab'


//view is the same as div on 
export default function TryNavTab() {
  console.log("App Executed")

  const AuthStack = createStackNavigator();
  return (
      <AuthStack.Navigator>
        <AuthStack.Screen name="Tasks" component={NavTabs}/>
        <AuthStack.Screen name="newTask" component={NewTask} options={{ title: 'New Task' }}/>
        <AuthStack.Screen name="taskEdit" component={EditTask} options={{ title: 'Edit Task' }}/>
      </AuthStack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
