import React, { useState } from "react";
import { View, Text, TextInput, Pressable, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "../assets/styles/base";
import styleCadastro from "../assets/styles/cadastro";
import { auth, db } from "../db/firebaseConfig";
import * as ImagePicker from "expo-image-picker";
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

  const redirectHome = () => {
    navigation.navigate("Home"); // navegar para a tela desejada
  };

  const handleSelecionarFoto = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      alert("Precisamos da permissão para acessar a galeria de fotos!");
      return;
    }

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setFoto(result.uri); // Armazenando o URI da imagem
    }
  };

  const handleCadastrar = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        senha
      );
      console.log("Usuário criado com sucesso!", userCredential.user);

      let photoURL = "";
      if (foto) {
        photoURL = await uploadImageAsync(foto);
      }

      await updateProfile(userCredential.user, {
        displayName: usuario,
        photoURL: photoURL,
      });

      await setDoc(doc(db, "Usuario", userCredential.user.uid), {
        usuario: usuario,
        email: email,
        foto: photoURL,
      });

      console.log("Detalhes do usuário adicionados ao Firestore!");
      redirectHome(); // Redirecione para o perfil após o cadastro bem-sucedido
    } catch (error) {
      console.error("Erro ao cadastrar usuário:", error);
    }
  };

  return (
    <View style={[styles.container, { justifyContent: "center" }]}>
      <View style={styleCadastro.selectPhoto}>
        <Image
          source={
            foto
              ? { uri: foto }
              : require("../assets/img/upload_photo_camera.svg")
          }
          style={styleCadastro.photo}
        />
      </View>
      <Pressable onPress={handleSelecionarFoto}>
        <View>
          <Text>Selecione uma foto</Text>
        </View>
      </Pressable>

      <View style={styles.inputContainer}>
        <Image source={require("../assets/img/user.svg")} />
        <TextInput
          style={styles.input}
          placeholder="Usuário"
          value={usuario}
          onChangeText={(text) => setUsuario(text)}
        />
      </View>

      <View style={styles.inputContainer}>
        <Image source={require("../assets/img/email.svg")} />
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

      <View style={styleCadastro.buttonContainer}>
        <Pressable style={[styles.button, { backgroundColor: "#F7C31F" }]}>
          <Text onPress={redirectLogin} style={styles.buttonText}>
            Cancelar
          </Text>
        </Pressable>

        <Pressable
          style={[styles.button, { backgroundColor: "#8872DE" }]}
          onPress={handleCadastrar}
        >
          <Text style={styles.buttonText}>Cadastrar</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Cadastro;
