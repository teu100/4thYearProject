import * as React from 'react';
import { Button, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import ViewToDo from './ViewToDo';
import ViewInProgress from './ViewInProgress';
import ViewDone from './ViewDone';
import Icon from 'react-native-vector-icons/Entypo';


function TodoScreen({navigation}){
    return (
        <ViewToDo navigate={navigation} />
    );
}

function InProScreen({navigation}){
    return (
        <ViewInProgress navigate={navigation} />
    );
}

function DoneScreen({navigation}){
    return (
        <ViewDone navigate={navigation} />
    );
}

const Tab = createBottomTabNavigator();

function NavTabs(){
    return(
        <Tab.Navigator 
        initialRouteName="TodoScreen"
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
  
              if (route.name === 'Todo') {
                iconName = focused ? 'progress-one' : 'progress-one';
              } 
              else if (route.name === 'InProg') {
                iconName = focused ? 'progress-two' : 'progress-two';
              }
              else if (route.name === 'Done') {
                iconName = focused ? 'progress-full' : 'progress-full';
              }
  
              // You can return any component that you like here!
              return <Icon name={iconName} size={size} color={color} />;
            },
          })}
        tabBarOptions={{
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
          }}
        >

            <Tab.Screen
            name="Todo"
            component={TodoScreen}
            options={{
            tabBarLabel: 'To do',
            }}
            />

            <Tab.Screen
            name="InProg"
            component={InProScreen}
            options={{
            tabBarLabel: 'In Progress',
            }}
            />

            <Tab.Screen
            name="Done"
            component={DoneScreen}
            options={{
            tabBarLabel: 'Done',
            }}
            />

        </Tab.Navigator>
    )
}

export default NavTabs;
