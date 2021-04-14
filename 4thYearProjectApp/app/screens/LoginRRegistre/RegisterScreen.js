import * as React from 'react';
import { TextInput } from 'react-native-paper';
import { Text, View } from 'react-native';
import { auth } from "../../../firebase";
import { Alert } from 'react-native';


const RegisterScreen = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] =  React.useState("");

  const register = () => {
    auth.createUserWithEmailAndPassword(email, password)
    .then(authUser =>{
      
    }).catch(error => Alert.alert(error.message))
  }
  return (
    <>
    <Text>a</Text>
    <Text>a</Text>
    <Text>a</Text>
    <Text>a</Text>
    <Text>a</Text>
    <Text>a</Text>
    <Text>a</Text>
    <Text>a</Text>
        <TextInput
        label="Email"
        value={email}
        onChangeText={email => setText(email)}
        />

        <TextInput
            label="Password"
            value={email}
            onChangeText={email => setText(email)}
        />


        <TextInput
            label="Confirm password"
            value={email}
            onChangeText={email => setText(email)}
        />
    </>
  );
};

export default RegisterScreen;