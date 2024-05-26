import { StyleSheet } from "react-native";

const styleResPesquisa = StyleSheet.create({
  icons: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  icon: {
    width: 20,
    height: 20,
  },
  bookContent: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    gap: 8,
  },
  bookInfos: {
    justifyContent: "space-between",
    gap: 12,
    width: "100%",
    height: "100%",
  },
  bookDiv: {
    gap: 8,
    width: "100%",
  },
});

export default styleResPesquisa;
