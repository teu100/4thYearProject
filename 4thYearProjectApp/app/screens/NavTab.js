import * as React from 'react';
import { Button, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import ViewToDo from './ViewToDo';
import ViewInProgress from './ViewInProgress';
import ViewDone from './ViewDone';


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

function TryNavTabs(){
    return(
        <Tab.Navigator 
        initialRouteName="TodoScreen"
        tabBarOptions={{
            activeTintColor: '#e91e63'
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

export default TryNavTabs;
