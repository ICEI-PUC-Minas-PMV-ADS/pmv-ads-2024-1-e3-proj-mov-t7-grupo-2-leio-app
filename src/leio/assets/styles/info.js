import { StyleSheet } from "react-native";

const styleInfo = StyleSheet.create({
    // bookImg: {
    //     width: "100%",
    //     height: "100%",
    //     borderRadius: 12,
    //     justifyContent: 'center',
    //     alignItems: 'center',
    // },
    bookName: {
        fontSize: 20,
        textAlign: "center",
    },
    author: {
        fontSize: 15,
        textAlign: "center",
    },
    ratingContainer: {
        flexDirection: "row",
        justifyContent: "center",
    },
    summary: {
        // marginTop: 20,
        paddingHorizontal: 20,
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "center",
        marginTop: 20,
    },
    lerPreviaButton: {
        backgroundColor: "#8872DE",
        marginRight: 10,
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 12,
    },
    buscarEbookButton: {
        backgroundColor: "#7B9FE1",
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 12,
    },
    buttonText: {
        color: "white",
        fontSize: 14,
    },
});

export default styleInfo;
