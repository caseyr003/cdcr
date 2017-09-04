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



class Permitted extends Component {
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
            <Title style={{ color: "#fff" }}>Permitted</Title>
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

            <Button transparent>
              <Text>Schedule Meeting</Text>
            </Button>

            </CardItem>
            <CardItem style={{ paddingVertical: 0 }}>
              <Left>
                <Button iconLeft transparent>
                  <Icon active name="thumbs-up" />
                  <Text> 10 Meetings</Text>
                </Button>
              </Left>
              <Body>
                <Button iconLeft transparent>
                  <Icon active name="chatbubbles" />
                  <Text>5 messages</Text>
                </Button>
              </Body>
              <Right>
                <Text>4 hours ago</Text>
              </Right>
            </CardItem>
          </Card>

          <Card style={styles.mb}>
            <CardItem>
              <Left>
                <Thumbnail source={white} />
                <Body>
                  <Text>Walter White</Text>
                  <Text note>Albuquerque, NM</Text>
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
                  <Text>15 Meetings</Text>
                </Button>
              </Left>
              <Body>
                <Button iconLeft transparent>
                  <Icon active name="chatbubbles" />
                  <Text>15 messages</Text>
                </Button>
              </Body>
              <Right>
                <Text>8 hours ago</Text>
              </Right>
            </CardItem>
          </Card>

          <Card style={styles.mb}>
            <CardItem>
              <Left>
                <Thumbnail source={vause} />
                <Body>
                  <Text>Alex Vause</Text>
                  <Text note>Litchfield, NY</Text>
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
                  <Text>10 Meetings</Text>
                </Button>
              </Left>
              <Body>
                <Button iconLeft transparent>
                  <Icon active name="chatbubbles" />
                  <Text>8 messages</Text>
                </Button>
              </Body>
              <Right>
                <Text>30 days ago</Text>
              </Right>
            </CardItem>
          </Card>

        </Content>
      </Container>
    );
  }
}

export default Permitted;
