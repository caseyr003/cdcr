import React, { Component } from 'react';

import {
	Container,
	Header,
	Title,
	Content,
	Button,
	Icon,
	List,
	ListItem,
	CheckBox,
	Text,
	Left,
	Right,
	Body,
} from 'native-base';

import styles from './styles';

class Checklist extends Component {
	constructor(props) {
		super(props);
		this.state = {
			checkbox1: true,
			checkbox2: false,
			checkbox3: false,
			checkbox4: false,
		};
	}

	toggleSwitch1() {
		this.setState({
			checkbox1: !this.state.checkbox1,
		});
	}

	toggleSwitch2() {
		this.setState({
			checkbox2: !this.state.checkbox2,
		});
	}

	toggleSwitch3() {
		this.setState({
			checkbox3: !this.state.checkbox3,
		});
	}

	toggleSwitch4() {
		this.setState({
			checkbox4: !this.state.checkbox4,
		});
	}

	render() {
		return (
			<Container style={styles.container}>
			<Header
				style={{ backgroundColor: "#008C57" }}
				androidStatusBarColor="#008C57"
				iosBarStyle="light-content"
			>
				<Left>
					<Button
						transparent
						onPress={() => this.props.navigation.navigate("Dashboard")}
					>
						<Icon style={{ color: "#fff" }} name="menu" />
					</Button>
				</Left>
				<Body>
					<Title style={{ color: "#fff" }}>Checklist</Title>
				</Body>
				<Right />
			</Header>

				<Content>
					<ListItem button onPress={() => this.toggleSwitch1()}>
						<CheckBox color="green" checked={this.state.checkbox1} onPress={() => this.toggleSwitch1()} />
						<Body>
							<Text>Fill Out CDCR Form 106</Text>
						</Body>
					</ListItem>
					<ListItem button onPress={() => this.toggleSwitch2()}>
						<CheckBox color="green" checked={this.state.checkbox2} onPress={() => this.toggleSwitch2()} />
						<Body>
							<Text>Get Directions</Text>
						</Body>
					</ListItem>
					<ListItem button onPress={() => this.toggleSwitch3()}>
						<CheckBox color="green" checked={this.state.checkbox3} onPress={() => this.toggleSwitch3()} />
						<Body>
							<Text>Reserve Hotel</Text>
						</Body>
					</ListItem>
					<ListItem button onPress={() => this.toggleSwitch4()}>
						<CheckBox color="green" checked={this.state.checkbox4} onPress={() => this.toggleSwitch4()} />
						<Body>
							<Text>Register all guests that are travelling with you</Text>
						</Body>
					</ListItem>
				</Content>
			</Container>
		);
	}
}

export default Checklist;
