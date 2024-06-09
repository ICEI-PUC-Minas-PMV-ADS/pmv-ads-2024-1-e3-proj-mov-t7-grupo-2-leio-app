import React, { useState, useEffect, useContext } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  Image,
} from "react-native";
import * as Google from "expo-auth-session/providers/google";
import * as WebBrowser from "expo-web-browser";
import { auth } from "../db/firebaseConfig";
import {
  GoogleAuthProvider,
  signInWithCredential,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useNavigation } from "@react-navigation/native";
import styles from "../assets/styles/base";
import styleLogin from "../assets/styles/login";
import { UserContext } from "./UserContext"; // Importa o contexto do usuário

WebBrowser.maybeCompleteAuthSession();

const Login = () => {
  const { setUser } = useContext(UserContext); // Usa o contexto do usuário
  const [request, response, promptAsync] = Google.useIdTokenAuthRequest({
    clientId:
      "1077605673545-ah88fdr7q6pf25hvocfk03sanrnpmdvf.apps.googleusercontent.com",
    redirectUri: "http://localhost:8081", // URI de redirecionamento para o localhost q o expo cria, se der erro, altere para a porta que o expo está rodando aí no seu
  });

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigation = useNavigation(); // hook de navegação

  useEffect(() => {
    if (response?.type === "success") {
      const { id_token } = response.params;
      const credential = GoogleAuthProvider.credential(id_token);
      signInWithCredential(auth, credential)
        .then((userCredential) => {
          //  console.log("Login com Google efetuado com sucesso!", userCredential.user);
          setUser(userCredential.user); // Define o usuário no contexto
          setSuccess("Login com Google efetuado com sucesso!");
          setTimeout(() => {
            redirectHome(); // Passa o usuário para a função de redirecionamento
          }, 1000);
        })
        .catch((error) => {
          console.error("Erro ao efetuar login com Google:", error);
          setError("Ocorreu um erro ao efetuar login com Google.");
        });
    }
  }, [response]);

  const redirectCadastro = () => {
    navigation.navigate("Cadastro"); // navegar para a tela desejada
  };

  const redirectHome = () => {
    navigation.navigate("Home"); // Redireciona para a home
  };

  const efetuarLogin = async () => {
    setIsLoading(true);
    setError(""); // Resetar erro antes de tentar logar
    setSuccess(""); // Resetar mensagem de sucesso antes de tentar logar

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        senha
      );
      // console.log("Login efetuado com sucesso!", userCredential.user);
      setUser(userCredential.user); // Define o usuário no contexto
      setSuccess("Login efetuado com sucesso!");

      setTimeout(() => {
        redirectHome(); // Passa o usuário para a função de redirecionamento
      }, 2000);
    } catch (error) {
      let errorMessage =
        "Ocorreu um erro ao efetuar login. Por favor, tente novamente.";

      if (error.code === "auth/user-not-found") {
        errorMessage = "Usuário não encontrado.";
      } else if (error.code === "auth/invalid-credential") {
        errorMessage = "Email ou senha incorretos.";
      } else if (error.code === "auth/wrong-password") {
        errorMessage = "Senha incorreta.";
      } else if (error.code === "auth/invalid-email") {
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

      {error ? <Text style={styles.errorText}>{error}</Text> : null}
      {success ? <Text style={styles.successText}>{success}</Text> : null}

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

      <TouchableOpacity
        style={styleLogin.loginGoogle}
        disabled={!request}
        onPress={() => promptAsync()}
      >
        <Image
          source={require("../assets/img/google.svg")} // Substitua pelo caminho correto do seu ícone do Google
          style={styleLogin.googleIcon}
        />
        <Text style={styles.buttonText}>Entrar com Google</Text>
      </TouchableOpacity>

      <Text onPress={redirectCadastro}>
        Não possui uma conta? Cadastre-se aqui
      </Text>
    </View>
  );
};

export default Login;
