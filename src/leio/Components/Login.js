import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image, Alert, ActivityIndicator } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "../assets/styles/base";
import styleLogin from "../assets/styles/login";
import { auth } from "../db/firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const navigation = useNavigation(); // hook de navegação

  const redirectCadastro = () => {
    navigation.navigate("Cadastro"); // navegar para a tela desejada
  };

  const redirectHome = () => {
    navigation.navigate("Home"); // navegar para a tela desejada
  };


  const efetuarLogin = async () => {
    setIsLoading(true);
    setError(""); // Resetar erro antes de tentar logar
    setSuccess(""); // Resetar mensagem de sucesso antes de tentar logar


    /////////////////////////// Login do usuário ///////////////////////////
    try {
      
      const userCredential = await signInWithEmailAndPassword(auth, email, senha);
      console.log("Login efetuado com sucesso!", userCredential.user);
      setSuccess("Login efetuado com sucesso!");

      setTimeout(() => {
        redirectHome(); // Redireciona para a home após alguns segundos para dar tempo do usuário ler a mensagem
      }, 10);

    }

    /////////////////////////// Exceptions ///////////////////////////
    catch (error) {
      let errorMessage = "Ocorreu um erro ao efetuar login. Por favor, tente novamente.";

      if (error.code === 'auth/user-not-found') {
        errorMessage = "Usuário não encontrado.";
      }

      else if (error.code === 'auth/invalid-credential') {
        errorMessage = "Email ou senha incorretos.";
      }

      else if (error.code === 'auth/wrong-password') {
        errorMessage = "Senha incorreta.";
      }

      else if (error.code === 'auth/invalid-email') {
        errorMessage = "O email não é válido.";
      }

      console.error("Erro ao efetuar login:", error);
      setError(errorMessage);

    } finally {
      setIsLoading(false);
    }
  };

  return (
    <View style={[styles.container, { justifyContent: "center" }]}>
      <Image source={require("../assets/img/logo.svg")} />
      <Image
        source={require("../assets/img/ilustracao.svg")}
        style={styleLogin.illustration}
      />

      <View style={styles.inputContainer}>
        <Image source={require("../assets/img/user.svg")} />
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
      </View>

      <View style={styles.inputContainer}>
        <Image source={require("../assets/img/password.svg")} />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          secureTextEntry={true}
          value={senha}
          onChangeText={(text) => setSenha(text)}
        />
      </View>

      {error ? <Text style={styleLogin.errorText}>{error}</Text> : null}
      {success ? <Text style={styleLogin.successText}>{success}</Text> : null}

      <TouchableOpacity
        style={[styles.button, { backgroundColor: "#8872DE" }]}
        onPress={efetuarLogin}
        disabled={isLoading}
      >
        {isLoading ? (
          <ActivityIndicator color="#FFF" />
        ) : (
          <Text style={styles.buttonText}>Entrar</Text>
        )}
      </TouchableOpacity>

      <Text onPress={redirectCadastro}>
        Não possui uma conta? Cadastre-se aqui
      </Text>
    </View>
  );
};

export default Login;
