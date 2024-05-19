import React, { useState } from "react";
import { View, Text, TextInput, Image, TouchableOpacity } from "react-native";
import Menu from "./Menu";
import styles from "../assets/styles/base";
import stylePesquisa from "../assets/styles/resultadoPesquisa";

const ResultadoPesquisa = () => {
  const [pesquisa, setPesquisa] = useState("");

  return (
    <View style={styles.container}>
      <View
        style={[styles.inputContainer, { justifyContent: "space-between" }]}
      >
        <TextInput
          placeholder="O que você quer ler?"
          value={pesquisa}
          onChangeText={(text) => setPesquisa(text)}
        />
        <View style={stylePesquisa.icons}>
          <TouchableOpacity onPress={() => console.log("Research")}>
            <Image source={require("../assets/img/search.svg")} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => console.log("Filter")}>
            <Image source={require("../assets/img/filter.svg")} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.bookContainer}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image
            source={require("../assets/img/bookOne.svg")}
            style={{ width: 100, height: 150 }}
          />
          <View style={{ marginLeft: 10, marginTop: -20, marginBottom: -30 }}>
            <Text>Amor & gelato</Text>
            <Text>Jenna Evans Welch</Text>

            <View style={{ flexDirection: "row", marginTop: 45 }}>
              {[1, 2, 3, 4, 5].map((index) => (
                <TouchableOpacity
                  key={index}
                  onPress={() => console.log(`Pressed star ${index}`)}
                >
                  <Image
                    source={require("../assets/img/star.svg")}
                    style={{ width: 10, height: 15, marginRight: 5 }}
                  />
                </TouchableOpacity>
              ))}
            </View>

            <View style={{ flexDirection: "row", marginTop: 25 }}>
              {/* Botões */}
              <TouchableOpacity onPress={() => console.log("Info")}>
                <Image
                  source={require("../assets/img/info.svg")}
                  style={{ width: 10, height: 15, marginRight: 20 }}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => console.log("Download")}>
                <Image
                  source={require("../assets/img/download.svg")}
                  style={{ width: 10, height: 15, marginRight: 20 }}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => console.log("Favorite")}>
                <Image
                  source={require("../assets/img/favorite.svg")}
                  style={{ width: 10, height: 15 }}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image
            source={require("../assets/img/bookTwo.svg")}
            style={{ width: 100, height: 150 }}
          />
          <View style={{ marginLeft: 10, marginTop: -20, marginBottom: -30 }}>
            <Text>Amor & gelato</Text>
            <Text>Jenna Evans Welch</Text>

            <View style={{ flexDirection: "row", marginTop: 45 }}>
              {[1, 2, 3, 4, 5].map((index) => (
                <TouchableOpacity
                  key={index}
                  onPress={() => console.log(`Pressed star ${index}`)}
                >
                  <Image
                    source={require("../assets/img/star.svg")}
                    style={{ width: 10, height: 15, marginRight: 5 }}
                  />
                </TouchableOpacity>
              ))}
            </View>

            <View style={{ flexDirection: "row", marginTop: 25 }}>
              {/* Botões */}
              <TouchableOpacity onPress={() => console.log("Info")}>
                <Image
                  source={require("../assets/img/info.svg")}
                  style={{ width: 10, height: 15, marginRight: 20 }}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => console.log("Download")}>
                <Image
                  source={require("../assets/img/download.svg")}
                  style={{ width: 10, height: 15, marginRight: 20 }}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => console.log("Favorite")}>
                <Image
                  source={require("../assets/img/favorite.svg")}
                  style={{ width: 10, height: 15 }}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image
            source={require("../assets/img/bookOne.svg")}
            style={{ width: 100, height: 150 }}
          />
          <View style={{ marginLeft: 10, marginTop: -20, marginBottom: -30 }}>
            <Text>Amor & gelato</Text>
            <Text>Jenna Evans Welch</Text>

            <View style={{ flexDirection: "row", marginTop: 45 }}>
              {[1, 2, 3, 4, 5].map((index) => (
                <TouchableOpacity
                  key={index}
                  onPress={() => console.log(`Pressed star ${index}`)}
                >
                  <Image
                    source={require("../assets/img/star.svg")}
                    style={{ width: 10, height: 15, marginRight: 5 }}
                  />
                </TouchableOpacity>
              ))}
            </View>

            <View style={{ flexDirection: "row", marginTop: 25 }}>
              {/* Botões */}
              <TouchableOpacity onPress={() => console.log("Info")}>
                <Image
                  source={require("../assets/img/info.svg")}
                  style={{ width: 10, height: 15, marginRight: 20 }}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => console.log("Download")}>
                <Image
                  source={require("../assets/img/download.svg")}
                  style={{ width: 10, height: 15, marginRight: 20 }}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => console.log("Favorite")}>
                <Image
                  source={require("../assets/img/favorite.svg")}
                  style={{ width: 10, height: 15 }}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image
            source={require("../assets/img/bookTwo.svg")}
            style={{ width: 100, height: 150 }}
          />
          <View style={{ marginLeft: 10, marginTop: -20, marginBottom: -30 }}>
            <Text>Amor & gelato</Text>
            <Text>Jenna Evans Welch</Text>

            <View style={{ flexDirection: "row", marginTop: 45 }}>
              {[1, 2, 3, 4, 5].map((index) => (
                <TouchableOpacity
                  key={index}
                  onPress={() => console.log(`Pressed star ${index}`)}
                >
                  <Image
                    source={require("../assets/img/star.svg")}
                    style={{ width: 10, height: 15, marginRight: 5 }}
                  />
                </TouchableOpacity>
              ))}
            </View>

            <View style={{ flexDirection: "row", marginTop: 25 }}>
              {/* Botões */}
              <TouchableOpacity onPress={() => console.log("Info")}>
                <Image
                  source={require("../assets/img/info.svg")}
                  style={{ width: 10, height: 15, marginRight: 20 }}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => console.log("Download")}>
                <Image
                  source={require("../assets/img/download.svg")}
                  style={{ width: 10, height: 15, marginRight: 20 }}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => console.log("Favorite")}>
                <Image
                  source={require("../assets/img/favorite.svg")}
                  style={{ width: 10, height: 15 }}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
      <Menu navigation={navigation} />
    </View>
  );
};

export default ResultadoPesquisa;
