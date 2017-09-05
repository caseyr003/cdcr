const React = require("react-native");

const { StyleSheet } = React;

export default {
  container: {
    backgroundColor: "#eee"
  },
  text: {
    alignSelf: "center",
    marginBottom: 7
  },
  mb: {
    margin: 0
  },
  img: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginLeft: 138
  },
  title: {
    color: "#fff",
    fontSize: 24
  },
  subtitle: {
    color: "#ccc",
    paddingBottom: 10
  },
  smallTxt: {
    justifyContent: 'center',
    alignItems: 'center',
    color: "#008C57"
  },
  colBig: {
    flex:1,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    backgroundColor: "#fff",
    height: 200,
    width: 200
  },
  colSmall: {
    flex:1,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    backgroundColor: "#fff",
    height: 100
  },
  profileInfo: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 1.5,
    backgroundColor: "#008C57"
  },
  icon: {
   justifyContent: 'center',
   alignItems: 'center',
   width: 120,
   height: 120
  },
  iconSmall: {
   justifyContent: 'center',
   alignItems: 'center',
   width: 60,
   height: 60
 }
};
