import * as React from 'react';
import { Text, Image, StyleSheet, SafeAreaView, ScrollView } from 'react-native'
import { View, useWindowDimensions } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import ViewDone from './ViewDone';
import ViewInProgress from './ViewInProgress';
import ViewToDo from './ViewToDo';



const ThirdRoute = () => (
    <ViewDone />
  );

  
export default function TabViewExample({navigation}) {
  const FirstRoute = () => (
    <ViewToDo navigate={navigation}/>
  );
  const SecondRoute = () => (
    <ViewInProgress navigate={navigation}/>
  );

  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'To Do' },
    { key: 'second', title: 'In Progress' },
    { key: 'third', title: 'Done' },
  ]);

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
    third: ThirdRoute,
  });

  return (
      <>
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
    />
    </>
  );
}