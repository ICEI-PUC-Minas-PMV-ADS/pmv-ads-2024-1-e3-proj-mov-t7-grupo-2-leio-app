//Importações gerais
import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "../assets/styles/base";
import styleCadastro from "../assets/styles/cadastro";

const Cadastro = () => {
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
      <View style={styleCadastro.selectPhoto}>
        <Image source={require("../assets/img/upload_photo_camera.svg")} />
      </View>
      <TouchableOpacity onPress={handleSelecionarFoto}>
        <View>
          <Text>Selecione uma foto</Text>
        </View>
      </TouchableOpacity>

      <View style={styles.inputContainer}>
        <Image source={require("../assets/img/user.svg")} />
        <TextInput
          placeholder="Usuário"
          value={usuario}
          onChangeText={(text) => setUsuario(text)}
        />
      </View>

      <View style={styles.inputContainer}>
        <Image source={require("../assets/img/email.svg")} />
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

      <View style={styleCadastro.buttonContainer}>
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
          <Text onPress={redirectPerfil} style={styles.buttonText}>Cadastrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Cadastro;
