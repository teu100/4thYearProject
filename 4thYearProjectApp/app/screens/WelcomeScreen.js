import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, View, Button } from 'react-native';
import PieChartExample from  './Charts/PieChartExample'


function WelcomeScreen(props) {
    console.log(props)
    return (
        <>
            <View >
            <Button
                onPress={() => console.log('Notifications')}
                title="Go to notifications"
            />
            <PieChartExample navigation={props}/>
    </View>
        </>
    );
}

export default WelcomeScreen;

const styles = StyleSheet.create({

})