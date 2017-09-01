import React, { Component } from "react";
import { Image, View, StatusBar } from "react-native";

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
  Text
} from "native-base";

import styles from "./styles";

const launchscreenBg = require("../../../img/main-bg.png");
const launchscreenLogo = require("../../../img/logo-new.png");

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

	render() {
		return (
			<Container>
				<StatusBar barStyle="light-content" />
				<Image source={launchscreenBg} style={styles.imageContainer}>
					<View style={styles.logoContainer}>
						<Image source={launchscreenLogo} style={styles.logo} />
					</View>

					<View style={{ marginBottom: 80 }}>

		          <Form>
		            <Item floatingLabel>
		              <Label style={styles.white}>Username</Label>
		              <Input style={styles.white} />
		            </Item>
		            <Item floatingLabel>
		              <Label style={styles.white}>Password</Label>
		              <Input secureTextEntry={true} style={styles.white} />
		            </Item>
		          </Form>
		          <Button block style={styles.signinBtn} onPress={() => this.props.navigation.navigate("Dashboard")}>
		            <Text>Sign In</Text>
		          </Button>

					</View>
				</Image>
			</Container>
		);
	}
}

export default Home;
