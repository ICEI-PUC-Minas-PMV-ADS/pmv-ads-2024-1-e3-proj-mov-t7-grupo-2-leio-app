import React, { useState, useEffect } from "react";
import { View, Text, Image, TouchableOpacity, Linking } from "react-native";
import Menu from "./Menu";
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

  const renderAverageRatingStars = (averageRating) => {
    if (averageRating === undefined) return null;

    const starIcons = [1, 2, 3, 4, 5].map((index) => {
      if (averageRating >= index) {
        return require("../assets/img/star_full.svg");
      } else if (averageRating >= index - 0.5) {
        return require("../assets/img/star_half.svg");
      } else {
        return require("../assets/img/star_empty.svg");
      }
    });

    return (
      <View style={styleInfo.ratingContainer}>
        {starIcons.map((icon, index) => (
          <Image key={index} source={icon} style={styleInfo.starIcon} />
        ))}
      </View>
    );
  };

  if (!book || !book.volumeInfo) {
    return (
      <View style={[styles.container, styleInfo.loading]}>
        <Text style={styleInfo.loadingText}>Loading...</Text>
      </View>
    );
  }

  const openExternalLinkPS = () => {
    Linking.openURL(book.volumeInfo.infoLink);
  };

  const openExternalLink = () => {
    Linking.openURL(book.volumeInfo.previewLink);
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

      {renderAverageRatingStars(book.volumeInfo.averageRating)}

      <Text style={styleInfo.summary}>{book.volumeInfo.description}</Text>

      <View style={styleInfo.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, styleInfo.lerPreviaButton]}
          onPress={openExternalLinkPS}
        >
          <Text style={styles.buttonText}>Comprar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, styleInfo.buscarEbookButton]}
          onPress={openExternalLink}
        >
          <Text style={styles.buttonText}>Ler prévia</Text>
        </TouchableOpacity>
      </View>

      <Menu navigation={navigation} />
    </View>
  );
};

export default Info;
