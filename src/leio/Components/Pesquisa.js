import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import { fetchBooks } from "../api/api";
import styles from "../assets/styles/base";
import stylePesquisa from "../assets/styles/pesquisa";
import FiltroModal from "./FiltroModal";
import Menu from "./Menu";

const Pesquisa = ({ navigation }) => {
  const [query, setQuery] = useState("");
  const [books, setBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [isFilterModalVisible, setFilterModalVisible] = useState(false);
  const [filters, setFilters] = useState({});

  // Limpa os estados de query e resultados dos livros quando a tela ganha o foco
  useFocusEffect(
    React.useCallback(() => {
      setQuery("");
      setBooks([]);
      setFilteredBooks([]);
      setFilters({});
      // Qualquer outro estado que precise ser limpo pode ser adicionado aqui
    }, [])
  );

  // Função para carregar livros com base na query
  useEffect(() => {
    const loadBooks = async () => {
      if (query.trim() !== "") {
        try {
          const books = await fetchBooks(query, 12, "relevance");
          setBooks(books);
          setFilteredBooks(books);
        } catch (error) {
          console.error("Error fetching books:", error);
        }
      } else {
        setBooks([]);
        setFilteredBooks([]);
      }
    };
    loadBooks();
  }, [query]);

  // Função para aplicar filtros aos livros
  const applyFilters = (books, filters) => {
    let filtered = books;

    if (filters.genres && filters.genres.length > 0) {
      filtered = filtered.filter((book) =>
        filters.genres.some((genre) =>
          book.volumeInfo.categories?.includes(genre)
        )
      );
    }

    if (filters.rating) {
      filtered = filtered.filter(
        (book) => book.volumeInfo.averageRating >= filters.rating
      );
    }

    if (filters.format) {
      filtered = filtered.filter(
        (book) => book.volumeInfo.printType === filters.format
      );
    }

    return filtered;
  };

  // Função para lidar com a pesquisa
  const handleSearch = (text) => {
    setQuery(text);

    if (text.trim() !== "") {
      const filtered = applyFilters(
        books.filter((book) =>
          book.volumeInfo.title.toLowerCase().includes(text.toLowerCase())
        ),
        filters
      );
      setFilteredBooks(filtered);
    } else {
      setFilteredBooks([]);
    }
  };

  // Função para lidar com a seleção de categoria ou autor
  const handleSelection = async (selectionType, selection) => {
    console.log("Selecionou", selectionType + ":", selection);
    try {
      const books = await fetchBooks(selection, 12, "relevance");
      setBooks(books);
      setFilteredBooks(books);
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  };

  // Função para lidar com a seleção de categoria
  const handleCategorySelection = async (category) => {
    await handleSearch(category);
  };

  // Função para lidar com a seleção de autor
  const handleAuthorSelection = async (author) => {
    await handleSearch(author);
  };

  // Função para redirecionar para a página de informações do livro
  const redirectInfo = (bookId) => {
    navigation.navigate("Info", { bookId });
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
          onChangeText={(text) => handleSearch(text)}
        />
        <View>
          <TouchableOpacity onPress={() => handleSearch(query)}>
            <Image source={require("../assets/img/search.svg")} />
          </TouchableOpacity>
        </View>
      </View>

      {query.trim() === "" ? ( //Renderização Condicional - renderização dos livros ocorre apenas quando há uma consulta ativa.
        <ScrollView style={stylePesquisa.bodyContent}>
          <Text style={stylePesquisa.titleText}>Categorias</Text>

          <ScrollView style={{ width: "100%" }}>
            <View style={stylePesquisa.imgsContainer}>
              <TouchableOpacity
                style={stylePesquisa.imageView}
                onPress={() => handleCategorySelection("Ficção Científica")}
              >
                <Image
                  source={require("../assets/img/ficcao.svg")}
                  style={stylePesquisa.image}
                />
                <Text style={stylePesquisa.imageText}>Ficção Científica</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={stylePesquisa.imageView}
                onPress={() => handleCategorySelection("Romance")}
              >
                <Image
                  source={require("../assets/img/romance.svg")}
                  style={stylePesquisa.image}
                />
                <Text style={stylePesquisa.imageText}>Romance</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={stylePesquisa.imageView}
                onPress={() => handleCategorySelection("HQs")}
              >
                <Image
                  source={require("../assets/img/hqs.svg")}
                  style={stylePesquisa.image}
                />
                <Text style={stylePesquisa.imageText}>HQs</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={stylePesquisa.imageView}
                onPress={() => handleCategorySelection("Terror")}
              >
                <Image
                  source={require("../assets/img/terror.svg")}
                  style={stylePesquisa.image}
                />
                <Text style={stylePesquisa.imageText}>Terror</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>

          <Text style={stylePesquisa.titleText}>Autores</Text>

          <ScrollView>
            <View style={stylePesquisa.imgsContainer}>
              <TouchableOpacity
                style={stylePesquisa.imageView}
                onPress={() => handleAuthorSelection("J. K. Rowling")}
              >
                <Image
                  source={require("../assets/img/autorRowling.svg")}
                  style={stylePesquisa.image}
                />
                <Text style={stylePesquisa.imageText}>J. K. Rowling</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={stylePesquisa.imageView}
                onPress={() => handleAuthorSelection("J. R. R. Tolkien")}
              >
                <Image
                  source={require("../assets/img/autorTolkien.svg")}
                  style={stylePesquisa.image}
                />
                <Text style={stylePesquisa.imageText}>J. R. R. Tolkien</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={stylePesquisa.imageView}
                onPress={() => handleAuthorSelection("Stephen King")}
              >
                <Image
                  source={require("../assets/img/autorKing.jpg")}
                  style={stylePesquisa.image}
                />
                <Text style={stylePesquisa.imageText}>Stephen King</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={stylePesquisa.imageView}
                onPress={() => handleAuthorSelection("Cassandra Clare")}
              >
                <Image
                  source={require("../assets/img/autorCassandra.jpeg")}
                  style={stylePesquisa.image}
                />
                <Text style={stylePesquisa.imageText}>Cassandra Clare</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </ScrollView>
      ) : (
        <ScrollView contentContainerStyle={styles.bookContainer}>
          {filteredBooks.map((book) => (
            <View key={book.id} style={styles.book}>
              <TouchableOpacity
                onPress={() => redirectInfo(book.id)}
                key={book.id}
                style={styles.book}
              >
                <Image
                  source={{ uri: book.volumeInfo.imageLinks?.thumbnail }}
                  style={styles.bookImg}
                />
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
      )}

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
