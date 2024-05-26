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
    modalSubtitle: {
        fontSize: 18,
        marginBottom: 10,
    },
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5,
    },
    checkboxLabel: {
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
    applyButton: {
        backgroundColor: '#4285F4',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        marginTop: 10,
    },
    applyButtonText: {
        color: '#fff',
        fontSize: 16,
    },
    closeButton: {
        marginTop: 10,
        alignItems: 'center',
    },
    closeButtonText: {
        color: '#4285F4',
        fontSize: 16,
    },
    selected: {
        color: '#4285F4',
        fontWeight: 'bold',
        fontSize: 16,
        marginBottom: 5,
    },
    unselected: {
        fontSize: 16,
        marginBottom: 5,
    },
});

export default styleModal;
