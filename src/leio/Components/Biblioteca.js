import React, { useState, useEffect } from "react";
import { View, Text, TextInput, ScrollView, TouchableOpacity, Image } from "react-native";
import Menu from "./Menu";
import styles from "../assets/styles/base";
import styleBiblioteca from "../assets/styles/biblioteca";
import { fetchBooks } from "../api/api";
import FiltroModal from "./FiltroModal"; // Import FiltroModal

const Biblioteca = ({ navigation }) => {
  const [activeTab, setActiveTab] = useState("Estante");
  const [books, setBooks] = useState([]);
  const [query, setQuery] = useState("");
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [isFilterModalVisible, setFilterModalVisible] = useState(false);
  const [filters, setFilters] = useState({});

  const redirectInfo = (bookId) => {
    navigation.navigate("Info", { bookId });
  };

  const loadBooks = async (searchQuery, tab) => {
    try {
      const books = await fetchBooks(searchQuery, 36, tab === "Biblioteca" ? "newest" : "relevance");
      const filtered = tab === "Biblioteca" && searchQuery
        ? books.filter(book => book.accessInfo.pdf?.isAvailable)
        : books;
      setBooks(filtered);
      setFilteredBooks(filtered);
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
      loadBooks(query || "all", tab);  // Load books immediately when tab changes
    }
  };

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
          onPress={() => setFilterModalVisible(true)} // Abre o modal de filtros
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
