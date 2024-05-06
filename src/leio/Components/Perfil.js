import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Menu from "./Menu";
import styles from "../assets/styles/base";
import stylePerfil from "../assets/styles/perfil";

const Perfil = () => {
  const [foto, setFoto] = useState(null);
  const [usuario, setUsuario] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const navigation = useNavigation(); // hook de navegação

  const redirectLogin = () => {
    navigation.navigate("Login"); // navegar para a tela desejada
  };

  const redirectPerfil = () => {
    navigation.navigate("Perfil"); // navegar para a tela desejada
  };

  const handleSelecionarFoto = () => {
    // Lógica para selecionar uma foto
  };

  const handleCadastrar = async () => {
    //Lógica para o cadastro do usuário
    try {
      await addDoc(collection(db, "users"), {
        usuario: usuario,
        email: email,
        senha: senha,
      });
      console.log("Usuário adicionado com sucesso!");
    } catch (error) {
      console.error("Erro ao adicionar usuário:", error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={stylePerfil.selectPhoto}>
        <Image source={require("../assets/img/Maria-perfil.png")} />
      </View>
      <TouchableOpacity onPress={handleSelecionarFoto}>
        <View>
          <Text>Substituir foto</Text>
        </View>
      </TouchableOpacity>

      <View style={styles.inputContainer}>
        <Image source={require("../assets/img/user.svg")} />
        <TextInput
          style={styles.input}
          placeholder="Maria Fernanda"
          value={usuario}
          onChangeText={(text) => setUsuario(text)}
        />
      </View>

      <View style={styles.inputContainer}>
        <Image source={require("../assets/img/email.svg")} />
        <TextInput
          style={styles.input}
          placeholder="mariaf@gmail.com"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
      </View>

      <View style={styles.inputContainer}>
        <Image source={require("../assets/img/password.svg")} />
        <TextInput
          style={styles.input}
          placeholder="******"
          secureTextEntry={true}
          value={senha}
          onChangeText={(text) => setSenha(text)}
        />
      </View>

      <View style={stylePerfil.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: "#F7C31F" }]}
        >
          <Text onPress={redirectLogin} style={styles.buttonText}>
            Cancelar
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, { backgroundColor: "#8872DE" }]}
          onPress={handleCadastrar}
        >
          <Text onPress={redirectLogin} style={styles.buttonText}>
            Salvar alterações
          </Text>
        </TouchableOpacity>
      </View>

      <View>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: "#FC6681" }]}
          onPress={handleCadastrar}
        >
          <Text onPress={redirectLogin} style={styles.buttonText}>
            Excluir conta
          </Text>
        </TouchableOpacity>
      </View>
      <Menu navigation={navigation} />
    </View>
  );
};

export default Perfil;
