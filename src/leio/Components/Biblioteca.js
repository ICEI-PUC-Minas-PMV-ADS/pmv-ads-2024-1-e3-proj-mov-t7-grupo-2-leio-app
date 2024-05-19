import React, { useState } from "react";
import { View, Text } from "react-native";
import Menu from "./Menu";
import styles from "../assets/styles/base";
import styleBiblioteca from "../assets/styles/biblioteca";
import { Image, TextInput, ScrollView, TouchableOpacity } from "react-native";

const Biblioteca = () => {
  const [activeTab, setActiveTab] = useState("Estante");

  const books = [
    { id: "1", coverUrl: require("../assets/img/bookOne.svg") },
    { id: "2", coverUrl: require("../assets/img/bookOne.svg") },
    { id: "3", coverUrl: require("../assets/img/bookOne.svg") },
    { id: "4", coverUrl: require("../assets/img/bookTwo.svg") },
    { id: "5", coverUrl: require("../assets/img/bookTwo.svg") },
    { id: "6", coverUrl: require("../assets/img/bookTwo.svg") },
    { id: "7", coverUrl: require("../assets/img/bookOne.svg") },
    { id: "8", coverUrl: require("../assets/img/bookOne.svg") },
    { id: "9", coverUrl: require("../assets/img/bookOne.svg") },
    { id: "10", coverUrl: require("../assets/img/bookTwo.svg") },
    { id: "11", coverUrl: require("../assets/img/bookTwo.svg") },
    { id: "12", coverUrl: require("../assets/img/bookTwo.svg") },
  ];

  return (
    <View style={styles.container}>
      <View style={styleBiblioteca.containerInput}>
        <View style={styleBiblioteca.searchContainer}>
          <TextInput placeholder="O que você quer ler?" style={styles.input} />

          <TouchableOpacity
            onPress={() => {
              /* Função de busca */
            }}
          >
            <Image
              style={styleBiblioteca.searchIcon}
              source={require("../assets/img/search.svg")}
            />
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          onPress={() => {
            /* Função de filtro */
          }}
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
          onPress={() => setActiveTab("Estante")}
        >
          <Text style={styleBiblioteca.tabText}>Estante</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styleBiblioteca.tab,
            activeTab === "Biblioteca" && styleBiblioteca.activeTab,
          ]}
          onPress={() => setActiveTab("Biblioteca")}
        >
          <Text style={styleBiblioteca.tabText}>Biblioteca</Text>
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.bookContainer}>
        {books.map((book) => (
          <View key={book.id} style={styles.book}>
            <Image source={book.coverUrl} style={styles.bookImg} />
          </View>
        ))}
      </ScrollView>

      <Menu navigation={navigation} />
    </View>
  );
};

export default Biblioteca;
