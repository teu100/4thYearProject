import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './HomeScreen'

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";


//view is the same as div on 
export default function HomeNav() {
  const AuthStack = createStackNavigator();
  return (
      <AuthStack.Navigator>
        <AuthStack.Screen name="Home" component={HomeScreen} options={{ title: 'Home' }}/>
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
