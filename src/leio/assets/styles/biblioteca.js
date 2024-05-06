import { StyleSheet } from "react-native";

const styleBiblioteca = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F3FF",
  },
  containerInput: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    alignItems: "center",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    marginRight: 10,
    paddingVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: "#fff",
    borderRadius: 12,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  searchInput: {
    flex: 1,
    paddingLeft: 10,
    color: "#5E41D2",
  },
  searchIcon: {
    marginLeft: 10,
  },
  searchFilter: {
    height: 30,
    width: 30,
  },
  tabs: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "#5E41D2",
    borderRadius: 20,
    alignSelf: "center",
    paddingLeft: 10,
    paddingRight: 10,
  },
  tab: {
    flex: 1,
    paddingVertical: 10,
    alignItems: "center",
    justifyContent: "center",
    height: 50,
  },
  tabText: {
    color: "#fff",
  },
  activeTab: {
    backgroundColor: "#8872DE",
    borderRadius: 20,
    height: 35,
    width: 30,
    alignSelf: "center",
  },
  activeTabText: {
    color: "#5E41D2",
  },
  bookshelf: {
    alignItems: "center",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 16,
  },
  bookCover: {
    width: 100,
    height: 160,
    resizeMode: "cover",
    borderRadius: 12,
  },
});

export default styleBiblioteca;
