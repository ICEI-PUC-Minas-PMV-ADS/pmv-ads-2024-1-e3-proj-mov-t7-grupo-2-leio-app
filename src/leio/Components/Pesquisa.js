import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import Menu from "./Menu";
import styles from "../assets/styles/base";
import stylePesquisa from "../assets/styles/pesquisa";

const Pesquisa = () => {
  const [pesquisa, setPesquisa] = useState("");

  return (
    <View style={[styles.container, { flex: "initial" }]}>
      <View
        style={[styles.inputContainer, { justifyContent: "space-between" }]}
      >
        <TextInput
          style={styles.input}
          placeholder="O que você quer ler?"
          value={pesquisa}
          onChangeText={(text) => setPesquisa(text)}
        />
        <View>
          <TouchableOpacity onPress={() => console.log("Research One")}>
            <Image source={require("../assets/img/search.svg")} />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView style={stylePesquisa.bodyContent}>
        <Text style={stylePesquisa.titleText}>Categorias</Text>
        <ScrollView style={{ width: "100%" }}>
          <View style={stylePesquisa.imgsContainer}>
            <View style={stylePesquisa.imageView}>
              <Image
                source={require("../assets/img/ficcao.svg")}
                style={stylePesquisa.image}
              />
              <Text style={stylePesquisa.imageText}>Ficção Científica</Text>
            </View>
            <View style={stylePesquisa.imageView}>
              <Image
                source={require("../assets/img/romance.svg")}
                style={stylePesquisa.image}
              />
              <Text style={stylePesquisa.imageText}>Romance</Text>
            </View>
            <View style={stylePesquisa.imageView}>
              <Image
                source={require("../assets/img/hqs.svg")}
                style={stylePesquisa.image}
              />
              <Text style={stylePesquisa.imageText}>HQs</Text>
            </View>
            <View style={stylePesquisa.imageView}>
              <Image
                source={require("../assets/img/terror.svg")}
                style={stylePesquisa.image}
              />
              <Text style={stylePesquisa.imageText}>Terror</Text>
            </View>
          </View>
        </ScrollView>

        <Text style={stylePesquisa.titleText}>Autores</Text>
        <ScrollView>
          <View style={stylePesquisa.imgsContainer}>
            <View style={stylePesquisa.imageView}>
              <Image
                source={require("../assets/img/autorRowling.svg")}
                style={stylePesquisa.image}
              />
              <Text style={stylePesquisa.imageText}>J. K. Rowling</Text>
            </View>
            <View style={stylePesquisa.imageView}>
              <Image
                source={require("../assets/img/autorTolkien.svg")}
                style={stylePesquisa.image}
              />
              <Text style={stylePesquisa.imageText}>J. R. R. Tolkien</Text>
            </View>
            <View style={stylePesquisa.imageView}>
              <Image
                source={require("../assets/img/autorRowling.svg")}
                style={stylePesquisa.image}
              />
              <Text style={stylePesquisa.imageText}>J. K. Rowling</Text>
            </View>
            <View style={stylePesquisa.imageView}>
              <Image
                source={require("../assets/img/autorTolkien.svg")}
                style={stylePesquisa.image}
              />
              <Text style={stylePesquisa.imageText}>J. R. R. Tolkien</Text>
            </View>
          </View>
        </ScrollView>
      </ScrollView>
      <Menu navigation={navigation} />
    </View>
  );
};

export default Pesquisa;
