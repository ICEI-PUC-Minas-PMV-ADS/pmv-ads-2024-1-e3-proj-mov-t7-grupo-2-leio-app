import { StyleSheet } from "react-native";

const styleResPesquisa = StyleSheet.create({
  icons: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  iconStars: {
    flexDirection: "row",
    alignItems: "center",
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
    flex: 1,
  },
  bookDiv: {
    gap: 8,
    width: "100%",
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    flexShrink: 1,
    maxHeight: 45,
    overflow: "hidden",
  },
  author: {
    flexShrink: 1,
    maxHeight: 35,
    overflow: "hidden",
  },
});

export default styleResPesquisa;
