import { StyleSheet } from "react-native";

const styleCadastro = StyleSheet.create({
  selectPhoto: {
    borderRadius: "50%",
    backgroundColor: "white",
    width: 168,
    height: 168,
    overflow: "hidden",
  },
  photo: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  selectPhotoText: {
    textAlign: "center",
    marginTop: 8,
  },
  buttonContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 24,
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
