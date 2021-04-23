import React from 'react';
import { StyleSheet, Text, View } from 'react-native';



import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Employes from './Employes'


//view is the same as div on 
export default function EmpStack() {
  const AuthStack = createStackNavigator();
  return (
      <AuthStack.Navigator>
        <AuthStack.Screen name="Employees" component={Employes}/>
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
