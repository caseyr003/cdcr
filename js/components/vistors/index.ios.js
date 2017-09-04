import React, { Component } from "react";

import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Icon,
  Left,
  Right,
  Body,
  Text,
  ListItem,
  List
} from "native-base";

import styles from "./styles";

const datas = [
  {
    route: "Permitted",
    text: "Permitted"
  },
  {
    route: "Forbidden",
    text: "Forbidden"
  },
  {
    route: "Pending",
    text: "Pending"
  }
];

class VistorsNB extends Component {
  // eslint-disable-line

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
              onPress={() => this.props.navigation.navigate("DrawerOpen")}
            >
              <Icon style={{ color: "#fff" }} name="menu" />
            </Button>
          </Left>
          <Body>
            <Title style={{ color: "#fff" }}>Vistors</Title>
          </Body>
          <Right />

        </Header>

        <Content>
          <List
            dataArray={datas}
            renderRow={data =>
              <ListItem
                button
                onPress={() => this.props.navigation.navigate(data.route)}
              >
                <Text>{data.text}</Text>
                <Right>
                  <Icon name="arrow-forward" />
                </Right>
              </ListItem>}
          />
        </Content>
      </Container>
    );
  }
}

export default VistorsNB;
