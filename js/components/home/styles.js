const React = require("react-native");

const { StyleSheet, Dimensions, Platform } = React;

const deviceHeight = Dimensions.get("window").height;

export default {
  imageContainer: {
    flex: 1,
    width: null,
    height: null
  },
  logoContainer: {
    flex: 1,
    marginTop: deviceHeight / 10,
    marginBottom: 30
  },
  logo: {
    position: "absolute",
    left: Platform.OS === "android" ? 40 : 133,
    top: Platform.OS === "android" ? 35 : 40,
    width: 110,
    height: 91
  },
  text: {
    color: "#D8D8D8",
    bottom: 6,
    marginTop: 5
  },
  signinBtn: {
    backgroundColor: "#FFB800",
    margin: 32,
    marginTop: 20,
    marginBottom: 10
  },
  gray: {
    color: "#656565"
  },
  login: {
    width: 328,
    left: 24,
    backgroundColor: "#fff",
    borderRadius: 8
  },
  title: {
    fontSize: 70,
    color: "#fff",
    textAlign: "center",
    top: Platform.OS === "android" ? 35 : 140,
    fontFamily: "Arial Rounded MT Bold"
  },
  register: {
    textAlign: "center",
    fontFamily: "Arial Rounded MT Bold",
    fontSize: 14,
    color: "#656565"
  },
  request: {
    textAlign: "center",
    fontFamily: "Arial Rounded MT Bold",
    fontSize: 14,
    color: "#008C57"
  }
};
