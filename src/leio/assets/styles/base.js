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
  input: {
    width: "100%",
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
  menuContainer: {
    position: "fixed",
    width: "100%",
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 16,
    bottom: 0,
    left: 0,
    right: 0,
    paddingHorizontal: 40,
    paddingVertical: 12,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: "#F4F3FF",
    shadowColor: "#939393",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
  },
  menuItem: {
    width: 35,
    height: 35,
  },
  menuIcon: {
    width: "100%",
    height: "100%",
  },
});

export default styles;
