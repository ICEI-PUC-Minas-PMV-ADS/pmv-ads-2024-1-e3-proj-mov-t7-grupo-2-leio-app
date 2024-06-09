import { StyleSheet } from "react-native";

const styleHome = StyleSheet.create({
  containerName: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 16,
    color: "#8872DE",
    fontSize: 25,
    fontWeight: 700,
  },
  body: {
    width: "100%",
    justifyContent: "flex-start",
    gap: 16,
  },
  bodyContent: {
    gap: 16,
  },
  bookContainer: {
    flexWrap: "nowrap",
  },
  text: {
    fontSize: 20,
    fontWeight: 500,
  },
});

export default styleHome;
