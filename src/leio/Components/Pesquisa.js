import React, { useState, useEffect } from "react";
import { View, Text, ScrollView, TextInput, TouchableOpacity, Image } from "react-native";
import { useFocusEffect } from '@react-navigation/native';
import Menu from "./Menu";
import styles from "../assets/styles/base";
import stylePesquisa from "../assets/styles/pesquisa";
import { fetchBooks } from "../api/api";
import FiltroModal from "./FiltroModal"; // Import FiltroModal


const Pesquisa = ({ navigation }) => {

  //const [pesquisa, setPesquisa] = useState("");

  //const [books, setBooks] = useState([]);
  const [query, setQuery] = useState("");
  //const [filteredBooks, setFilteredBooks] = useState([]);
  const [isFilterModalVisible, setFilterModalVisible] = useState(false);
  const [filters, setFilters] = useState({});
  const [activeTab, setActiveTab] = useState("Pesquisa"); // Adiciona estado para a aba ativa


    // Limpa os estados de query e resultados dos livros quando a tela ganha o foco
    useFocusEffect(
      React.useCallback(() => {
        setQuery("");
        setFilters({});
        // Qualquer outro estado que precise ser limpo pode ser adicionado aqui
      }, [])
    );

  // Função para lidar com a pesquisa ao clicar na lupa
  const handleSearch = async () => {
    if (query.trim() !== "") {
      try {
        const books = await fetchBooks(query, 12, "relevance");
        // Navega para a tela de ResultadoPesquisa passando os livros como parâmetro
        navigation.navigate("ResultadoPesquisa", { books, query });
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    }
  };

  return (
    <View style={styles.container}>
      <View
        style={[styles.inputContainer, { justifyContent: "space-between" }]}
      >
        <TextInput
          style={styles.input}
          placeholder="O que você quer ler?"
          value={query}
          onChangeText={(text) => setQuery(text)}
        />
        <View>
          <TouchableOpacity onPress={handleSearch}>
            <Image source={require("../assets/img/search.svg")} />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView style={stylePesquisa.bodyContent}>

        <Text style={stylePesquisa.titleText}>Categorias</Text>

        <ScrollView style={{ width: "100%" }}>
          <View style={stylePesquisa.imgsContainer}>

            <TouchableOpacity style={stylePesquisa.imageView}>
              <Image
                source={require("../assets/img/ficcao.svg")}
                style={stylePesquisa.image}
              />
              <Text style={stylePesquisa.imageText}>Ficção Científica</Text>
            </TouchableOpacity>

            <TouchableOpacity style={stylePesquisa.imageView}>
              <Image
                source={require("../assets/img/romance.svg")}
                style={stylePesquisa.image}
              />
              <Text style={stylePesquisa.imageText}>Romance</Text>
            </TouchableOpacity>

            <TouchableOpacity style={stylePesquisa.imageView}>
              <Image
                source={require("../assets/img/hqs.svg")}
                style={stylePesquisa.image}
              />
              <Text style={stylePesquisa.imageText}>HQs</Text>
            </TouchableOpacity>

            <TouchableOpacity style={stylePesquisa.imageView}>
              <Image
                source={require("../assets/img/terror.svg")}
                style={stylePesquisa.image}
              />
              <Text style={stylePesquisa.imageText}>Terror</Text>
            </TouchableOpacity>

          </View>
        </ScrollView>

        <Text style={stylePesquisa.titleText}>Autores</Text>

        <ScrollView >
          <View style={stylePesquisa.imgsContainer}>

            <TouchableOpacity style={stylePesquisa.imageView}>
              <Image
                source={require("../assets/img/autorRowling.svg")}
                style={stylePesquisa.image}
              />
              <Text style={stylePesquisa.imageText}>J. K. Rowling</Text>
            </TouchableOpacity>

            <TouchableOpacity style={stylePesquisa.imageView}>
              <Image
                source={require("../assets/img/autorTolkien.svg")}
                style={stylePesquisa.image}
              />
              <Text style={stylePesquisa.imageText}>J. R. R. Tolkien</Text>
            </TouchableOpacity>

            <TouchableOpacity style={stylePesquisa.imageView}>
              <Image
                source={require("../assets/img/autorKing.jpg")}
                style={stylePesquisa.image}
              />
              <Text style={stylePesquisa.imageText}>Stephen King</Text>
            </TouchableOpacity>

            <TouchableOpacity style={stylePesquisa.imageView}>
              <Image
                source={require("../assets/img/autorCassandra.jpeg")}
                style={stylePesquisa.image}
              />
              <Text style={stylePesquisa.imageText}>Cassandra Clare</Text>
            </TouchableOpacity>



          </View>
        </ScrollView>

      </ScrollView>

      <FiltroModal
        isVisible={isFilterModalVisible}
        onClose={() => setFilterModalVisible(false)}
        onApply={(appliedFilters) => setFilters(appliedFilters)}
      />

      <Menu navigation={navigation} />
    </View>
  );
};

export default Pesquisa;
