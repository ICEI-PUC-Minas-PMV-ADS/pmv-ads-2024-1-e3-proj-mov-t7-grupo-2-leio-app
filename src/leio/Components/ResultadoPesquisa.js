import React, { useState, useEffect } from "react";
import {
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  Linking,
} from "react-native";
import Menu from "./Menu";
import styles from "../assets/styles/base";
import styleResPesquisa from "../assets/styles/resultadoPesquisa";

const ResultadoPesquisa = ({ navigation, route }) => {
  const { searchTerm } = route.params;
  const [resultados, setResultados] = useState([]);
  const [searchQuery, setSearchQuery] = useState(searchTerm);

  const openExternalLinkPS = (book) => {
    Linking.openURL(book.volumeInfo.infoLink);
  };

  const openExternalLink = (book) => {
    Linking.openURL(book.volumeInfo.previewLink);
  };

  const redirectInfo = (bookId) => {
    navigation.navigate("Info", { bookId });
  };

  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${searchQuery}`
      );
      const data = await response.json();
      setResultados(data.items || []);
    } catch (error) {
      console.error("Error fetching book data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [searchQuery]);

  const renderStars = (averageRating) => {
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
      <View style={styleResPesquisa.iconStars}>
        {starIcons.map((icon, index) => (
          <Image key={index} source={icon} style={styleResPesquisa.icon} />
        ))}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Digite sua pesquisa aqui"
          value={searchQuery}
          onChangeText={(text) => setSearchQuery(text)}
        />
        <TouchableOpacity onPress={fetchData}>
          <Image
            source={require("../assets/img/search.svg")}
            style={styleResPesquisa.icon}
          />
        </TouchableOpacity>
      </View>

      <ScrollView vertical>
        <View style={styles.bookContainer}>
          {resultados.map((book) => (
            <View style={styleResPesquisa.bookContent} key={book.id}>
              <TouchableOpacity
                onPress={() => redirectInfo(book.id)}
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
              <View style={styleResPesquisa.bookInfos}>
                <View style={styleResPesquisa.bookDiv}>
                  <Text style={styleResPesquisa.title}>
                    {book.volumeInfo.title}
                  </Text>
                  <Text style={styleResPesquisa.author}>
                    {book.volumeInfo.authors?.join(", ")}
                  </Text>
                </View>
                <View style={styleResPesquisa.bookDiv}>
                  {renderStars(book.volumeInfo.averageRating)}
                  <View style={styleResPesquisa.icons}>
                    <TouchableOpacity onPress={() => redirectInfo(book.id)}>
                      <Image
                        source={require("../assets/img/info.svg")}
                        style={styleResPesquisa.icon}
                      />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => openExternalLink(book)}>
                      <Image
                        source={require("../assets/img/download.svg")}
                        style={styleResPesquisa.icon}
                      />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => openExternalLinkPS(book)}>
                      <Image
                        source={require("../assets/img/money.svg")}
                        style={styleResPesquisa.icon}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
      <Menu navigation={navigation} />
    </View>
  );
};

export default ResultadoPesquisa;
