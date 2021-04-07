import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';

function WelcomeScreen(props) {
    return (
        <ImageBackground 
        style={styles.background}
        source={require("../assets/BackgroundImage.jpg")}>
            <View style={styles.LogoContainer}>
                <Image style={styles.logo} source={require("../assets/CompanyIcon.png")}/>
                <Text>Managing your Tasks, made simple</Text>
            </View>
            <View style={styles.loginButton}>Login</View>
            <View style={styles.RegisterButton}>Register</View>
        </ImageBackground>
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