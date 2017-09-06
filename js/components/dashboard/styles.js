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
    margin: 10
  },
  img: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginLeft: 30
  },
  title: {
    color: "#fff",
    fontSize: 24,
    marginLeft: 30
  },
  subtitle: {
    color: "#ccc",
    paddingBottom: 10,
    marginLeft: 30
  },
  smallTxt: {
    justifyContent: 'center',
    alignItems: 'center',
    color: "#008C57",
    fontWeight: 'bold',
    marginLeft: 10
  },
  colBig: {
    flex:1,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    backgroundColor: "#fff",
    height: 196,

  },
  colSmall: {
    flex:1,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    backgroundColor: "#fff",
    height: 96
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
   width: 140,
   height: 140,
   marginLeft: 20
  },
  iconSmall: {
   justifyContent: 'center',
   alignItems: 'center',
   width: 60,
   height: 60,
   marginLeft: 56
 },
 notification: {
   color: "#fff",
   fontSize: 18,
   paddingTop: 10
 }
};
