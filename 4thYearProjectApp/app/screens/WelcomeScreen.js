import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, View, Button } from 'react-native';

function WelcomeScreen(props) {
    return (
        <>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        onPress={() => console.log('Notifications')}
        title="Go to notifications"
      />
    </View>
        </>
    );
}

export default WelcomeScreen;

const styles = StyleSheet.create({
    background:{
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
    },
    loginButton:{
        width: "100%",
        height: 70,
        backgroundColor: "#fc5c65"
    },
    RegisterButton:{
        width: "100%",
        height: 70,
        backgroundColor: "#4ecdc4"
    },
    logo:{
        width: 100,
        height: 100,
        position: 'absolute',
        top: 50
    },
    LogoContainer:{
        position: "absolute",
        top: 70,
        alignItems: "center"
    }
})