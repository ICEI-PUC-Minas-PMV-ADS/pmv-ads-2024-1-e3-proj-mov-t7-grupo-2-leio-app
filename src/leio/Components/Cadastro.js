//Importações gerais
import React, { useState } from "react";
import { View, Text, TextInput, Pressable, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "../assets/styles/base";
import styleCadastro from "../assets/styles/cadastro";
import { auth, db } from '../db/firebaseConfig';

import { launchImageLibrary } from "react-native-image-picker";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

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
    const options = {
      storageOptions: {
        skipBackup: true,
        path: "images",
      },
    };

    launchImageLibrary(options, (response) => {
      if (response.didCancel) {
        console.log("Usuário cancelou a seleção de imagem");
      } else if (response.error) {
        console.log("ImagePicker Error: ", response.error);
      } else {
        const source = { uri: response.uri };
        setFoto(source.uri); // Supondo que você está armazenando o URI da imagem
      }
    });
  };

  const handleCadastrar = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, senha);
      console.log("Usuário criado com sucesso!", userCredential.user);

      await setDoc(doc(db, "Usuario", userCredential.user.uid), {
        usuario: usuario,
        email: email,
        foto: foto,
      });

      console.log("Detalhes do usuário adicionados ao Firestore!");
      redirectLogin(); // Redirecione para o perfil após o cadastro bem-sucedido
    } catch (error) {
      console.error("Erro ao cadastrar usuário:", error);
    }
  };


  return (
    <View style={styles.container}>
      <View style={styleCadastro.selectPhoto}>
        <Image source={require("../assets/img/upload_photo_camera.svg")} />
      </View>
      <Pressable onPress={handleSelecionarFoto}>
        <View>
          <Text>Selecione uma foto</Text>
        </View>
      </Pressable >

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
        <Pressable
          style={[styles.button, { backgroundColor: "#F7C31F" }]}
        >
          <Text onPress={redirectLogin} style={styles.buttonText}>
            Cancelar
          </Text>
        </Pressable >

        <Pressable
          style={[styles.button, { backgroundColor: "#8872DE" }]}
          onPress={handleCadastrar}
        >
          <Text style={styles.buttonText}>
            Cadastrar
          </Text>
        </Pressable >
      </View>
    </View>
  );
};

export default Cadastro;
