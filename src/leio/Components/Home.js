//Importações gerais
import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import styles from "../assets/styles/base";
import styleHome from "../assets/styles/home";

const Home = () => {
  const redirectLogin = () => {
    navigation.navigate("Login"); // navegar para a tela desejada
  };

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
        <View style={styleHome.bodyContent}>
          <Text>Continue lendo</Text>
          <View style={styles.bookContainer}>
            <View style={styles.book}>
              <Image
                style={styles.bookImg}
                source={require("../assets/img/bookOne.svg")}
              />
            </View>
            <View style={styles.book}>
              <Image
                style={styles.bookImg}
                source={require("../assets/img/bookOne.svg")}
              />
            </View>
            <View style={styles.book}>
              <Image
                style={styles.bookImg}
                source={require("../assets/img/bookOne.svg")}
              />
            </View>
            <View style={styles.book}>
              <Image
                style={styles.bookImg}
                source={require("../assets/img/bookOne.svg")}
              />
            </View>
            <View style={styles.book}>
              <Image
                style={styles.bookImg}
                source={require("../assets/img/bookOne.svg")}
              />
            </View>
            <View style={styles.book}>
              <Image
                style={styles.bookImg}
                source={require("../assets/img/bookOne.svg")}
              />
            </View>
          </View>
        </View>

        <View style={styleHome.bodyContent}>
          <Text>Você também pode gostar</Text>
          <View style={styles.bookContainer}>
            <View style={styles.book}>
              <Image
                style={styles.bookImg}
                source={require("../assets/img/bookTwo.svg")}
              />
            </View>
            <View style={styles.book}>
              <Image
                style={styles.bookImg}
                source={require("../assets/img/bookTwo.svg")}
              />
            </View>
            <View style={styles.book}>
              <Image
                style={styles.bookImg}
                source={require("../assets/img/bookTwo.svg")}
              />
            </View>
            <View style={styles.book}>
              <Image
                style={styles.bookImg}
                source={require("../assets/img/bookTwo.svg")}
              />
            </View>
            <View style={styles.book}>
              <Image
                style={styles.bookImg}
                source={require("../assets/img/bookTwo.svg")}
              />
            </View>
            <View style={styles.book}>
              <Image
                style={styles.bookImg}
                source={require("../assets/img/bookTwo.svg")}
              />
            </View>
          </View>
        </View>

        <View style={styleHome.bodyContent}>
          <Text>Em alta</Text>
          <View style={styles.bookContainer}>
            <View style={styles.book}>
              <Image
                style={styles.bookImg}
                source={require("../assets/img/bookOne.svg")}
              />
            </View>
            <View style={styles.book}>
              <Image
                style={styles.bookImg}
                source={require("../assets/img/bookOne.svg")}
              />
            </View>
            <View style={styles.book}>
              <Image
                style={styles.bookImg}
                source={require("../assets/img/bookOne.svg")}
              />
            </View>
            <View style={styles.book}>
              <Image
                style={styles.bookImg}
                source={require("../assets/img/bookOne.svg")}
              />
            </View>
            <View style={styles.book}>
              <Image
                style={styles.bookImg}
                source={require("../assets/img/bookOne.svg")}
              />
            </View>
            <View style={styles.book}>
              <Image
                style={styles.bookImg}
                source={require("../assets/img/bookOne.svg")}
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Home;
