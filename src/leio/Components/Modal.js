import React, { useState } from "react";
import { View, Text, Button, TouchableOpacity, Image } from 'react-native';
import styles from "../assets/styles/base";
import styleModal from "../assets/styles/modal";

const Modal = ({ navigation }) => {
    return (
        <View style={styleModal.container}>
            <Text style={styleModal.headerText}>Marcar como:</Text>

            <View style={styleModal.optionContainer}>
                <TouchableOpacity style={styleModal.option}>
                    <Image source={require('../assets/img/save1.svg')} style={styleModal.icon} />
                    <Text style={styleModal.optionText}>Lido</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styleModal.option}>
                    <Image source={require('../assets/img/save2.svg')} style={styleModal.icon} />
                    <Text style={styleModal.optionText}>Quero ler</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styleModal.option}>
                    <Image source={require('../assets/img/save3.svg')} style={styleModal.icon} />
                    <Text style={styleModal.optionText}>Relendo</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styleModal.option}>
                    <Image source={require('../assets/img/save4.svg')} style={styleModal.icon} />
                    <Text style={styleModal.optionText}>Abandonei</Text>
                </TouchableOpacity>
            </View>

            <View style={styleModal.ratingContainer}>
                {[1, 2, 3, 4, 5].map((index) => (
                    <TouchableOpacity key={index} onPress={() => console.log(`Pressed star ${index}`)}>
                        <Image source={require('../assets/img/star.svg')} style={styleModal.starIcon} />
                    </TouchableOpacity>
                ))}
            </View>

            <Button title="Close" onPress={() => navigation.goBack()} />
        </View>
    );
};

export default Modal;
