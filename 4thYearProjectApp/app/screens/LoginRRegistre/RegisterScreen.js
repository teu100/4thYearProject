import * as React from 'react';
import { Button } from 'react-native-paper';
import { Text, View,StyleSheet } from 'react-native';
import { auth } from '../../../firebase';
import { Alert } from 'react-native';
import { Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';


const RegisterScreen = (props) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] =  React.useState("");

  const register = () => {
    auth.createUserWithEmailAndPassword(email, password)
    .then(authUser =>{
      props.navigation.navigate("HomeScreen", {screen: 'HomeScreen', 
      });
    }).catch(error => Alert.alert(error.message))
  }

  const login = () =>{
    //console.log(props.navigation.navigate);
    props.navigation.navigate("Login");
  }

  const checkPassword = () =>{
    if(password === confirmPassword){
      register();
    }
    else{
      alert("Passwords dont match");
    }
  }
  return (
    <>
    <View style={styles.email}>
      <Input 
      placeholder='Email'
        onChangeText={email => setEmail(email)}
          leftIcon={
            <Icon
            name='envelope'
            size={24}
            color='black'
            />
          }
      />
      <Input 
        placeholder="Password" 
        secureTextEntry={true}
        onChangeText={password => setPassword(password)}
        leftIcon={
          <Icon
            name='lock'
            size={24}
            color='black'
          />
        }
      />

      <Input 
        placeholder="Confirm Password" 
        secureTextEntry={true}
        onChangeText={confirmPassword => setConfirmPassword(confirmPassword)}
        leftIcon={
          <Icon
            name='lock'
            size={24}
            color='black'
          />
        }
      />
      <Button mode="contained" onPress={checkPassword}>Register</Button>
      <View style={styles.register}>
      <Text>Have an Account?</Text>
      <Button mode='text' onPress={login}>Login</Button>
      </View>
      
      
      </View>
    </>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  email:{
    marginTop: 150,
    marginLeft: 10,
    marginRight: 10,

  },
  register:{
    alignItems: 'center',
  }
  
})