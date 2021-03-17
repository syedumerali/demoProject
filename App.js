import * as React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';


import MyStack from './src/navigation/MyStack';
import MyLogin from './src/navigation/MyLogin';


import {AuthContext} from './src/navigation/AuthProvider';
import auth from '@react-native-firebase/auth';
import { useState, useEffect, useContext } from 'react';

function App() {
  const {user, setUser} = useContext(AuthContext);
  const {initializing, setInitializing} = useState(true);

  const onAuthStateChanged = (user) => {
    setUser(user);
    if(initializing) setInitializing(false);
  }
  useEffect(()=> {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, [])

  if(initializing) return null;


  return (
    <NavigationContainer>
    {
      user ? <MyStack/> :  <MyLogin/>
    }
   
    </NavigationContainer>
 
  );
}
export default App;
