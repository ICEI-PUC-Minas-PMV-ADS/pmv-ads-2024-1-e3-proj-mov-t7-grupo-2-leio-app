import React, { useState, useEffect, useContext } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Pressable,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  updateProfile,
  deleteUser,
  updateEmail,
  updatePassword,
  reauthenticateWithCredential,
  EmailAuthProvider,
  sendEmailVerification,
} from "firebase/auth";
import { doc, updateDoc, deleteDoc } from "firebase/firestore";
import { auth, db, storage } from "../db/firebaseConfig";
import * as ImagePicker from "expo-image-picker";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { UserContext } from "./UserContext";

import Menu from "./Menu";
import styles from "../assets/styles/base";
import styleCadastro from "../assets/styles/cadastro";

const Perfil = () => {
  const { user, setUser } = useContext(UserContext);
  const [foto, setFoto] = useState(null);
  const [usuario, setUsuario] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [senhaAtual, setSenhaAtual] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isGoogleUser, setIsGoogleUser] = useState(false);

  const navigation = useNavigation();

  const fotoPadrao = require("../assets/img/user.svg");

  useEffect(() => {
    if (user) {
      setUsuario(user.displayName || "");
      setEmail(user.email || "");
      setFoto(user.photoURL || fotoPadrao); // Atualiza o estado da foto com a URL da foto do usuário
      setSenha(""); // Exibe a senha como asteriscos
      // Verificar se o login foi feito pelo Google
      setIsGoogleUser(
        user.providerData.some(
          (provider) => provider.providerId === "google.com"
        )
      );
    }
  }, [user]);

  const redirectLogin = () => {
    navigation.navigate("Login");
  };

  const redirectHome = () => {
    navigation.navigate("Home");
  };

  const redirectPerfil = () => {
    navigation.navigate("Perfil");
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
      aspect: [1, 1],
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
    const credential = EmailAuthProvider.credential(
      user.email,
      currentPassword
    );
    try {
      await reauthenticateWithCredential(auth.currentUser, credential);
      // console.log("Reautenticação bem-sucedida");
    } catch (error) {
      console.error("Erro na reautenticação:", error);
      throw error;
    }
  };

  const handleUpdate = async () => {
    setError("");
    setSuccess("");

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

      setSuccess("Perfil atualizado com sucesso!");
      setTimeout(() => {
        redirectHome();
      }, 1000);
    } catch (error) {
      setError("Erro ao atualizar perfil. Tente novamente.");
    }
  };

  const handleDelete = async () => {
    setError("");
    setSuccess("");

    try {
      await deleteDoc(doc(db, "Usuario", user.uid));
      await deleteUser(auth.currentUser);

      setUser(null);
      setSuccess("Conta excluída com sucesso!");
      redirectLogin();
    } catch (error) {
      setError("Erro ao excluir conta. Tente novamente.");
    }
  };

  return (
    <View style={[styles.container, { justifyContent: "center" }]}>
      <Pressable onPress={selecionarFoto}>
        <View style={styleCadastro.selectPhoto}>
          {foto ? (
            <Image
              source={{ uri: foto }}
              style={styleCadastro.photo}
              aria-label="Foto do usuário"
            />
          ) : (
            <Image
              source={require("../assets/img/upload_photo_camera.svg")}
              style={styleCadastro.photo}
            />
          )}
        </View>
        <Text style={styleCadastro.selectPhotoText}>Substituir foto</Text>
      </Pressable>

      <View style={styles.inputContainer}>
        <Image source={require("../assets/img/user.svg")} />
        <TextInput
          style={styles.input}
          value={usuario}
          onChangeText={(text) => setUsuario(text)}
        />
      </View>

      {/* <View style={styles.inputContainer}>
        <Image source={require("../assets/img/email.svg")} />
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
      </View> */}

      {!isGoogleUser && (
        <>
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
        </>
      )}

      {error ? <Text style={styles.errorText}>{error}</Text> : null}
      {success ? <Text style={styles.successText}>{success}</Text> : null}

      {!isGoogleUser && (
        <View style={styleCadastro.buttonContainer}>
          <TouchableOpacity
            style={[styles.button, { backgroundColor: "#F7C31F" }]}
            onPress={redirectHome}
          >
            <Text style={styles.buttonText}>Cancelar</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.button, { backgroundColor: "#8872DE" }]}
            onPress={handleUpdate}
          >
            <Text style={styles.buttonText}>Salvar alterações</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.button, { backgroundColor: "#FC6681" }]}
            onPress={handleDelete}
          >
            <Text style={styles.buttonText}>Excluir conta</Text>
          </TouchableOpacity>
        </View>
      )}
      <Menu navigation={navigation} />
    </View>
  );
};

export default Perfil;
