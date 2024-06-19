import { StyleSheet } from "react-native";

const styleBiblioteca = StyleSheet.create({
  bodyContainer: {
    width: "100%",
  },
  containerInput: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    alignItems: "center",
    gap: 12,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
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
    paddingLeft: 10,
    color: "#5E41D2",
  },
  searchIcon: {
    marginLeft: 10,
  },
  searchFilter: {
    width: 30,
  },
  filterImg: {
    objectFit: "contain",
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
  topicContainer: {
    width: "100%",
  },
  noBooksText: {
    fontSize: 20,
    fontWeight: "500",
    textAlign: "center",
  },
});

export default styleBiblioteca;
