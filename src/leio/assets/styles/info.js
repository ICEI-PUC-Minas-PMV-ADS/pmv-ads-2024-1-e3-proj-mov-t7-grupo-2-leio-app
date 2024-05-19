import { StyleSheet } from "react-native";

const styleInfo = StyleSheet.create({
  book: {
    width: 165,
    height: 250,
  },
  bookName: {
    fontSize: 24,
    textAlign: "center",
  },
  btnsContainer: {
    flexWrap: "wrap",
    flexDirection: "row",
    gap: 8,
    alignItems: "center",
    position: "absolute",
    top: 0,
    right: -60,
  },
  author: {
    fontSize: 15,
    textAlign: "center",
  },
  ratingContainer: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 2,
  },
  summary: {
    fontSize: 15,
  },
  buttonContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 16,
  },
  lerPreviaButton: {
    backgroundColor: "#8872DE",
  },
  buscarEbookButton: {
    backgroundColor: "#7B9FE1",
  },
});

export default styleInfo;
