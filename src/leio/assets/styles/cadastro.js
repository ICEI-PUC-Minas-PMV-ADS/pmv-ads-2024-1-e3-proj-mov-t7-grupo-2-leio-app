import { StyleSheet } from "react-native";

const styleCadastro = StyleSheet.create({
  selectPhoto: {
    borderRadius: '50%',
    backgroundColor: "white",
    padding: 50,
  },
  buttonContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 24,
  },
  photo: {
    width: 100,
    height: 100,
    objectFit: "cover",
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