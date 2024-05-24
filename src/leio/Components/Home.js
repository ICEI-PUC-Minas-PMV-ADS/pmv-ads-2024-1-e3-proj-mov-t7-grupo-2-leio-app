import React, { useState, useEffect, useContext } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import Menu from "./Menu";
import styles from "../assets/styles/base";
import styleHome from "../assets/styles/home";
import { fetchBooks } from "../api/api";
import { UserContext } from "./UserContext"; // Importa o contexto do user

const Home = ({ navigation }) => {
  const { user } = useContext(UserContext); // Usa o contexto do usuário

  const redirectLogin = () => {
    navigation.navigate("Login");
  };

  const redirectInfo = (bookId) => {
    navigation.navigate("Info", { bookId });
  };

  const [romanceBooks, setRomanceBooks] = useState([]);
  const [newestBooks, setNewestBooks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedBooks = await fetchBooks("romance", 6, "relevance");
        setRomanceBooks(fetchedBooks);
        console.log("Romances:", fetchedBooks);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedBooks = await fetchBooks("all", 6, "newest");
        setNewestBooks(fetchedBooks);
        console.log("Recentes:", fetchedBooks);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styleHome.containerName}>
        <Text style={styleHome.containerName}>
          Olá, {user?.displayName ?? "Usuário"}
        </Text>
        <TouchableOpacity onPress={redirectLogin}>
          <Image source={require("../assets/img/logout.svg")} />
        </TouchableOpacity>
      </View>

      <View style={styleHome.body}>
        <View style={styleHome.bodyContent}>
          <Text style={styleHome.text}>Sugestões de romance</Text>
          <View style={styles.bookContainer}>
            {romanceBooks.map((book) => (
              <TouchableOpacity
                onPress={() => redirectInfo(book.id)}
                key={book.id}
                style={styles.book}
              >
                <Image
                  style={styles.bookImg}
                  source={{ uri: book.volumeInfo.imageLinks?.thumbnail }}
                />
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <View style={styleHome.bodyContent}>
          <Text style={styleHome.text}>Adicionados recentemente</Text>
          <View style={styles.bookContainer}>
            {newestBooks.map((book) => (
              <TouchableOpacity
                onPress={() => redirectInfo(book.id)}
                key={book.id}
                style={styles.book}
              >
                <Image
                  style={styles.bookImg}
                  source={{ uri: book.volumeInfo.imageLinks?.thumbnail }}
                />
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </View>
      <Menu navigation={navigation} />
    </View>
  );
};

export default Home;
