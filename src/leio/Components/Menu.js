import React, { useEffect, useState } from "react";
import { View, Image, TouchableOpacity } from "react-native";
import styles from "../assets/styles/base";
import {
  useNavigation,
  useIsFocused,
  useNavigationState,
} from "@react-navigation/native";

const Menu = () => {
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const [activeScreen, setActiveScreen] = useState("Home");

  const navigateToScreen = (screenName) => {
    setActiveScreen(screenName);
    navigation.navigate(screenName);
  };

  const currentRouteName = useNavigationState((state) => {
    const route = state.routes[state.index];
    return route.name;
  });

  useEffect(() => {
    if (isFocused) {
      setActiveScreen(currentRouteName);
    }
  }, [isFocused, currentRouteName]);

  const getMenuItemStyle = (screenName) => {
    return activeScreen === screenName ? styles.menuItemAtivo : {};
  };

  const getMenuIconStyle = (screenName) => {
    return activeScreen === screenName ? styles.menuIconAtivo : {};
  };

  return (
    <View style={styles.menuContainer}>
      <TouchableOpacity
        style={[styles.menuItem, getMenuItemStyle("Home")]}
        onPress={() => navigateToScreen("Home")}
      >
        <Image
          style={[styles.menuIcon, getMenuIconStyle("Home")]}
          source={require("../assets/img/home.svg")}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.menuItem, getMenuItemStyle("Pesquisa")]}
        onPress={() => navigateToScreen("Pesquisa")}
      >
        <Image
          style={[styles.menuIcon, getMenuIconStyle("Pesquisa")]}
          source={require("../assets/img/search.svg")}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.menuItem, getMenuItemStyle("Biblioteca")]}
        onPress={() => navigateToScreen("Biblioteca")}
      >
        <Image
          style={[styles.menuIcon, getMenuIconStyle("Biblioteca")]}
          source={require("../assets/img/book.svg")}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.menuItem, getMenuItemStyle("Perfil")]}
        onPress={() => navigateToScreen("Perfil")}
      >
        <Image
          style={[styles.menuIcon, getMenuIconStyle("Perfil")]}
          source={require("../assets/img/user.svg")}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Menu;
