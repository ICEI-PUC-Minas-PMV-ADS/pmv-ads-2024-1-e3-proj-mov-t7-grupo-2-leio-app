import React, { useState, useEffect } from "react";
import { View, Text, Image, TouchableOpacity, Linking } from "react-native";
import Menu from "./Menu";
import styles from "../assets/styles/base";
import styleInfo from "../assets/styles/info";

const Info = ({ navigation, route }) => {
  const [book, setBook] = useState(null);
  const [rating, setRating] = useState(0); // Estado para armazenar a avaliação

  const { bookId } = route.params;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://www.googleapis.com/books/v1/volumes/${bookId}`
        );
        const bookData = await response.json();
        setBook({
          ...bookData,
          volumeInfo: {
            ...bookData.volumeInfo,
            description: removeHtmlTags(bookData.volumeInfo.description),
          },
        });
        console.log(bookData);
      } catch (error) {
        console.error("Error fetching book data:", error);
      }
    };

    fetchData();
  }, [bookId]);

  const removeHtmlTags = (description) => {
    if (!description) return "";

    // Expressão regular para remover as tags HTML
    return description.replace(/<[^>]*>?/gm, "");
  };

  const handleStarClick = (index) => {
    setRating(index === rating ? 0 : index); // Altera a avaliação se clicar na mesma estrela duas vezes
  };

  const renderStarIcon = (index) => {
    if (index <= rating) {
      return require("../assets/img/star.svg"); // Se a estrela estiver selecionada
    } else {
      return require("../assets/img/star1.svg"); // Se a estrela não estiver selecionada
    }
  };

  if (!book || !book.volumeInfo) {
    return (
      <View style={[styles.container, styleInfo.loading]}>
        <Text style={styleInfo.loadingText}>Loading...</Text>
      </View>
    );
  }

  const openExternalLink = () => {
    Linking.openURL(book.volumeInfo.infoLink);
  };

  return (
    <View style={styles.container}>
      <View style={styleInfo.book}>
        <Image
          style={styles.bookImg}
          source={{ uri: book.volumeInfo.imageLinks?.thumbnail }}
        />
        <View style={styleInfo.btnsContainer}>
          <TouchableOpacity
            style={styleInfo.btn}
            onPress={() => navigation.navigate("Modal")}
          >
            <Image source={require("../assets/img/save.svg")} />
          </TouchableOpacity>

          <TouchableOpacity style={styleInfo.btn}>
            <Image source={require("../assets/img/favorite.svg")} />
          </TouchableOpacity>
        </View>
      </View>

      <Text style={styleInfo.bookName}>{book.volumeInfo.title}</Text>

      <Text style={styleInfo.author}>
        {book.volumeInfo.authors?.join(", ")}
      </Text>

      <View style={styleInfo.ratingContainer}>
        {[1, 2, 3, 4, 5].map((index) => (
          <TouchableOpacity
            key={index}
            onPress={() => handleStarClick(index)} // Chama a função ao clicar em uma estrela
          >
            <Image
              source={renderStarIcon(index)} // Renderiza o ícone da estrela com base no estado de avaliação
              style={styleInfo.starIcon}
            />
          </TouchableOpacity>
        ))}
      </View>

      <Text style={styleInfo.summary}>{book.volumeInfo.description}</Text>

      <View style={styleInfo.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, styleInfo.lerPreviaButton]}
          onPress={openExternalLink}
        >
          <Text style={styles.buttonText}>Comprar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button, styleInfo.buscarEbookButton]}>
          <Text style={styles.buttonText}>Download</Text>
        </TouchableOpacity>
      </View>

      <Menu navigation={navigation} />
    </View>
  );
};

export default Info;
