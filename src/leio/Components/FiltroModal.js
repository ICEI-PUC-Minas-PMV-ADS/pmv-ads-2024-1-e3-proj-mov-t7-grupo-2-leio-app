import React, { useState } from "react";
import { View, Text, TouchableOpacity, CheckBox } from "react-native";
import Modal from "react-native-modal";
import styles from "../assets/styles/base";

const FiltroModal = ({ isVisible, onClose, onApply }) => {
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [selectedRating, setSelectedRating] = useState(null);
  const [selectedFormat, setSelectedFormat] = useState(null);

  const genres = ["Ficção", "Não-Ficção", "Romance", "Mistério", "Fantasia"];
  const ratings = [5, 4, 3, 2, 1];
  const formats = ["eBook", "Audiobook", "Capa Dura", "Capa Mole"];

  const handleGenreChange = (genre) => {
    setSelectedGenres((prev) =>
      prev.includes(genre) ? prev.filter((g) => g !== genre) : [...prev, genre]
    );
  };

  const applyFilters = () => {
    onApply({ genres: selectedGenres, rating: selectedRating, format: selectedFormat });
    onClose();
  };

  return (
    <Modal isVisible={isVisible} onBackdropPress={onClose}>
      <View style={styles.modalContainer}>
        <Text style={styles.modalTitle}>Filtros</Text>
        
        <Text style={styles.modalSubtitle}>Gêneros</Text>
        {genres.map((genre) => (
          <View key={genre} style={styles.checkboxContainer}>
            <CheckBox
              value={selectedGenres.includes(genre)}
              onValueChange={() => handleGenreChange(genre)}
            />
            <Text style={styles.checkboxLabel}>{genre}</Text>
          </View>
        ))}

        <Text style={styles.modalSubtitle}>Avaliação</Text>
        {ratings.map((rating) => (
          <TouchableOpacity key={rating} onPress={() => setSelectedRating(rating)}>
            <Text style={selectedRating === rating ? styles.selected : styles.unselected}>
              {rating} Estrelas
            </Text>
          </TouchableOpacity>
        ))}

        <Text style={styles.modalSubtitle}>Formato</Text>
        {formats.map((format) => (
          <TouchableOpacity key={format} onPress={() => setSelectedFormat(format)}>
            <Text style={selectedFormat === format ? styles.selected : styles.unselected}>
              {format}
            </Text>
          </TouchableOpacity>
        ))}

        <TouchableOpacity onPress={applyFilters} style={styles.applyButton}>
          <Text style={styles.applyButtonText}>Aplicar Filtros</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

export default FiltroModal;
