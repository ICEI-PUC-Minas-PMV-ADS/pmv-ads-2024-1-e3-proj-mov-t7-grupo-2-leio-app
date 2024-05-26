import { StyleSheet } from "react-native";

const styleModal = StyleSheet.create({
  modalBackground: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    position: "relative",
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 12,
    width: "80%",
    maxWidth: 300,
    gap: 8,
  },
  headerText: {
    fontSize: 20,
    textAlign: "center",
    fontWeight: 700,
  },
  optionContainer: {
    gap: 8,
  },
  option: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  icon: {
    width: 24,
    height: 24,
  },
  optionText: {
    fontSize: 16,
  },
  ratingContainer: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 12,
  },
  starIcon: {
    width: 24,
    height: 24,
  },
  modalSubtitle: {
    fontSize: 18,
    fontStyle: "italic",
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  checkboxLabel: {
    fontSize: 16,
  },
  applyButton: {
    backgroundColor: "#8872DE",
  },
  applyButtonText: {
    textAlign: "center",
  },
  closeButton: {
    position: "absolute",
    right: 20,
  },
  closeButtonText: {
    color: "#8872DE",
    fontSize: 22,
    fontWeight: 600,
  },
  selected: {
    color: "#8872DE",
    fontWeight: "bold",
    fontSize: 16,
  },
  unselected: {
    fontSize: 16,
  },
});

export default styleModal;
