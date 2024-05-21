import { StyleSheet } from "react-native";

const styleLogin = StyleSheet.create({
  illustration: {
    width: "100%",
    maxWidth: 300,
  },
  errorText: {
    color: "red",
    textAlign: "center",
    marginTop: 10,
  },
  successText: {
    color: "green",
    textAlign: "center",
    marginTop: 10,
  },
  loginGoogle: {
    backgroundColor: "#fc6681",
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 24,
  },
  googleIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default styleLogin;