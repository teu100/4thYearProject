import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Tasks from "../app/screens/Tasks";
import NewTask from "../app/screens/NewTask";

const { Navigator, Screen } = createStackNavigator();

const HomeNavigator = () => (
  <Navigator headerMode="none">
    <Screen name="Home" component={Tasks} />
    <Screen name="Details" component={NewTask} />
  </Navigator>
);

export const TaskStack = () => (
  <NavigationContainer>
    <HomeNavigator />
  </NavigationContainer>
);