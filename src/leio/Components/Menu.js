import React from "react";
import { View, Image, TouchableOpacity } from "react-native";
import styles from "../assets/styles/base";

const Menu = ({ navigation }) => {
  const navigateToScreen = (screenName) => {
    navigation.navigate(screenName);
  };

  return (
    <View style={styles.menuContainer}>

      <TouchableOpacity
        style={styles.menuItem}
        onPress={() => navigateToScreen("Home")}
      >
        <Image
          style={styles.menuIcon}
          source={require("../assets/img/home.svg")}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.menuItem}
        onPress={() => navigateToScreen("Pesquisa")}
      >
        <Image
          style={styles.menuIcon}
          source={require("../assets/img/search.svg")}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.menuItem}
        onPress={() => navigateToScreen("Biblioteca")}
      >
        <Image
          style={styles.menuIcon}
          source={require("../assets/img/book.svg")}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.menuItem}
        onPress={() => navigateToScreen("Perfil")}
      >
        <Image
          style={styles.menuIcon}
          source={require("../assets/img/user.svg")}
        />
      </TouchableOpacity>

    </View>
  );
};

export default Menu;
