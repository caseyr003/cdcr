const React = require("react-native");

const { StyleSheet, Platform, Dimensions } = React;

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

export default {
  sidebar: {
    flex: 1,
    backgroundColor: "#fff"
  },
  drawerCover: {
    alignSelf: "stretch",
    // resizeMode: 'cover',
    height: deviceHeight / 3.5,
    width: null,
    position: "relative",
    marginBottom: 10,
    backgroundColor: "#008C57"
  },
  drawerImage: {
    position: "absolute",
    // left: (Platform.OS === 'android') ? 30 : 40,
    left: 20,
    // top: (Platform.OS === 'android') ? 45 : 55,
    top: 20,
    width: 50,
    height: 50,
  },
  drawerLogo: {
    position: "absolute",
    // left: (Platform.OS === 'android') ? 30 : 40,
    left: 120,
    // top: (Platform.OS === 'android') ? 45 : 55,
    top: 74,
    width: 76,
    height: 63,
  },
  listItemContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center"
  },
  iconContainer: {
    width: 37,
    height: 37,
    borderRadius: 18,
    marginRight: 12,
    paddingTop: Platform.OS === "android" ? 7 : 5
  },
  sidebarIcon: {
    fontSize: 21,
    color: "#fff",
    lineHeight: Platform.OS === "android" ? 21 : 25,
    backgroundColor: "transparent",
    alignSelf: "center"
  },
  text: {
    fontWeight: Platform.OS === "ios" ? "500" : "400",
    fontSize: 16,
    marginLeft: 20
  },
  badgeText: {
    fontSize: Platform.OS === "ios" ? 13 : 11,
    fontWeight: "400",
    textAlign: "center",
    marginTop: Platform.OS === "android" ? -3 : undefined
  },
  title: {
    fontSize: 40,
    color: "#fff",
    textAlign: "center",
    top: 110,
    fontFamily: "Arial Rounded MT Bold"
  },
  cdcrTxt: {
    fontSize: 14,
    color: "#fff",
    textAlign: "left",
    top: 30,
    left: 80,
    width: 250,
    fontFamily: "Arial Rounded MT Bold"
  },
};
