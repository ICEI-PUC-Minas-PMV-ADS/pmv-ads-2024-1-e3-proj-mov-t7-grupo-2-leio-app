import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
  Image,
  ActivityIndicator,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, db, storage } from "../db/firebaseConfig";
import * as ImagePicker from "expo-image-picker";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import styleCadastro from "../assets/styles/cadastro";
import styles from "../assets/styles/base";

const Cadastro = () => {
  const [foto, setFoto] = useState(null);
  const [usuario, setUsuario] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const navigation = useNavigation(); // hook de navegação

  const redirectLogin = () => {
    navigation.navigate("Login"); // navegar para a tela desejada
  };

  const redirectHome = () => {
    navigation.navigate("Home"); // navegar para a tela desejada
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

  const efetuarCadastro = async () => {
    setIsLoading(true);
    setError("");
    setSuccess("");

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
      setSuccess("Usuário criado com sucesso!");

      setTimeout(() => {
        redirectLogin(); // Redireciona para a login após alguns segundos para dar tempo do usuário ler a mensagem
      }, 2000);
    } 
    
    catch (error) {
      let errorMessage =
        "Ocorreu um erro ao cadastrar. Por favor, tente novamente.";

      if (error.code === "auth/email-already-in-use") {
        errorMessage = "O email já está em uso.";
      }

      else if (error.code === "auth/invalid-email") {
        errorMessage = "O email não é válido.";
      }

      else if (error.code === "auth/weak-password") {
        errorMessage = "A senha é muito fraca.";
      }

      console.error("Erro ao cadastrar usuário:", error);
      setError(errorMessage);
      
    } finally {
      setIsLoading(false);
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
          aria-label="Foto do usuário"
        />
      </View>

      <Pressable onPress={selecionarFoto}>
        <View>
          <Text>Selecione uma foto</Text>
        </View>
      </Pressable>

      <View style={styles.inputContainer}>
        <Image
          source={require("../assets/img/user.svg")}
          aria-label="Ícone de usuário"
        />
        <TextInput
          style={styles.input}
          placeholder="Usuário"
          value={usuario}
          onChangeText={(text) => setUsuario(text)}
        />
      </View>

      <View style={styles.inputContainer}>
        <Image
          source={require("../assets/img/email.svg")}
          aria-label="Ícone de email"
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
      </View>

      <View style={styles.inputContainer}>
        <Image
          source={require("../assets/img/password.svg")}
          aria-label="Ícone de senha"
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          secureTextEntry={true}
          value={senha}
          onChangeText={(text) => setSenha(text)}
        />
      </View>

      {error ? <Text style={styleCadastro.errorText}>{error}</Text> : null}
      {success ? (
        <Text style={styleCadastro.successText}>{success}</Text>
      ) : null}

      <View style={styleCadastro.buttonContainer}>
        <Pressable
          style={[styles.button, { backgroundColor: "#F7C31F" }]}
          onPress={redirectLogin}
        >
          <Text style={styles.buttonText}>Cancelar</Text>
        </Pressable>

        <Pressable
          style={[styles.button, { backgroundColor: "#8872DE" }]}
          onPress={efetuarCadastro}
          disabled={!usuario || !email || !senha || isLoading}
        >
          {isLoading ? (
            <ActivityIndicator color="#FFF" />
          ) : (
            <Text style={styles.buttonText}>Cadastrar</Text>
          )}
        </Pressable>
      </View>
    </View>
  );
};

export default Cadastro;
