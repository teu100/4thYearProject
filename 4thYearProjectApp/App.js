import { StatusBar } from 'expo-status-bar';
import React , {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { auth } from './firebase';


import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from '@react-navigation/drawer';

import NavTabs from './app/screens/NavTabforApps'


import HomeNav from './app/screens/HomeNav'


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


import LRStack from './app/screens/LoginRRegistre/LRStack';
function LRStackStack({navigation}){
  return (
    <LRStack navigate={navigation}/>
  )
}


import Weather from './app/screens/Weather';
function weather(){
  return(
    <Weather />
  )
}



const Drawer = createDrawerNavigator();



//view is the same as div on 
export default function App() {
  const [LoggedInOrNot, setLoggedInOrNot] = useState(true);

React.useEffect(() => {
  const unsubscribe = auth.onAuthStateChanged((authUser) =>{
    if(authUser){
      console.log(authUser.toJSON())
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
          <Drawer.Screen name="Weather" component={weather} />
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
