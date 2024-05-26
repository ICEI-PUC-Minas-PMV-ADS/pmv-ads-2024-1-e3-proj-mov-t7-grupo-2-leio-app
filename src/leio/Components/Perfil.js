import React, { useState, useEffect, useContext } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { updateProfile, deleteUser, updateEmail, updatePassword, reauthenticateWithCredential, EmailAuthProvider, sendEmailVerification } from "firebase/auth";
import { doc, updateDoc, deleteDoc } from "firebase/firestore";
import { auth, db, storage } from "../db/firebaseConfig";
import * as ImagePicker from "expo-image-picker";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import Menu from "./Menu";
import styles from "../assets/styles/base";
import stylePerfil from "../assets/styles/perfil";
import { UserContext } from "./UserContext"; // Importa o contexto do user

const Perfil = () => {
  const { user, setUser } = useContext(UserContext);
  const [foto, setFoto] = useState(null);
  const [usuario, setUsuario] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [senhaAtual, setSenhaAtual] = useState(""); // Campo para a senha atual

  const navigation = useNavigation(); // hook de navegação

  const fotoPadrao = require("../assets/img/user.svg");
  
  useEffect(() => {
    if (user) {
      setUsuario(user.displayName || "");
      setEmail(user.email || "");
      setFoto(user.photoURL || fotoPadrao); // Atualiza o estado da foto com a URL da foto do usuário
      setSenha(""); // Exibe a senha como asteriscos
      console.log("Foto do usuário:", user.photoURL); // Verifica a URL da foto
    }
  }, [user]);

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

  const reauthenticate = async (currentPassword) => {
    const credential = EmailAuthProvider.credential(user.email, currentPassword);
    try {
      await reauthenticateWithCredential(auth.currentUser, credential);
      console.log("Reautenticação bem-sucedida");
    } catch (error) {
      console.error("Erro na reautenticação:", error);
      throw error;
    }
  };

  const handleUpdate = async () => {
    try {
      // Reautenticar o usuário antes de atualizar a senha ou o email
      if (senhaAtual) {
        await reauthenticate(senhaAtual);
      }

      let photoURL = foto;
      if (foto && foto !== user.photoURL) {
        photoURL = await uploadImageAsync(foto);
      }

      await updateProfile(auth.currentUser, {
        displayName: usuario,
        photoURL: photoURL,
      });

      if (email !== user.email) {
        await updateEmail(auth.currentUser, email);
        await sendEmailVerification(auth.currentUser);
        alert("Verifique seu novo email para concluir a atualização.");
      }

      if (senha && senha !== "******" && senha.length >= 6) {
        await updatePassword(auth.currentUser, senha);
      }

      await updateDoc(doc(db, "Usuario", user.uid), {
        usuario: usuario,
        email: email,
        foto: photoURL,
      });

      setUser({
        ...user,
        displayName: usuario,
        photoURL: photoURL,
        email: email,
      });

      console.log("Perfil atualizado com sucesso!");
      redirectPerfil();
    } catch (error) {
      console.error("Erro ao atualizar perfil:", error);
    }
  };

  const handleDelete = async () => {
    try {
      await deleteDoc(doc(db, "Usuario", user.uid));
      await deleteUser(auth.currentUser);

      setUser(null);
      console.log("Conta excluída com sucesso!");
      redirectLogin();
    } catch (error) {
      console.error("Erro ao excluir conta:", error);
    }
  };

  return (
    <View style={[styles.container, { justifyContent: "center" }]}>
      <View style={stylePerfil.selectPhoto}>
        {foto ? (
          <Image
            source={{ uri: foto }}
            style={stylePerfil.photo}
          />
        ) : (
          <Image
            source={require("../assets/img/upload_photo_camera.svg")}
            style={stylePerfil.photo}
          />
        )}
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
          value={usuario}
          onChangeText={(text) => setUsuario(text)}
        />
      </View>

      <View style={styles.inputContainer}>
        <Image source={require("../assets/img/email.svg")} />
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
      </View>

      <View style={styles.inputContainer}>
        <Image source={require("../assets/img/password.svg")} />
        <TextInput
          style={styles.input}
          secureTextEntry={true}
          value={senha}
          onChangeText={(text) => setSenha(text)}
          placeholder="Nova senha"
        />
      </View>

      <View style={styles.inputContainer}>
        <Image source={require("../assets/img/password.svg")} />
        <TextInput
          style={styles.input}
          secureTextEntry={true}
          value={senhaAtual}
          onChangeText={(text) => setSenhaAtual(text)}
          placeholder="Senha atual"
        />
      </View>

      <View style={stylePerfil.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: "#F7C31F" }]}
          onPress={redirectHome}
        >
          <Text style={styles.buttonText}>
            Cancelar
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, { backgroundColor: "#8872DE" }]}
          onPress={handleUpdate}
        >
          <Text style={styles.buttonText}>
            Salvar alterações
          </Text>
        </TouchableOpacity>
      </View>

      <View>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: "#FC6681" }]}
          onPress={handleDelete}
        >
          <Text style={styles.buttonText}>
            Excluir conta
          </Text>
        </TouchableOpacity>
      </View>
      <Menu navigation={navigation} />
    </View>
  );
};

export default Perfil;
