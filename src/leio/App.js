//Importações gerais
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { UserProvider } from './Components/UserContext'; // Certifique-se de ajustar o caminho conforme necessário

//Importações das telas
import Login from "./Components/Login";
import Cadastro from "./Components/Cadastro";
import Perfil from "./Components/Perfil";
import Home from "./Components/Home";
import Pesquisa from "./Components/Pesquisa";
import ResultadoPesquisa from "./Components/ResultadoPesquisa";
import Info from "./Components/Info";
import Biblioteca from "./Components/Biblioteca";
import Modal from "./Components/Modal";

const Stack = createStackNavigator();

export default function App() {
  return (
    <UserProvider>

      <NavigationContainer>

        <Stack.Navigator>

          <Stack.Screen
            name="Login"
            component={Login}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Cadastro"
            component={Cadastro}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Perfil"
            component={Perfil}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              title: "",
              headerTintColor: "#8872DE",
              headerBackTitle: "Voltar",
              headerStyle: { backgroundColor: "#F4F3FF" },
            }}
          />
          {<Stack.Screen
            name="Pesquisa"
            component={Pesquisa}
            options={{
              title: "",
              headerTintColor: "#8872DE",
              headerBackTitle: "Voltar",
              headerStyle: { backgroundColor: "#F4F3FF" },
            }}
          />}
          <Stack.Screen
            name="ResultadoPesquisa"
            component={ResultadoPesquisa}
            options={{
              title: "",
              headerTintColor: "#8872DE",
              headerBackTitle: "Voltar",
              headerStyle: { backgroundColor: "#F4F3FF" },
            }}
          />
          <Stack.Screen
            name="Info"
            component={Info}
            options={{
              title: "",
              headerTintColor: "#8872DE",
              headerBackTitle: "Voltar",
              headerStyle: { backgroundColor: "#F4F3FF" },
            }}
          />
          <Stack.Screen
            name="Biblioteca"
            component={Biblioteca}
            options={{
              title: "",
              headerTintColor: "#8872DE",
              headerBackTitle: "Voltar",
              headerStyle: { backgroundColor: "#F4F3FF" },
            }}
          />
          <Stack.Screen
            name="Modal"
            component={Modal} />

        </Stack.Navigator>

      </NavigationContainer>

    </UserProvider>

  );
}
