import * as React from 'react';
import { Button } from 'react-native-paper';
import { Text, View,StyleSheet } from 'react-native';
import { auth } from '../../../firebase';
import { Alert } from 'react-native';
import { Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { set } from 'react-native-reanimated';

const LoginScreen = (props) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  React.useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) =>{
      console.log(authUser)
      if(authUser){
        props.navigation.navigate("HomeScreen", {screen: 'HomeScreen', 
        });
      }
    });
    return unsubscribe;
  }, [])

  const logIN = () =>{
    auth.signInWithEmailAndPassword(email, password).catch(error => alert(error));
  };
  const logOut = () => {
    auth.signOut().then(() =>{

    })
  }

  const register = () => {
    //console.log(props.navigation.navigate);
    props.navigation.navigate("Register");
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
      <Button mode="contained" onPress={logIN}>Login</Button>
      <View style={styles.register}>
      <Text>Not Register?</Text>
      <Button mode='text' onPress={register}>Register Now</Button>
      </View>
      
      <Button mode="contained" onPress={logOut}>Log out</Button>
      </View>

        

        

    
    </>
  );
};

export default LoginScreen;


const styles = StyleSheet.create({
  email:{
    marginTop: 200,
    marginLeft: 10,
    marginRight: 10,

  },
  register:{
    alignItems: 'center',
    marginTop: 15,
  }
  
})