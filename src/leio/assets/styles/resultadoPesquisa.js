import { StyleSheet } from "react-native";

const stylePesquisa = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "normal",
    padding: 40,
    gap: 16,
    backgroundColor: "#F4F3FF",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "start",
    padding: 6,
    gap: 12,
    font: "12px -apple-system, BlinkMacSystemFont Roboto, Helvetica, Arial, sans-serif",
    width: "90%",
    justifyContent:"space-between",
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
});





export default stylePesquisa;
