import React, { Component } from "react";

import {
  Container,
  Card,
  CardItem,
  Header,
  Title,
  Content,
  Button,
  Icon,
  Left,
  Right,
  Body,
  Text,
  Thumbnail
} from "native-base";

import styles from "./styles";
const chapman = require("../../../img/chapman.png");
const vause = require("../../../img/vause.png");
const white = require("../../../img/white.jpg");



class Meetings extends Component {
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
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon style={{ color: "#fff" }} name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title style={{ color: "#fff" }}>Meetings</Title>
          </Body>
          <Right>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon style={{ color: "#fff" }} name="menu" />
            </Button>
          </Right>

        </Header>

        <Content padder>
          <Card style={styles.mb}>
            <CardItem>
              <Left>
                <Thumbnail source={chapman} />
                <Body>
                  <Text>Piper Chapman</Text>
                  <Text note>Litchfield, NY</Text>
                </Body>
              </Left>
            </CardItem>

            <CardItem cardBody>

            <Button transparent onPress={() => this.props.navigation.navigate("Schedule") }>
              <Text>Get Directions</Text>
            </Button>

            <Button transparent onPress={() => this.props.navigation.navigate("Schedule") }>
              <Text>Checklist</Text>
            </Button>

            </CardItem>
            <CardItem style={{ paddingVertical: 0 }}>
              <Left>
                <Text>September 15, 2:00pm</Text>
              </Left>
            </CardItem>
          </Card>

        </Content>
      </Container>
    );
  }
}

export default Meetings;
