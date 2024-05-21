import React, { useState, useEffect } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import Menu from "./Menu";
// import { fetchBooks } from "../api/api";
import styles from "../assets/styles/base";
import styleInfo from "../assets/styles/info";

const Info = ({ navigation, route }) => {
  const [book, setBook] = useState(null);
  const { bookId } = route.params;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://www.googleapis.com/books/v1/volumes/${bookId}`
        );
        const bookData = await response.json();
        setBook(bookData);
        console.log(bookData);
      } catch (error) {
        console.error("Error fetching book data:", error);
      }
    };

    fetchData();
  }, [bookId]);

  if (!book || !book.volumeInfo) {
    return <Text>Loading...</Text>;
  }

  return (
    <View style={[styles.container, { position: "relative" }]}>
      <View style={styleInfo.book}>
        <Image
          style={styles.bookImg}
          source={{ uri: book.volumeInfo.imageLinks?.thumbnail }}
        />
        <View style={styleInfo.btnsContainer}>
          <TouchableOpacity>
            <Image source={require("../assets/img/favorite.svg")} />
          </TouchableOpacity>

          <TouchableOpacity>
            <Image source={require("../assets/img/share.svg")} />
          </TouchableOpacity>
        </View>
      </View>


      <View style={[{ position: "absolute" }]}>
        <TouchableOpacity onPress={() => navigation.navigate('Modal')}>
          <Image source={require("../assets/img/save.svg")} />
        </TouchableOpacity>
      </View>


      <Text style={styleInfo.bookName}>{book.volumeInfo.title}</Text>

      <Text style={styleInfo.author}>
        {book.volumeInfo.authors?.join(", ")}
      </Text>

      <View style={styleInfo.ratingContainer}>
        {[1, 2, 3, 4, 5].map((index) => (
          <TouchableOpacity
            key={index}
            onPress={() => console.log(`Pressed star ${index}`)}
          >
            <Image
              source={require("../assets/img/star.svg")}
              style={styleInfo.starIcon}
            />
          </TouchableOpacity>
        ))}
      </View>



      <Text style={styleInfo.summary}>{book.volumeInfo.description}</Text>

      <View style={styleInfo.buttonContainer}>
        <TouchableOpacity style={[styles.button, styleInfo.lerPreviaButton]}>
          <Text style={styles.buttonText}>Ler prévia</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button, styleInfo.buscarEbookButton]}>
          <Text style={styles.buttonText}>Buscar e-book</Text>
        </TouchableOpacity>
      </View>

      <Menu navigation={navigation} />
    </View>
  );
};

export default Info;
