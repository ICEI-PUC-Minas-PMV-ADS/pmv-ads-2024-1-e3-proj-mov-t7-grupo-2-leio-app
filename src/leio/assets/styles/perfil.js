import { StyleSheet } from "react-native";

const stylePerfil = StyleSheet.create({
  selectPhoto: {
    borderRadius: "50%",
    backgroundColor: "white",
    overflow: "hidden",
    objectFit: "cover",
    width: "100%",
    maxWidth: 168,
    height: "100%",
    maxHeight: 168,
  },
  buttonContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 24,
  },
  photo: {
    height: "100%",
  },
});

export default stylePerfil;
