//Importações gerais
import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "../assets/styles/base";
import styleCadastro from "../assets/styles/cadastro";
import auth from '@react-native-firebase/auth';
//import firestore from '@react-native-firebase/firestore';
import { launchImageLibrary } from 'react-native-image-picker';



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
        path: 'images',
      },
    };

    launchImageLibrary(options, (response) => {
      if (response.didCancel) {
        console.log('Usuário cancelou a seleção de imagem');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        const source = { uri: response.uri };
        setFoto(source.uri); // Supondo que você está armazenando o URI da imagem
      }
    });
  };

  const handleCadastrar = async () => {
    try {
      // Cria usuário com email e senha
      const userCredential = await auth().createUserWithEmailAndPassword(email, senha);
      console.log('Usuário criado com sucesso!', userCredential.user);

      // Adiciona mais detalhes ao Firestore sob a coleção 'Usuario'
      await firestore().collection('Usuario').doc(userCredential.user.uid).set({
        usuario: usuario,
        email: email, // Opcional, já que o email já está associado ao usuário de autenticação
        foto: foto, // Certifique-se de que 'foto' é um URL ou um caminho relevante
      });

      console.log("Detalhes do usuário adicionados ao Firestore!");
      redirectPerfil(); // Redirecione para o perfil após o cadastro bem-sucedido
    } catch (error) {
      console.error("Erro ao cadastrar usuário:", error);
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
