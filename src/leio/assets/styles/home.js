import { StyleSheet } from "react-native";

const styleHome = StyleSheet.create({
  containerName: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 16,
    color: "#8872DE",
    fontSize: 30,
    fontWeight: 700,
    fontFamily: "Dongle",
  },
  body: {
    width: "100%",
    justifyContent: "flex-start",
    gap: 16,
  },
  bodyContent: {
    gap: 16,
  },
  text: {
    fontSize: 20,
    fontWeight: 500,
  },
});

export default styleHome;
