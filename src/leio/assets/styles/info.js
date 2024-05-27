import { StyleSheet } from "react-native";

const styleInfo = StyleSheet.create({
  book: {
    width: 165,
    height: 250,
    position: "relative",
  },
  bookName: {
    fontSize: 24,
    textAlign: "center",
  },
  btnsContainer: {
    flexWrap: "wrap",
    flexDirection: "column",
    gap: 8,
    alignItems: "center",
    position: "absolute",
    top: 0,
    right: -60,
  },
  btn: {
    padding: 8,
    width: 50,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    borderRadius: "50%",
    shadowColor: "#939393",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
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
  loading: {
    justifyContent: "center",
    alignItems: "center",
  },
  loadingText: {
    fontSize: 25,
  },
});

export default styleInfo;
