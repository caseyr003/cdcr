import React, { Component } from "react";
import { Image, View, StatusBar, Keyboard } from "react-native";

import {
  Container,
  Header,
  Title,
  Content,
  Button,
	H3,
  Item,
  Label,
  Input,
  Body,
  Left,
  Right,
  Icon,
  Form,
  Toast,
  Text
} from "native-base";

import styles from "./styles";

const launchscreenBg = require("../../../img/login-bg.png");
const launchscreenLogo = require("../../../img/pass-logo.png");

const datas = [
	{
		name: "Anatomy",
		route: "Anatomy",
		icon: "phone-portrait",
		bg: "#C5F442",
	}
]

class Home extends Component {
	// eslint-disable-line

  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };

  }

  checkUser = () => {
    console.log(this.state.username);
    console.log(this.state.password);
    if(this.state.username.toString() === "Chuck" && this.state.password.toString() === "password"){
      this.props.navigation.navigate("Dashboard");
    } else {
      Toast.show({
        text: "Username/Password Incorrect",
        buttonText: "Okay"
      });

      this.setState({
  			username: "",
  		});

      this.setState({
  			password: "",
  		});

    }
  }


	render() {
		return (
			<Container>
				<StatusBar barStyle="light-content" />
				<Image source={launchscreenBg} style={styles.imageContainer}>
					<View style={styles.logoContainer}>
						<Image source={launchscreenLogo} style={styles.logo} />
            <Text style={styles.title}>VPASS</Text>
					</View>

					<View style={{ marginBottom: 110 }}>

		          <Form style={styles.login}>
		            <Item floatingLabel>
		              <Label style={styles.gray}>Username</Label>
		              <Input style={styles.gray} value={this.state.username} onChangeText={(username) => this.setState({username})} onSubmitEditing={Keyboard.dismiss} />
		            </Item>
		            <Item floatingLabel>
		              <Label style={styles.gray}>Password</Label>
		              <Input  value={this.state.password} onChangeText={(password) => this.setState({password})} onSubmitEditing={Keyboard.dismiss} secureTextEntry={true} style={styles.gray} />
		            </Item>
		          </Form>
		          <Button block style={styles.signinBtn} onPress={() => this.checkUser()}>
		            <Text>Sign In</Text>
		          </Button>
              		<Text style={styles.register}>Don't have an account? <Text style={styles.request}>Request one</Text></Text>
					</View>
				</Image>
			</Container>
		);
	}
}

export default Home;
