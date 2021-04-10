import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


export default function Header() {
    return (
      <View style={styles.header}>
        <Text style={styles.title}>My Tasks</Text>

      </View>
    );
  }

const styles = StyleSheet.create({
    header: {
      height: 80,
      paddingTop: 38,
      backgroundColor: '#3377ff',
    },
    title: {
      textAlign: 'center',
      color: '#fff',
      fontSize: 20,
      fontWeight: 'bold',
    }
  });