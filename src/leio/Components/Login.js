//Importações gerais
import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "../assets/styles/base";
import styleLogin from "../assets/styles/login";
import { auth } from '../db/firebaseConfig';
import { signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const navigation = useNavigation(); // hook de navegação

  const redirectCadastro = () => {
    navigation.navigate("Cadastro"); // navegar para a tela desejada
  };

  const redirectHome = () => {
    navigation.navigate("Home"); // navegar para a tela desejada
  };

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const efetuarLogin = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, senha);
      console.log("Login efetuado com sucesso!", userCredential.user);
      redirectHome(); // Redirecione para a home após o login bem-sucedido
    } catch (error) {
      console.error("Erro ao efetuar login:", error);
    }
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
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
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

      <TouchableOpacity 
        style={[styles.button, { backgroundColor: "#8872DE" }]}
        onPress={efetuarLogin}
      >
        <Text style={styles.buttonText}>
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