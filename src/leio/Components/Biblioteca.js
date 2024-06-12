import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import Menu from "./Menu";
import styles from "../assets/styles/base";
import styleBiblioteca from "../assets/styles/biblioteca";
import FiltroModal from "./FiltroModal";
import stylePesquisa from "../assets/styles/pesquisa";
import { db, auth } from "../db/firebaseConfig";
import { collection, getDocs, where, query as firestoreQuery } from "firebase/firestore";
import { fetchBooks, fetchFilteredBooks } from "../api/api";

const Biblioteca = ({ navigation }) => {
  const [activeTab, setActiveTab] = useState("Estante");
  const [query, setQuery] = useState("");
  const [isFilterModalVisible, setFilterModalVisible] = useState(false);
  const [estanteBooks, setEstanteBooks] = useState({
    "Lido": [],
    "Quero Ler": [],
    "Relendo": [],
    "Abandonei": []
  });
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [categories, setCategories] = useState([]);
  const [authors, setAuthors] = useState([]);
  const [filters, setFilters] = useState({});

  const redirectInfo = (bookId) => {
    navigation.navigate("Info", { bookId });
  };

  // Função para carregar os livros da estante
  const loadEstanteBooks = async () => {
    try {
      const user = auth.currentUser;
      if (!user) return;

      const q = firestoreQuery(collection(db, "estante"), where("usuario_id", "==", user.uid));
      const querySnapshot = await getDocs(q);

      const booksByCategory = {
        "Lido": [],
        "Quero Ler": [],
        "Relendo": [],
        "Abandonei": []
      };

      for (const doc of querySnapshot.docs) {
        const data = doc.data();
        const bookDetails = await fetchBookDetails(data.livro_id);

        if (booksByCategory[data.categoria]) {
          booksByCategory[data.categoria].push({
            ...data,
            title: bookDetails.title,
            thumbnail: bookDetails.thumbnail,
          });
        }
      }

      setEstanteBooks(booksByCategory);
    } catch (error) {
      console.error("Erro ao carregar livros da estante:", error);
    }
  };

  // Função para buscar detalhes dos livros
  const fetchBookDetails = async (bookId) => {
    try {
      const response = await fetch(`https://www.googleapis.com/books/v1/volumes/${bookId}`);
      const bookData = await response.json();
      return {
        title: bookData.volumeInfo.title || "Título desconhecido",
        thumbnail: bookData.volumeInfo.imageLinks?.thumbnail || require("../assets/img/no_photo.png"),
        authors: bookData.volumeInfo.authors?.join(", ") || "Autor desconhecido",
      };
    } catch (error) {
      console.error("Erro ao buscar detalhes do livro:", error);
      return {
        title: "Título desconhecido",
        thumbnail: require("../assets/img/no_photo.png"),
        authors: "Autor desconhecido",
      };
    }
  };

  // Função para carregar livros da biblioteca
  const loadBooks = async (searchQuery, tab, appliedFilters = {}) => {
    try {
      const books =
        appliedFilters.genres || appliedFilters.formats
          ? await fetchFilteredBooks(
            searchQuery || "i",
            36,
            tab === "Biblioteca" ? "newest" : "relevance",
            appliedFilters
          )
          : await fetchBooks(
            searchQuery || "i",
            36,
            tab === "Biblioteca" ? "newest" : "relevance"
          );

      const filteredBooks = books.filter(
        (book) => book.accessInfo.epub?.isAvailable
      );

      setFilteredBooks(filteredBooks);

      const categorySet = new Set();
      const authorSet = new Set();
      const extractedCategories = [];
      const extractedAuthors = [];

      filteredBooks.forEach((book) => {
        if (book.volumeInfo.categories) {
          book.volumeInfo.categories.forEach((category) => {
            if (!categorySet.has(category)) {
              categorySet.add(category);
              extractedCategories.push({
                name: category,
                image:
                  book.volumeInfo.imageLinks?.thumbnail ||
                  require("../assets/img/no_photo.png"),
              });
            }
          });
        }
        if (book.volumeInfo.authors) {
          book.volumeInfo.authors.forEach((author) => {
            if (!authorSet.has(author)) {
              authorSet.add(author);
              extractedAuthors.push({
                name: author,
                image:
                  book.volumeInfo.imageLinks?.thumbnail ||
                  require("../assets/img/no_photo.png"),
              });
            }
          });
        }
      });

      setCategories(extractedCategories);
      setAuthors(extractedAuthors);
    } catch (error) {
      console.error("Error fetching books:", error);
      setFilteredBooks([]);
    }
  };

  useEffect(() => {
    if (activeTab === "Estante") {
      loadEstanteBooks();
    } else if (activeTab === "Biblioteca") {
      loadBooks(query, activeTab, filters);
    }
  }, [activeTab, query, filters]);

  const handleSearch = (text) => {
    setQuery(text);
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const renderCategoryBooks = (category) => (
    <View key={category} style={styleBiblioteca.categoryContainer}>
      <Text style={styleBiblioteca.categoryTitle}>{category}</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {estanteBooks[category].map((book, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => redirectInfo(book.livro_id)}
            style={styleBiblioteca.bookItem}
          >
            <Image
              source={{ uri: book.thumbnail }}
              style={styleBiblioteca.bookImage}
            />
            <Text style={styleBiblioteca.bookTitle}>{book.title}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );

  const renderEstanteContent = () => (
    <ScrollView contentContainerStyle={stylePesquisa.bodyContainer}>
      <View style={stylePesquisa.bodyContent}>

        {Object.keys(estanteBooks).map((category) => (
          <View key={category} style={styleBiblioteca.categoryContainer}>
            <Text style={styleBiblioteca.titleText}>{category}</Text>

            <ScrollView horizontal style={styleBiblioteca.topicContainer}>
              <View style={stylePesquisa.imgsContainer}>
                {estanteBooks[category].map((book, index) => (
                  <TouchableOpacity
                    key={index}
                    style={stylePesquisa.imageView}
                    onPress={() => redirectInfo(book.livro_id)}
                  >
                    <Image source={{ uri: book.thumbnail || require("../assets/img/no_photo.png")}} style={stylePesquisa.image} />
                    <Text style={stylePesquisa.imageText}>{book.title}</Text>
                    <Text style={stylePesquisa.imageText}>{book.authors}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            </ScrollView>
          </View>
        ))}
      </View>
    </ScrollView>
  );


  const renderBibliotecaContent = () => (
    <ScrollView contentContainerStyle={styles.bookContainer}>
      {filteredBooks.length > 0 ? (
        filteredBooks.map((book, index) => (
          <View key={`${book.id}-${index}`} style={styles.book}>
            <TouchableOpacity
              onPress={() => redirectInfo(book.id)}
              key={`${book.id}-${index}`}
              style={styles.book}
            >
              <Image
                source={{
                  uri:
                    book.volumeInfo.imageLinks?.thumbnail || require("../assets/img/no_photo.png"),
                }}
                style={styles.bookImg}
              />
              <Text style={styles.bookTitle}>
                {book.volumeInfo.title || "Título desconhecido"}
              </Text>
            </TouchableOpacity>
          </View>
        ))
      ) : (
        <Text style={styleBiblioteca.noBooksText}>
          Nenhum livro encontrado
        </Text>
      )}
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
          <TouchableOpacity onPress={() => handleSearch(query)}>
            <Image
              style={styleBiblioteca.searchIcon}
              source={require("../assets/img/search.svg")}
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styleBiblioteca.searchFilter}
          onPress={() => setFilterModalVisible(true)}
        >
          <Image
            style={styleBiblioteca.filterImg}
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
      {activeTab === "Estante" ? renderEstanteContent() : renderBibliotecaContent()}
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

/* 
import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import Menu from "./Menu";
import styles from "../assets/styles/base";
import styleBiblioteca from "../assets/styles/biblioteca";
import { fetchBooks, fetchFilteredBooks } from "../api/api";
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

  const loadBooks = async (searchQuery, tab, appliedFilters = {}) => {
    try {
      const books =
        appliedFilters.genres || appliedFilters.formats
          ? await fetchFilteredBooks(
            searchQuery || "i",
            36,
            tab === "Biblioteca" ? "newest" : "relevance",
            appliedFilters
          )
          : await fetchBooks(
            searchQuery || "i",
            36,
            tab === "Biblioteca" ? "newest" : "relevance"
          );

      const filteredBooks = books.filter(
        (book) => book.accessInfo.epub?.isAvailable
      );

      setBooks(filteredBooks);
      setFilteredBooks(filteredBooks);

      const categorySet = new Set();
      const authorSet = new Set();
      const extractedCategories = [];
      const extractedAuthors = [];

      filteredBooks.forEach((book) => {
        if (book.volumeInfo.categories) {
          book.volumeInfo.categories.forEach((category) => {
            if (!categorySet.has(category)) {
              categorySet.add(category);
              extractedCategories.push({
                name: category,
                image:
                  book.volumeInfo.imageLinks?.thumbnail ||
                  require("../assets/img/no_photo.png"),
              });
            }
          });
        }
        if (book.volumeInfo.authors) {
          book.volumeInfo.authors.forEach((author) => {
            if (!authorSet.has(author)) {
              authorSet.add(author);
              extractedAuthors.push({
                name: author,
                image:
                  book.volumeInfo.imageLinks?.thumbnail ||
                  require("../assets/img/no_photo.png"),
              });
            }
          });
        }
      });

      setCategories(extractedCategories);
      setAuthors(extractedAuthors);
    } catch (error) {
      console.error("Error fetching books:", error);
      setBooks([]);
      setFilteredBooks([]);
    }
  };

  useEffect(() => {
    if (activeTab === "Biblioteca" && !query) {
      loadBooks("i", activeTab, filters);
    } else {
      loadBooks(query, activeTab, filters);
    }
  }, [activeTab, query, filters]);

  const handleSearch = (text) => {
    setQuery(text);
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    if (tab === "Biblioteca") {
      loadBooks(query || "i", tab, filters);
    }
  };

  const renderEstanteContent = () => (
    <ScrollView contentContainerStyle={stylePesquisa.bodyContainer}>
      <View style={stylePesquisa.bodyContent}>

        <Text style={stylePesquisa.titleText}>Categorias</Text>

        <ScrollView style={styleBiblioteca.topicContainer}>
          <View style={stylePesquisa.imgsContainer}>
            {categories.map((category, index) => (
              <TouchableOpacity
                key={index}
                style={stylePesquisa.imageView}
                onPress={() => redirectToSearchResults(category.name)}
              >
                <Image source={category.image} style={stylePesquisa.image} />
                <Text style={stylePesquisa.imageText}>{category.name}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>

        <Text style={stylePesquisa.titleText}>Autores</Text>

        <ScrollView contentContainerStyle={styleBiblioteca.topicContainer}>
          <View style={stylePesquisa.imgsContainer}>
            {authors.map((author, index) => (
              <TouchableOpacity
                key={index}
                style={stylePesquisa.imageView}
                onPress={() => redirectToSearchResults(author.name)}
              >
                <Image source={author.image} style={stylePesquisa.image} />
                <Text style={stylePesquisa.imageText}>{author.name}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>

      </View>
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
          style={styleBiblioteca.searchFilter}
          onPress={() => setFilterModalVisible(true)}
        >
          <Image
            style={styleBiblioteca.filterImg}
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

        <ScrollView horizontal contentContainerStyle={styles.bookContainer}>
          {filteredBooks.map((book, index) => (
            <View key={`${book.id}-${index}`} style={styles.book}>

              <TouchableOpacity
                onPress={() => redirectInfo(book.id)}
                key={`${book.id}-${index}`}
                style={styles.book}
              >
                <Image
                  source={{
                    uri:
                      book.volumeInfo.imageLinks?.thumbnail ||
                      require("../assets/img/no_photo.png"),
                  }}
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

export default Biblioteca;
 */