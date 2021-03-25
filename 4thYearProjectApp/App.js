import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImage from './app/screens/ViewImage';
import ViewToDo from './app/screens/ViewToDo';
import ViewDone from './app/screens/ViewDone';
import ViewInProgress from './app/screens/ViewInProgress';


//view is the same as div on 
export default function App() {
  console.log("App Executed")

  return (
    <ViewDone/>
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
