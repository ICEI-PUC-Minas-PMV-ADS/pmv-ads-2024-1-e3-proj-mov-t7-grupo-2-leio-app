import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Login = () => {

  const navigation = useNavigation(); // hook de navegação

  const redirectCadastro = () => {
    navigation.navigate('Cadastro'); // navegar para a tela desejada
  };

  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');

  const efetuarLogin = () => {
    // Lógica de autenticação
  };

  return (
    <View style={styles.container}>
      <Image
        style={{ marginBottom: 20 }}
        source={require('./images/Logo.png')}
      />
      <Image
        source={require('./images/ilustracao.png')}
        style={styles.image}
      />
      
      <View style={styles.inputContainer}>
        <Image source={require('./images/user.png')} style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Usuário"
          value={usuario}
          onChangeText={(text) => setUsuario(text)}
        />
      </View>

      <View style={styles.inputContainer}>
        <Image source={require('./images/user.png')} style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          secureTextEntry={true}
          value={senha}
          onChangeText={(text) => setSenha(text)}
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={efetuarLogin}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>

      <Text style={styles.signupText} onPress={redirectCadastro}>
        Não possui uma conta? Cadastre-se aqui
      </Text>
    </View>
  );
};s

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  image: {
    width: 308,
    height: 261,
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    width: '90%',
    backgroundColor: '#fff',
    borderRadius: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  input: {
    flex: 1,
    height: 40,
    marginLeft: 10,
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  button: {
    backgroundColor: '#8872DE',
    borderRadius: 12,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  signupText: {
    marginTop: 20,
  },
});

export default Login;
