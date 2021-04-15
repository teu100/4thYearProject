import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from './Login';
import RegisterScreen from './RegisterScreen';

//view is the same as div on 
export default function LRStack() {
  const AuthStack = createStackNavigator();
  return (
      <AuthStack.Navigator>
        <AuthStack.Screen name="Login" component={Login} options={{ title: 'Log in' }}/>
        <AuthStack.Screen name="Register" component={RegisterScreen} options={{ title: 'Register' }}/>

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

