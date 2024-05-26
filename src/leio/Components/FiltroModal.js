import React, { useState } from "react";
import { View, Text, TouchableOpacity, CheckBox, Modal as RNModal } from "react-native";
import styles from "../assets/styles/base";
import styleModal from "../assets/styles/modal";

// Mapa de tradução de português para inglês, o usuário lê em portugues e passamos ingles pra API
const translationMap = {
  "Ficção": "Fiction",
  "Não-Ficção": "Non-Fiction",
  "Romance": "Romance",
  "Mistério": "Mystery",
  "Fantasia": "Fantasy",
  "eBook": "eBook",
  "Audiobook": "Audiobook",
  "Capa Dura": "Hardcover",
  "Capa Mole": "Paperback",
};

const FiltroModal = ({ isVisible, onClose, onApply }) => {
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [selectedFormats, setSelectedFormats] = useState([]);

  const genres = ["Ficção", "Não-Ficção", "Romance", "Mistério", "Fantasia"];
  const formats = ["eBook", "Audiobook", "Capa Dura", "Capa Mole"];

  const handleGenreChange = (genre) => {
    setSelectedGenres((prev) =>
      prev.includes(genre) ? prev.filter((g) => g !== genre) : [...prev, genre]
    );
  };

  const handleFormatChange = (format) => {
    setSelectedFormats((prev) =>
      prev.includes(format) ? prev.filter((f) => f !== format) : [...prev, format]
    );
  };

  const applyFilters = () => {
    const translatedFilters = {
      genres: selectedGenres.map((genre) => translationMap[genre]),
      formats: selectedFormats.map((format) => translationMap[format]),
    };
    onApply(translatedFilters);
    onClose();
  };

  return (
    <RNModal
      animationType="none"
      transparent={true}
      visible={isVisible}
      onRequestClose={onClose}
    >
      <View style={styleModal.modalBackground}>
        <View style={styleModal.container}>
          <Text style={styleModal.headerText}>Filtros</Text>

          <Text style={styleModal.modalSubtitle}>Gêneros</Text>
          {genres.map((genre) => (
            <View key={genre} style={styleModal.checkboxContainer}>
              <CheckBox
                value={selectedGenres.includes(genre)}
                onValueChange={() => handleGenreChange(genre)}
              />
              <Text style={styleModal.checkboxLabel}>{genre}</Text>
            </View>
          ))}

          <Text style={styleModal.modalSubtitle}>Formatos</Text>
          {formats.map((format) => (
            <View key={format} style={styleModal.checkboxContainer}>
              <CheckBox
                value={selectedFormats.includes(format)}
                onValueChange={() => handleFormatChange(format)}
              />
              <Text style={styleModal.checkboxLabel}>{format}</Text>
            </View>
          ))}

          <TouchableOpacity onPress={applyFilters} style={styleModal.applyButton}>
            <Text style={styleModal.applyButtonText}>Aplicar Filtros</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={onClose} style={styleModal.closeButton}>
            <Text style={styleModal.closeButtonText}>Fechar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </RNModal>
  );
};

export default FiltroModal;
