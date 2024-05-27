import React, { useState } from "react";
import {
  View,
  Text,
  Button,
  TouchableOpacity,
  Image,
  Modal as RNModal,
} from "react-native";
import styleModal from "../assets/styles/modal";

const Modal = ({ isVisible, onClose }) => {
  const [image1, setImage1] = useState(require("../assets/img/save1-1.svg"));
  const [image2, setImage2] = useState(require("../assets/img/save2-2.svg"));
  const [image3, setImage3] = useState(require("../assets/img/save3-3.svg"));
  const [image4, setImage4] = useState(require("../assets/img/save4-4.svg"));
  const [rating, setRating] = useState(0);

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

  const toggleImage1 = () => {
    setImage1((prevImage) =>
      prevImage === require("../assets/img/save1-1.svg")
        ? require("../assets/img/save1.svg")
        : require("../assets/img/save1-1.svg")
    );
    setImage2(require("../assets/img/save2-2.svg"));
    setImage3(require("../assets/img/save3-3.svg"));
    setImage4(require("../assets/img/save4-4.svg"));
  };

  const toggleImage2 = () => {
    setImage2((prevImage) =>
      prevImage === require("../assets/img/save2-2.svg")
        ? require("../assets/img/save2.svg")
        : require("../assets/img/save2-2.svg")
    );
    setImage1(require("../assets/img/save1-1.svg"));
    setImage3(require("../assets/img/save3-3.svg"));
    setImage4(require("../assets/img/save4-4.svg"));
  };

  const toggleImage3 = () => {
    setImage3((prevImage) =>
      prevImage === require("../assets/img/save3-3.svg")
        ? require("../assets/img/save3.svg")
        : require("../assets/img/save3-3.svg")
    );
    setImage1(require("../assets/img/save1-1.svg"));
    setImage2(require("../assets/img/save2-2.svg"));
    setImage4(require("../assets/img/save4-4.svg"));
  };

  const toggleImage4 = () => {
    setImage4((prevImage) =>
      prevImage === require("../assets/img/save4-4.svg")
        ? require("../assets/img/save4.svg")
        : require("../assets/img/save4-4.svg")
    );
    setImage1(require("../assets/img/save1-1.svg"));
    setImage2(require("../assets/img/save2-2.svg"));
    setImage3(require("../assets/img/save3-3.svg"));
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
            <TouchableOpacity style={styleModal.option} onPress={toggleImage1}>
              <Image source={image1} style={styleModal.icon} />
              <Text style={styleModal.optionText}>Lido</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styleModal.option} onPress={toggleImage2}>
              <Image source={image2} style={styleModal.icon} />
              <Text style={styleModal.optionText}>Quero ler</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styleModal.option} onPress={toggleImage3}>
              <Image source={image3} style={styleModal.icon} />
              <Text style={styleModal.optionText}>Relendo</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styleModal.option} onPress={toggleImage4}>
              <Image source={image4} style={styleModal.icon} />
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
