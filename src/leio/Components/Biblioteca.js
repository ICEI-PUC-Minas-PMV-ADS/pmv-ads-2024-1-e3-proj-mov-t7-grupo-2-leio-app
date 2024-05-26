import React, { useState, useEffect } from "react";
import { View, Text, TextInput, ScrollView, TouchableOpacity, Image } from "react-native";
import Menu from "./Menu";
import styles from "../assets/styles/base";
import styleBiblioteca from "../assets/styles/biblioteca";
import { fetchBooks } from "../api/api";
import FiltroModal from "./FiltroModal";
import stylePesquisa from "../assets/styles/pesquisa";

const Biblioteca = ({ navigation }) => {
  const [activeTab, setActiveTab] = useState("Estante");
  const [books, setBooks] = useState([]);
  const [query, setQuery] = useState("");
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [isFilterModalVisible, setFilterModalVisible] = useState(false);
  const [filters, setFilters] = useState({});
  const [categories, setCategories] = useState([]);
  const [authors, setAuthors] = useState([]);

  const redirectInfo = (bookId) => {
    navigation.navigate("Info", { bookId });
  };

  const redirectToSearchResults = (searchTerm) => {
    navigation.navigate("ResultadoPesquisa", { searchTerm });
  };

  const loadBooks = async (searchQuery, tab) => {
    try {
      const books = await fetchBooks(searchQuery || "all", 36, tab === "Biblioteca" ? "newest" : "relevance");
      const filtered = tab === "Biblioteca" && searchQuery
        ? books.filter(book => book.accessInfo.pdf?.isAvailable)
        : books;
      setBooks(filtered);
      setFilteredBooks(filtered);

      const categorySet = new Set();
      const authorSet = new Set();
      const extractedCategories = [];
      const extractedAuthors = [];

      filtered.forEach(book => {
        if (book.volumeInfo.categories) {
          book.volumeInfo.categories.forEach(category => {
            if (!categorySet.has(category)) {
              categorySet.add(category);
              extractedCategories.push({
                name: category,
                image: book.volumeInfo.imageLinks?.thumbnail || 'https://example.com/default-category-image.jpg'
              });
            }
          });
        }
        if (book.volumeInfo.authors) {
          book.volumeInfo.authors.forEach(author => {
            if (!authorSet.has(author)) {
              authorSet.add(author);
              extractedAuthors.push({
                name: author,
                image: book.volumeInfo.imageLinks?.thumbnail || 'https://example.com/default-author-image.jpg'
              });
            }
          });
        }
      });

      setCategories(extractedCategories);
      setAuthors(extractedAuthors);
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  };

  useEffect(() => {
    if (activeTab === "Biblioteca" && !query) {
      loadBooks("all", activeTab);
    } else {
      loadBooks(query, activeTab);
    }
  }, [activeTab, query]);

  const applyFilters = (books, filters) => {
    let filtered = books;

    if (filters.genres && filters.genres.length > 0) {
      filtered = filtered.filter(book =>
        filters.genres.some(genre => book.volumeInfo.categories?.includes(genre))
      );
    }

    if (filters.rating) {
      filtered = filtered.filter(book => book.volumeInfo.averageRating >= filters.rating);
    }

    if (filters.format) {
      filtered = filtered.filter(book => book.volumeInfo.printType === filters.format);
    }

    return filtered;
  };

  const handleSearch = (text) => {
    setQuery(text);
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    if (tab === "Biblioteca") {
      loadBooks(query || "all", tab);
    }
  };

  const renderEstanteContent = () => (
    <ScrollView style={stylePesquisa.bodyContent}>
      <Text style={stylePesquisa.titleText}>Categorias</Text>
      <ScrollView horizontal style={{ width: "100%" }}>
        <View style={stylePesquisa.imgsContainer}>
          {categories.map((category, index) => (
            <TouchableOpacity
              key={index}
              style={stylePesquisa.imageView}
              onPress={() => redirectToSearchResults(category.name)}
            >
              <Image
                source={{ uri: category.image }}
                style={stylePesquisa.image}
              />
              <Text style={stylePesquisa.imageText}>{category.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      <Text style={stylePesquisa.titleText}>Autores</Text>
      <ScrollView horizontal style={{ width: "100%" }}>
        <View style={stylePesquisa.imgsContainer}>
          {authors.map((author, index) => (
            <TouchableOpacity
              key={index}
              style={stylePesquisa.imageView}
              onPress={() => redirectToSearchResults(author.name)}
            >
              <Image
                source={{ uri: author.image }}
                style={stylePesquisa.image}
              />
              <Text style={stylePesquisa.imageText}>{author.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </ScrollView>
  );

  return (
    <View style={styles.container}>
      <View style={styleBiblioteca.containerInput}>
        <View style={styleBiblioteca.searchContainer}>
          <TextInput
            placeholder="O que você quer ler?"
            style={styles.input}
            value={query}
            onChangeText={handleSearch}
          />
          <TouchableOpacity
            onPress={() => {
              handleSearch(query);
            }}
          >
            <Image
              style={styleBiblioteca.searchIcon}
              source={require("../assets/img/search.svg")}
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={() => setFilterModalVisible(true)}
        >
          <Image
            style={styleBiblioteca.searchFilter}
            source={require("../assets/img/filter.svg")}
          />
        </TouchableOpacity>
      </View>
      <View style={styleBiblioteca.tabs}>
        <TouchableOpacity
          style={[
            styleBiblioteca.tab,
            activeTab === "Estante" && styleBiblioteca.activeTab,
          ]}
          onPress={() => handleTabChange("Estante")}
        >
          <Text style={styleBiblioteca.tabText}>Estante</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styleBiblioteca.tab,
            activeTab === "Biblioteca" && styleBiblioteca.activeTab,
          ]}
          onPress={() => handleTabChange("Biblioteca")}
        >
          <Text style={styleBiblioteca.tabText}>Biblioteca</Text>
        </TouchableOpacity>
      </View>
      {activeTab === "Estante" ? (
        renderEstanteContent()
      ) : (
        <ScrollView contentContainerStyle={styles.bookContainer}>
          {filteredBooks.map((book, index) => (
            <View key={`${book.id}-${index}`} style={styles.book}>
              <TouchableOpacity
                onPress={() => redirectInfo(book.id)}
                key={`${book.id}-${index}`}
                style={styles.book}
              >
                <Image source={{ uri: book.volumeInfo.imageLinks?.thumbnail }} style={styles.bookImg} />
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

export default Biblioteca;
