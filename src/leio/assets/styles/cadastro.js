import { StyleSheet } from "react-native";

const styleCadastro = StyleSheet.create({
  selectPhoto: {
    borderRadius: '50%',
    backgroundColor: "white",
    padding: 10,
    borderStyle: "solid",
    borderColor: "black",
  },
  buttonContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 24,
  },
  photo: {
    width: 200,
    height: 200,
    borderRadius: 100, // Deixa a imagem redonda
    backgroundColor: 'lightgray',
  },
  errorText: {
    color: "red",
    textAlign: "center",
    marginTop: 10,
  },
  successText: {
    color: "green",
    textAlign: "center",
    marginTop: 10,
  },
});

export default styleCadastro;