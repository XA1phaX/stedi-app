import React, { useEffect, useState, } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, AsyncStorage, TextInput, Button } from 'react-native';
import  Navigation from './components/Navigation';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OnboardingScreen from './screens/OnboardingScreen';
import Home from './screens/Home';
import { NavigationContainer } from '@react-navigation/native';
import { TextInput } from 'react-native-paper';




const AppStack = createNativeStackNavigator();

const App = () =>{
  const [isFirstLaunch, setFirstLaunch] = React.useState(true);
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [homeTodayScore, setHomeTodayScore] = React.useState(0);

   if (isFirstLaunch == true){
return(
  <OnboardingScreen setFirstLaunch={setFirstLaunch}/>
 
);
  }else if(isLoggedIn == true){
    return <Navigation/>
  }else{
    return(
      <View>
        <TextInput style={styles.input}
        placeholderTextColor='#4251f5'
        placeholder='Phone Number'>
        </TextInput>
        <Button 
        title='Send'
          style={styles.button}
          onPress={()=>{
            console.log('Button was pressed!')
          }}>
        </Button>
      </View>
    )
}
}

 export default App;

 const styles = StyleSheet.create({
   container: {
     flex: 1,
     alignItems: "center",
     justifyContent: "center",
   },
   input: {
     height: 40,
     margin: 12,
     borderWidth: 1,
     padding: 10,
   },
   margin: {
     marginTop: 100,
   },
   button: {
     alignItems: "center",
     backgroundColor: "#DDDDDD",
     padding: 10,
   },
 });
