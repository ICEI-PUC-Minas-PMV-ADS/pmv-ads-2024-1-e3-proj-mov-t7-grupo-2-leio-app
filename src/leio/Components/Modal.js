import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Modal as RNModal,
} from "react-native";
import styleModal from "../assets/styles/modal";

const Modal = ({ isVisible, onClose, onSelectCategory, category }) => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [rating, setRating] = useState(0);

  useEffect(() => {
    setSelectedCategory(category || "");
  }, [category]);

  const handleStarPress = (index) => {
    setRating(index);
  };

  const renderStars = () => {
    const starIcons = [];
    for (let i = 1; i <= 5; i++) {
      const iconSource =
        i <= rating
          ? require("../assets/img/star_full.svg")
          : require("../assets/img/star_empty.svg");
      starIcons.push(
        <TouchableOpacity key={i} onPress={() => handleStarPress(i)}>
          <Image source={iconSource} style={styleModal.starIcon} />
        </TouchableOpacity>
      );
    }
    return starIcons;
  };

  const selectCategory = (category) => {
    setSelectedCategory(category);
    onSelectCategory(category);
  };

  const getImageSource = (category) => {
    switch (category) {
      case "Lido":
        return selectedCategory === "Lido"
          ? require("../assets/img/save1.svg")
          : require("../assets/img/save1-1.svg");
      case "Lendo":
        return selectedCategory === "Lendo"
          ? require("../assets/img/save5.svg")
          : require("../assets/img/save5-5.svg");
      case "Quero ler":
        return selectedCategory === "Quero ler"
          ? require("../assets/img/save2.svg")
          : require("../assets/img/save2-2.svg");
      case "Relendo":
        return selectedCategory === "Relendo"
          ? require("../assets/img/save3.svg")
          : require("../assets/img/save3-3.svg");
      case "Abandonei":
        return selectedCategory === "Abandonei"
          ? require("../assets/img/save4.svg")
          : require("../assets/img/save4-4.svg");
      default:
        return null;
    }
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
          <Text style={styleModal.headerText}>Marcar como:</Text>

          <View style={styleModal.optionContainer}>
            <TouchableOpacity
              style={styleModal.option}
              onPress={() => selectCategory("Lido")}
            >
              <Image source={getImageSource("Lido")} style={styleModal.icon} />
              <Text style={styleModal.optionText}>Lido</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styleModal.option}
              onPress={() => selectCategory("Lendo")}
            >
              <Image source={getImageSource("Lendo")} style={styleModal.icon} />
              <Text style={styleModal.optionText}>Lendo</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styleModal.option}
              onPress={() => selectCategory("Quero ler")}
            >
              <Image
                source={getImageSource("Quero ler")}
                style={styleModal.icon}
              />
              <Text style={styleModal.optionText}>Quero ler</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styleModal.option}
              onPress={() => selectCategory("Relendo")}
            >
              <Image
                source={getImageSource("Relendo")}
                style={styleModal.icon}
              />
              <Text style={styleModal.optionText}>Relendo</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styleModal.option}
              onPress={() => selectCategory("Abandonei")}
            >
              <Image
                source={getImageSource("Abandonei")}
                style={styleModal.icon}
              />
              <Text style={styleModal.optionText}>Abandonei</Text>
            </TouchableOpacity>
          </View>

          <View style={styleModal.ratingContainer}>{renderStars()}</View>

          <TouchableOpacity onPress={onClose} style={styleModal.closeButton}>
            <Text style={styleModal.closeButtonText}>X</Text>
          </TouchableOpacity>
        </View>
      </View>
    </RNModal>
  );
};

export default Modal;
