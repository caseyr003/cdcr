import React, { Component } from "react";
import { Image, View } from "react-native";

import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Icon,
  Card,
  CardItem,
  Text,
  Thumbnail,
  Left,
  Body,
  Right,
  IconNB
} from "native-base";

import styles from "./styles";

const logo = require("../../../img/contacts/varun.png");
const cardImage = require("../../../img/drawer-cover.png");

class NHCardImage extends Component {
  render() {
    return (
      <Container style={styles.container}>
        <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigation.navigate("DrawerOpen")}>
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>Home</Title>
          </Body>
          <Right />
        </Header>

        <Content padder>
          <Card style={styles.mb}>
            <CardItem>
              <Left>
                <Thumbnail source={logo} />
                <Body>
                  <Text>Joey Smith</Text>
                  <Text note>San Francisco, CA</Text>
                </Body>
              </Left>
            </CardItem>

            <CardItem cardBody>

            </CardItem>
            <Button transparent>
              <Text>Schedule Meeting</Text>
            </Button>
            <CardItem style={{ paddingVertical: 0 }}>
              <Left>
                <Button iconLeft transparent>
                  <Icon active name="thumbs-up" />
                  <Text>48 Meetings</Text>
                </Button>
              </Left>
              <Body>
                <Button iconLeft transparent>
                  <Icon active name="chatbubbles" />
                  <Text>2 Associates</Text>
                </Button>
              </Body>
              <Right>
                <Text>18h ago</Text>
              </Right>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}

export default NHCardImage;
