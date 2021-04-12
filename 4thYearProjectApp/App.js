import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImage from './app/screens/ViewImage';
import ViewToDo from './app/screens/ViewToDo';
import ViewDone from './app/screens/ViewDone';
import ViewInProgress from './app/screens/ViewInProgress';
import Tasks from './app/screens/Tasks'
import Header from './app/screens/Components/header'
import NewTask from './app/screens/NewTask';
import {TaskStack} from './routes/TaskStack';
import EditTask from './app/screens/EditTask';

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from '@react-navigation/drawer';

import TryNavTab from './app/screens/NavTabforApps'

function WelcomeScreen1({navigation}){
  return (
    <WelcomeScreen navigate={navigation}/>
  )
}

function Tasks1({navigation}){
  return (
    <TryNavTab navigate={navigation} />
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
        <Drawer.Screen name="Tasks" component={Tasks1} />
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
