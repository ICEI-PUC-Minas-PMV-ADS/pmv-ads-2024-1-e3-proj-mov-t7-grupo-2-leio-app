import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  //Estilos gerais
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 40,
    gap: 16,
    backgroundColor: "#F4F3FF",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
    gap: 12,
    width: "100%",
    maxWidth: 500,
    backgroundColor: "white",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "transparent",
  },
  button: {
    color: "white",
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 24,
  },
  buttonText: {
    color: "white",
    fontSize: 14,
  },
  bookContainer: {
    gap: 16,
    width: "100%",
    flexWrap: "wrap",
    flexDirection: "row",
  },
  book: {
    width: 95,
    height: 144,
  },
  bookImg: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: 12,
  },
});

export default styles;