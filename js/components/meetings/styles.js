const React = require("react-native");

const { StyleSheet } = React;

export default {
  container: {
    backgroundColor: "#FFF"
  },
  mb10: {
    marginBottom: 10
  },
  profileInfo: {
    backgroundColor: "#008C57",
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 1.5,
    marginBottom: 20
  },
  navBtn: {
    flex:1,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center'
  },
  white: {
    color: "#fff"
  },
  qr: {
    margin: 40,
    marginTop: 10,
    width: 300,
    height: 300,
    alignItems:'center',
    justifyContent:'center'
  },
  qrTxt: {
    marginLeft: 100,
    alignItems:'center',
    justifyContent:'center'
  },
  dateTxt: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10
  }
};
