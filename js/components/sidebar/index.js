import React, { Component } from "react";
import { Image } from "react-native";

import {
	Content,
	Text,
	List,
	ListItem,
	Icon,
	Container,
	Left,
	Right,
	Badge,
	Button,
	View,
	StyleProvider,
	getTheme,
	variables,
} from "native-base";

import styles from "./style";

const drawerImage = require("../../../img/cdcr.png");

const drawerLogo = require("../../../img/pass-logo.png");

const datas = [
	{
		name: "Home",
		route: "Dashboard",
		icon: "person",
		bg: "#C5F442",
	},
	{
		name: "Schedule",
		route: "Schedule",
		icon: "paper",
		bg: "#C5F442",
	},
	{
		name: "Vistors",
		route: "Vistors",
		icon: "person",
		bg: "#477EEA",
	},
	{
		name: "Meetings",
		route: "Schedule",
		icon: "paper",
		bg: "#DA4437",
	},
	{
		name: "Logout",
		route: "Home",
		icon: "settings",
		bg: "#DA4437",
	}
];

class SideBar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			shadowOffsetWidth: 1,
			shadowRadius: 4,
		};
	}

	render() {
		return (
			<Container>
				<Content bounces={false} style={{ flex: 1, backgroundColor: "#fff", top: -1 }}>
					<Image style={styles.drawerCover}>
						<Image square style={styles.drawerImage} source={drawerImage} />
						<Text style={styles.cdcrTxt}>California Department of Corrections and Rehabilitation</Text>
						<Image square style={styles.drawerLogo} source={drawerLogo} />
						<Text style={styles.title}>VPASS</Text>
					</Image>
					<List
						dataArray={datas}
						renderRow={data =>
							<ListItem button noBorder onPress={() => this.props.navigation.navigate(data.route)}>
								<Left>
									<Icon active name={data.icon} style={{ color: "#777", fontSize: 26, width: 30 }} />
									<Text style={styles.text}>
										{data.name}
									</Text>
								</Left>
								{data.types &&
									<Right style={{ flex: 1 }}>
										<Badge
											style={{
												borderRadius: 3,
												height: 25,
												width: 72,
												backgroundColor: data.bg,
											}}
										>
											<Text style={styles.badgeText}>{`${data.types} Types`}</Text>
										</Badge>
									</Right>}
							</ListItem>}
					/>
				</Content>
			</Container>
		);
	}
}

export default SideBar;
