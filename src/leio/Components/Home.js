import React, { useState, useEffect, useContext } from "react";
import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
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
  const [mysteryBooks, setMysteryBooks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedBooks = await fetchBooks("romance", 20, "relevance");
        setRomanceBooks(fetchedBooks);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedBooks = await fetchBooks("Mystery", 20, "relevance");
        setMysteryBooks(fetchedBooks);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedBooks = await fetchBooks("all", 20, "newest");
        setNewestBooks(fetchedBooks);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <ScrollView vertical contentContainerStyle={styles.container}>
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
            <ScrollView
              horizontal
              contentContainerStyle={[
                styles.bookContainer,
                styleHome.bookContainer,
              ]}
            >
              {romanceBooks.map((book) => (
                <TouchableOpacity
                  onPress={() => redirectInfo(book.id)}
                  key={book.id}
                  style={styles.book}
                >
                  {book.volumeInfo.imageLinks?.thumbnail ? (
                    <Image
                      style={styles.bookImg}
                      source={{ uri: book.volumeInfo.imageLinks?.thumbnail }}
                    />
                  ) : (
                    <Image
                      style={styles.bookImg}
                      source={require("../assets/img/no_photo.png")}
                    />
                  )}
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>

          <View style={styleHome.bodyContent}>
            <Text style={styleHome.text}>Sugestões de mistério</Text>
            <ScrollView
              horizontal
              contentContainerStyle={[
                styles.bookContainer,
                styleHome.bookContainer,
              ]}
            >
              {mysteryBooks.map((book) => (
                <TouchableOpacity
                  onPress={() => redirectInfo(book.id)}
                  key={book.id}
                  style={styles.book}
                >
                  {book.volumeInfo.imageLinks?.thumbnail ? (
                    <Image
                      style={styles.bookImg}
                      source={{ uri: book.volumeInfo.imageLinks?.thumbnail }}
                    />
                  ) : (
                    <Image
                      style={styles.bookImg}
                      source={require("../assets/img/no_photo.png")}
                    />
                  )}
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>

          <View style={styleHome.bodyContent}>
            <Text style={styleHome.text}>Adicionados recentemente</Text>
            <ScrollView
              horizontal
              contentContainerStyle={[
                styles.bookContainer,
                styleHome.bookContainer,
              ]}
            >
              {newestBooks.map((book) => (
                <TouchableOpacity
                  onPress={() => redirectInfo(book.id)}
                  key={book.id}
                  style={styles.book}
                >
                  {book.volumeInfo.imageLinks?.thumbnail ? (
                    <Image
                      style={styles.bookImg}
                      source={{ uri: book.volumeInfo.imageLinks?.thumbnail }}
                    />
                  ) : (
                    <Image
                      style={styles.bookImg}
                      source={require("../assets/img/no_photo.png")}
                    />
                  )}
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        </View>
      </ScrollView>
      <Menu navigation={navigation} />
    </>
  );
};

export default Home;
