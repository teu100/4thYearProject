import React from 'react';
import { View, Text, Image, StyleSheet, SafeAreaView, ScrollView, Alert } from 'react-native'
import PieChartExample from  './Charts/PieChartExample'
import { Text as TextRNE } from 'react-native-elements';


function WelcomeScreen(props) {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView}>
                <View>
                    <TextRNE h3>Company's progress</TextRNE>
                    <Text>Chart Colours : </Text>
                    <Text>To do Tasks : <Text>Blue</Text></Text>
                    <Text>In progress Tasks : <Text>Blue</Text></Text>
                    <Text>Done Tasks : <Text>Blue</Text></Text>
                    <PieChartExample navigation={props}/>
                </View>
                
            </ScrollView>
        </SafeAreaView>
    );
}

export default WelcomeScreen;

const styles = StyleSheet.create({

})