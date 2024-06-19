import React, { useState, useEffect } from "react";
import { View, Text, Image, TouchableOpacity, Linking } from "react-native";
import Menu from "./Menu";
import styles from "../assets/styles/base";
import styleInfo from "../assets/styles/info";
import Modal from "./Modal";
import { db, auth } from "../db/firebaseConfig"; // Importação correta do Firebase configurado
import { doc, setDoc } from "firebase/firestore"; // Importar as funções necessárias do Firestore

const Info = ({ navigation, route }) => {
  const [book, setBook] = useState(null);
  const [isFilterModalVisible, setFilterModalVisible] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const { bookId } = route.params;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://www.googleapis.com/books/v1/volumes/${bookId}`
        );
        const bookData = await response.json();
        //   console.log("Dados do livro:", bookData);
        setBook({
          ...bookData,
          volumeInfo: {
            ...bookData.volumeInfo,
            description: removeHtmlTags(bookData.volumeInfo.description),
          },
        });
      } catch (error) {
        console.error("Erro ao buscar dados do livro:", error);
      }
    };

    fetchData();
  }, [bookId]);

  const removeHtmlTags = (description) => {
    if (!description) return "";
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

  const handleIsFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  const adicionarLivroEstante = async (categoria) => {
    const usuario = auth.currentUser;
    if (!usuario) {
      console.error("Usuário não autenticado");
      return;
    }

    try {
      const livroData = {
        usuario_id: usuario.uid,
        livro_id: book.id, // Certifique-se de que book.id está correto
        categoria: categoria,
        timestamp: new Date(),
      };
      // console.log("Tentando adicionar livro:", livroData);

      // Cria um documento com um ID único baseado no usuário e no livro
      const docRef = doc(db, "estante", `${usuario.uid}_${book.id}`);
      await setDoc(docRef, livroData);
      // console.log("Livro adicionado à estante com sucesso!");
    } catch (error) {
      console.error("Erro ao adicionar livro à estante: ", error);
    }
  };

  if (!book || !book.volumeInfo) {
    return (
      <View style={[styles.container, styleInfo.loading]}>
        <Text style={styleInfo.loadingText}>Carregando...</Text>
      </View>
    );
  }

  const openExternalLinkPS = () => {
    Linking.openURL(book.volumeInfo.infoLink);
  };

  const openExternalLink = () => {
    Linking.openURL(book.volumeInfo.previewLink);
  };

  const openModal = () => {
    setFilterModalVisible(true);
  };

  const closeModal = () => {
    setFilterModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <View style={styleInfo.book}>
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
        <View style={styleInfo.btnsContainer}>
          <TouchableOpacity style={styleInfo.btn} onPress={openModal}>
            <Image source={require("../assets/img/save.svg")} />
          </TouchableOpacity>

          <TouchableOpacity onPress={handleIsFavorite} style={styleInfo.btn}>
            <Image
              source={
                isFavorite
                  ? require("../assets/img/favorite_full.svg")
                  : require("../assets/img/favorite_empty.svg")
              }
            />
          </TouchableOpacity>
        </View>
      </View>

      <Text style={styleInfo.bookName}>{book.volumeInfo.title}</Text>

      <Text style={styleInfo.author}>
        {book.volumeInfo.authors?.join(", ")}
      </Text>

      {book.volumeInfo.publisher ? (
        <Text style={styleInfo.author}>
          Editora: {book.volumeInfo.publisher}
        </Text>
      ) : null}

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

      <Modal
        isVisible={isFilterModalVisible}
        onClose={closeModal}
        onSelectCategory={adicionarLivroEstante}
        bookId={bookId}
      />
    </View>
  );
};

export default Info;
