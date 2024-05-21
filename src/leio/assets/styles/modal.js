import { StyleSheet } from "react-native";

const styleModal = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#fff',
    },
    headerText: {
        fontSize: 20,
        marginBottom: 16,
    },
    optionContainer: {
        width: '100%',
        marginBottom: 16,
    },
    option: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 8,
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
        marginBottom: 16,
    },
    starIcon: {
        width: 24,
        height: 24,
        marginHorizontal: 4,
    },
});

export default styleModal;
