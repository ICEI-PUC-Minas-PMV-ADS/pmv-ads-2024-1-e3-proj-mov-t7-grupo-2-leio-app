import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, db, storage } from "../db/firebaseConfig";
import * as ImagePicker from "expo-image-picker";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
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

  const redirectHome = () => {
    navigation.navigate("Home"); // navegar para a tela desejada
  };

  const redirectPerfil = () => {
    navigation.navigate("Perfil"); // navegar para a tela desejada
  };

  const selecionarFoto = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      alert("Precisamos da permissão para acessar a galeria de fotos!");
      return;
    }

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1], // Mantendo a proporção 1:1
      quality: 1,
    });

    if (!result.canceled) {
      setFoto(result.assets[0].uri); // Armazenando o URI da imagem
    }
  };

  const uploadImageAsync = async (uri) => {
    const response = await fetch(uri);
    const blob = await response.blob();
    const storageRef = ref(storage, `profilePictures/${Date.now()}`);
    await uploadBytes(storageRef, blob);

    // Obtenha o URL de download
    const downloadURL = await getDownloadURL(storageRef);
    return downloadURL;
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
    <View style={[styles.container, { justifyContent: "center" }]}>
      <View style={stylePerfil.selectPhoto}>
        <Image source={
          foto
          ? { uri: foto }
          : require("../assets/img/Maria-perfil.png")} />
      </View>
      <TouchableOpacity onPress={selecionarFoto}>
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
          <Text onPress={redirectHome} style={styles.buttonText}>
            Cancelar
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, { backgroundColor: "#8872DE" }]}
          onPress={handleCadastrar}
        >
          <Text onPress={redirectHome} style={styles.buttonText}>
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
