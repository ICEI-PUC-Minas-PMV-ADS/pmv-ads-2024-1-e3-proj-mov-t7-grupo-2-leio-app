import React from 'react';
import { StyleSheet, View } from 'react-native';
import Login from './Components/Login/Login';
import Cadastro from './Components/Cadastro';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>

      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Cadastro" component={Cadastro} />
      </Stack.Navigator>

    </NavigationContainer>
  );
}