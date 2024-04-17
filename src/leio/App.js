//Importações gerais
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
//Importações das telas
import Login from "./Components/Login";
import Cadastro from "./Components/Cadastro";
import Perfil from "./Components/Perfil";
import Home from "./Components/Home";
import Biblioteca from "./Components/Biblioteca";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Cadastro" component={Cadastro} />
        <Stack.Screen name="Perfil" component={Perfil} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Biblioteca" component={Biblioteca} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
