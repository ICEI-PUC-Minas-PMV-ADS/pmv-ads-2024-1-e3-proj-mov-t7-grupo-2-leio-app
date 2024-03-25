import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

const Cadastro = () => {
  const [foto, setFoto] = useState(null);
  const [usuario, setUsuario] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleSelecionarFoto = () => {
    // Lógica para selecionar uma foto
  };

  const handleCancelar = () => {
    // Lógica para cancelar o cadastro
  };

  const handleCadastrar = () => {
    // Lógica para cadastrar o usuário
  };

  return (
    <View style={styles.container}>

      <View style={styles.fotoContainer}>
        <Image
          source={require('./Login/images/uploadImage.png')}
          style={styles.foto}
        />

        <TouchableOpacity onPress={handleSelecionarFoto}>
          <View style={styles.selectFotoTextContainer}>
            <Text style={styles.selectFotoText}>Selecione uma foto</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.inputContainer}>
        <Image source={require('./Login/images/user.png')} style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Usuário"
          value={usuario}
          onChangeText={(text) => setUsuario(text)}
        />
      </View>

      <View style={styles.inputContainer}>
        <Image source={require('./Login/images/email.png')} style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
      </View>

      <View style={styles.inputContainer}>
        <Image source={require('./Login/images/cadeado.png')} style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          secureTextEntry={true}
          value={senha}
          onChangeText={(text) => setSenha(text)}
        />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: '#F7C31F' }]}
          onPress={handleCancelar}>
          <Text style={styles.buttonText}>Cancelar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, { backgroundColor: '#8872DE' }]}
          onPress={handleCadastrar}>
          <Text style={styles.buttonText}>Cadastrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  fotoContainer: {
    marginBottom: 20,
  },
  foto: {
    width: 200,
    height: 200,
    borderRadius: 25,
    marginBottom: 20,
  },
  selectFotoTextContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
  },
  selectFotoText: {
    textAlign: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    width: '100%',
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
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
  },
  button: {
    borderRadius: 12,
    paddingVertical: 7,
    paddingHorizontal: 20,
    width: '48%',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Cadastro;
