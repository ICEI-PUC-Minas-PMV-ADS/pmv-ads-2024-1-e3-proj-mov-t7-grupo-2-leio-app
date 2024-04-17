//Importações gerais
import React from "react";
import Login from "./Components/Login";
import Cadastro from "./Components/Cadastro";
import Home from "./Components/Home";
import Biblioteca from "./Components/Biblioteca";
import Perfil from "./Components/Perfil";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";


//Importações firebase
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import { getFirestore, collection, addDoc } from "firebase/firestore/lite";
import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebaseConfig";

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Cadastro" component={Cadastro} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Biblioteca" component={Biblioteca} />
        <Stack.Screen name="Perfil" component={Perfil} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
