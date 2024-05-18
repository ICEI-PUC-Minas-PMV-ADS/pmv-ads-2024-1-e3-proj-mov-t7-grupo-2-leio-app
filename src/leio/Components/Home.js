import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import Menu from "./Menu";
import styles from "../assets/styles/base";
import styleHome from "../assets/styles/home";

const Home = ({ navigation }) => {
  const redirectLogin = () => {
    navigation.navigate("Login"); // navegar para a tela desejada
  };

  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://www.googleapis.com/books/v1/volumes?q=react%20native"
      );
      const data = await response.json();
      setBooks(data.items);
    };

    fetchData();
  }, []);

  return (
    <View style={[styles.container, { flex: "initial" }]}>
      <View style={styleHome.containerName}>
        <Text style={styleHome.containerName}>Olá, Maria</Text>
        <TouchableOpacity onPress={redirectLogin}>
          <View>
            <Image source={require("../assets/img/logout.svg")} />
          </View>
        </TouchableOpacity>
      </View>
      <View style={styleHome.body}>
        {books.map((book, index) => (
          <View key={index} style={styles.book}>
            <Image
              style={styles.bookImg}
              source={{ uri: book.volumeInfo.imageLinks.thumbnail }}
            />
            <Text>{book.volumeInfo.title}</Text>
            <Text>{book.volumeInfo.authors.join(", ")}</Text>
          </View>
        ))}
      </View>
      <Menu navigation={navigation} />
    </View>
  );
};

export default Home;
