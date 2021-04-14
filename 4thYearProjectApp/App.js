import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from '@react-navigation/drawer';

import NavTabs from './app/screens/NavTabforApps'

import PieChartExample from  './app/screens/Charts/PieChartExample'

import HomeNav from './app/screens/HomeNav'

import Login from './app/screens/LoginRRegistre/Login'
import RegisterScreen from './app/screens/LoginRRegistre/RegisterScreen'
function WelcomeScreen1({navigation}){
  return (
    <HomeNav navigate={navigation}/>
  )
}

function Tasks1({navigation}){
  return (
    <NavTabs navigate={navigation} />
  )
}

function PieChartExample1({naviagtion}){
  return (
    <PieChartExample />
  )
}

function login({navigation}){
  return (
    <Login navigate={navigation}/>
  )
}

function Register(){
  return(
    <RegisterScreen />
  )
}

const Drawer = createDrawerNavigator();

//view is the same as div on 
export default function App() {
  console.log("App Executed")
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={WelcomeScreen1} />
        <Drawer.Screen name="Login" component={login} />
        <Drawer.Screen name="Register" component={Register} />
        <Drawer.Screen name="Tasks" component={Tasks1} />
        <Drawer.Screen name="Chart" component={PieChartExample1} />
      </Drawer.Navigator>
    </NavigationContainer>
      

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
