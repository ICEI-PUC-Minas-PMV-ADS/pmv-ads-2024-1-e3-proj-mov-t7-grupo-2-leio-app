//Importações gerais
import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "../assets/styles/base";
import styleLogin from "../assets/styles/login";

const Login = () => {
  const navigation = useNavigation(); // hook de navegação

  const redirectCadastro = () => {
    navigation.navigate("Cadastro"); // navegar para a tela desejada
  };

  const redirectHome = () => {
    navigation.navigate("Home"); // navegar para a tela desejada
  };

  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");

  const efetuarLogin = () => {
    // Lógica de autenticação
  };

  return (
    <View style={styles.container}>
      <Image source={require("../assets/img/logo.svg")} />
      <Image
        source={require("../assets/img/ilustracao.svg")}
        style={styleLogin.illustration}
      />

      <View style={styles.inputContainer}>
        <Image source={require("../assets/img/user.svg")} />
        <TextInput
          placeholder="Usuário"
          value={usuario}
          onChangeText={(text) => setUsuario(text)}
        />
      </View>

      <View style={styles.inputContainer}>
        <Image source={require("../assets/img/password.svg")} />
        <TextInput
          placeholder="Senha"
          secureTextEntry={true}
          value={senha}
          onChangeText={(text) => setSenha(text)}
        />
      </View>

      <TouchableOpacity style={[styles.button, { backgroundColor: "#8872DE" }]}>
        <Text onPress={redirectHome} style={styles.buttonText}>
          Entrar
        </Text>
      </TouchableOpacity>

      <Text onPress={redirectCadastro}>
        Não possui uma conta? Cadastre-se aqui
      </Text>
    </View>
  );
};

export default Login;
