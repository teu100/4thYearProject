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

//view is the same as div on 
export default function App() {
  console.log("App Executed")

  return (
    <>
    <Header />
      <Tasks />
    </>
      

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
