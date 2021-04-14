import * as React from 'react';
import { TextInput, Button } from 'react-native-paper';
import { Text, View } from 'react-native';
import { auth } from '../../../firebase';
import { Alert } from 'react-native';
import { Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { set } from 'react-native-reanimated';

const RegisterScreen = (props) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] =  React.useState("");

  React.useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) =>{
      if(authUser){
        props.navigate.navigate("Home")
      }
    });
    return unsubscribe;
  }, [])

  function loginPress(){

  }

  const logIN = () =>{
    auth.signInWithEmailAndPassword(email, password).catch(error => Alert.alert(error));
  };
  const logOut = () => {
    auth.signOut().then(() =>{

    })
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
        

<Input placeholder='INPUT WITH CUSTOM ICON'
onChangeText={email => setEmail(email)}
                leftIcon={
                  <Icon
                    name='envelope'
                    size={24}
                    color='black'
                  />
                }/>
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
        }/>

        

        

    <Button mode="contained" onPress={logIN}>Login</Button>
    <Button mode="contained" onPress={logOut}>Log out</Button>
    </>
  );
};

export default RegisterScreen;