import { StyleSheet } from "react-native";

const styleModal = StyleSheet.create({
    modalBackground: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Cor escura semi-transparente para destacar o modal
        justifyContent: 'center', // Centraliza verticalmente
        alignItems: 'center', // Centraliza horizontalmente
    },
    container: {
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 10,
        width: '80%', // Largura do modal
        maxWidth: 300, // Largura máxima do modal
    },
    headerText: {
        fontSize: 20,
        marginBottom: 10,
        textAlign: 'center',
    },
    optionContainer: {
        marginBottom: 10,
    },
    option: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5,
    },
    icon: {
        width: 24,
        height: 24,
        marginRight: 8,
    },
    optionText: {
        fontSize: 16,
    },
    ratingContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 10,
    },
    starIcon: {
        width: 24,
        height: 24,
        marginHorizontal: 4,
    },
});

export default styleModal;
