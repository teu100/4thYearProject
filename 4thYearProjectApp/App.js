import { StatusBar } from 'expo-status-bar';
import React , {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { auth } from './firebase';


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

import LRStack from './app/screens/LoginRRegistre/LRStack';
function LRStackStack({navigation}){
  return (
    <LRStack navigate={navigation}/>
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
  const [LoggedInOrNot, setLoggedInOrNot] = useState(true);

React.useEffect(() => {
  const unsubscribe = auth.onAuthStateChanged((authUser) =>{
    if(authUser){
      setLoggedInOrNot(true);
      return ;
    }
    else{
      setLoggedInOrNot(false);
      return ;
    }
  });
  return () => {unsubscribe};
}, [LoggedInOrNot])


  console.log("App Executed")

  if(LoggedInOrNot === true){
    console.log("if Logged in : ", LoggedInOrNot);
    return(
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="HomeScreen">
        
          <Drawer.Screen name="HomeScreen" component={WelcomeScreen1} />
          <Drawer.Screen name="Tasks" component={Tasks1} />
          <Drawer.Screen name="Login" component={LRStackStack} />
      </Drawer.Navigator>
    </NavigationContainer>
    );
  }
  else{
    console.log("else Logged in : ", LoggedInOrNot);
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Login">
        <Drawer.Screen name="Login" component={LRStackStack} />
        
      </Drawer.Navigator>
    </NavigationContainer>
      

  );}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
