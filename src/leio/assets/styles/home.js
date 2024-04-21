import { StyleSheet } from "react-native";

const styleHome = StyleSheet.create({
  containerName: {
    width: "100%",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 16,
    color: "#8872DE",
    fontSize: 18,
    fontWeight: 600,
  },
  body: {
    width: "100%",
    justifyContent: "flex-start",
    gap: 16,
  },
  bodyContent: {
    flex: 1,
    gap: 16,
  },
});

export default styleHome;
