import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import Menu from "./Menu";
import styles from "../assets/styles/base";
import styleInfo from "../assets/styles/info";

const Info = () => {
  return (
    <View style={styles.container}>
      <View style={styles.book}>
        <Image
          style={styles.bookImg}
          source={require("../assets/img/bookOne.svg")}
        />
      </View>

      {/* Nome do livro */}
      <Text style={styleInfo.bookName}>Nome do Livro</Text>

      {/* Autor */}
      <Text style={styleInfo.author}>Autor do Livro</Text>

      {/* Avaliação */}
      <View style={styleInfo.ratingContainer}>
        {[1, 2, 3, 4, 5].map((index) => (
          <TouchableOpacity
            key={index}
            onPress={() => console.log(`Pressed star ${index}`)}
            style={{ marginRight: 5 }} // Adiciona um pequeno espaçamento entre as estrelas
          >
            <Image
              source={require("../assets/img/star.svg")}
              style={styleInfo.starIcon}
            />
          </TouchableOpacity>
        ))}
      </View>

      {/* Resumo do livro */}
      <Text style={styleInfo.summary}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
        condimentum urna sed enim euismod hendrerit.
      </Text>

      {/* Botões */}
      <View style={styleInfo.buttonContainer}>
        <TouchableOpacity style={[styles.button, styleInfo.lerPreviaButton]}>
          <Text style={styles.buttonText}>Ler Prévia</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button, styleInfo.buscarEbookButton]}>
          <Text style={styles.buttonText}>Buscar E-book</Text>
        </TouchableOpacity>
      </View>

      <Menu navigation={navigation} />
    </View>
  );
};

export default Info;
