import React, { useState, useEffect } from "react";
import {
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";
import styles from "../assets/styles/base";
import resultadoPesquisa from "../assets/styles/resultadoPesquisa";
import Menu from "./Menu";
import styleBiblioteca from "../assets/styles/biblioteca";

const ResultadoPesquisa = ({ route }) => {
  const { searchTerm } = route.params;
  const [resultados, setResultados] = useState([]);
  const [searchQuery, setSearchQuery] = useState(searchTerm);

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

  return (
    <View style={[styles.container, { justifyContent: "center" }]}>
      <View style={{ flex: 1, padding: 20 }}>

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
              style={{ width: 20, height: 20, marginLeft: 10 }}
            />
          </TouchableOpacity>
        </View>

        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
            justifyContent: "center",
            marginTop: 20,
          }}
        >
          <View style={styles.bookContainer}>
            {resultados.map((book, index) => (
              <View
                key={index}
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginBottom: 20,
                }}
              >
                {book.volumeInfo.imageLinks?.thumbnail && (
                  <Image
                    source={{ uri: book.volumeInfo.imageLinks.thumbnail }}
                    style={{ width: 100, height: 150 }}
                  />
                )}
                <View style={{ marginLeft: 10 }}>
                  <Text>{book.volumeInfo.title}</Text>
                  <Text>{book.volumeInfo.authors?.join(", ")}</Text>
                  <View style={{ flexDirection: "row", marginTop: 10 }}>
                    {[1, 2, 3, 4, 5].map((starIndex) => (
                      <TouchableOpacity
                        key={starIndex}
                        onPress={() => console.log(`Pressed star ${starIndex}`)}
                      >
                        <Image
                          source={require("../assets/img/star.svg")}
                          style={{ width: 20, height: 20, marginRight: 5 }}
                        />
                      </TouchableOpacity>
                    ))}
                  </View>
                  <View style={{ flexDirection: "row", marginTop: 10 }}>
                    <TouchableOpacity onPress={() => console.log("Info")}>
                      <Image
                        source={require("../assets/img/info.svg")}
                        style={{ width: 20, height: 20, marginRight: 20 }}
                      />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => console.log("Download")}>
                      <Image
                        source={require("../assets/img/download.svg")}
                        style={{ width: 20, height: 20, marginRight: 20 }}
                      />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => console.log("Favorite")}>
                      <Image
                        source={require("../assets/img/favorite.svg")}
                        style={{ width: 20, height: 20 }}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            ))}
          </View>
        </ScrollView>
        <Menu /> 
      </View>
    </View>
  
  );
};

export default ResultadoPesquisa;
