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
const waltjr = require("../../../img/waltjr.jpg");
const skyler = require("../../../img/skyler.jpg");
const jesse = require("../../../img/jesse.jpg");



class Pending extends Component {
  // eslint-disable-line

  render() {
    return (
      <Container style={styles.container}>
        <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Pending</Title>
          </Body>
          <Right>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="menu" />
            </Button>
          </Right>

        </Header>

        <Content padder>
          <Card style={styles.mb}>
            <CardItem>
              <Left>
                <Thumbnail source={jesse} />
                <Body>
                  <Text>Jesse Pinkman</Text>
                  <Text note>Albuquerque, NM</Text>
                </Body>
              </Left>
            </CardItem>

            <CardItem cardBody>

            </CardItem>
            <CardItem style={{ paddingVertical: 0 }}>
              <Left>
                <Button iconLeft transparent>
                  <Icon active name="thumbs-up" />
                  <Text>Application Recieved</Text>
                </Button>
              </Left>
              <Body>
                <Button iconLeft transparent>
                  <Icon active name="chatbubbles" />
                  <Text>5 messages</Text>
                </Button>
              </Body>
              <Right>
                <Text>4 days ago</Text>
              </Right>
            </CardItem>
          </Card>

          <Card style={styles.mb}>
            <CardItem>
              <Left>
                <Thumbnail source={waltjr} />
                <Body>
                  <Text>Walter White Jr</Text>
                  <Text note>Albuquerque, NM</Text>
                </Body>
              </Left>
            </CardItem>

            <CardItem cardBody>

            </CardItem>
            <CardItem style={{ paddingVertical: 0 }}>
              <Left>
                <Button iconLeft transparent>
                  <Icon active name="thumbs-up" />
                  <Text>Application Recieved</Text>
                </Button>
              </Left>
              <Body>
                <Button iconLeft transparent>
                  <Icon active name="chatbubbles" />
                  <Text>15 messages</Text>
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
                <Thumbnail source={skyler} />
                <Body>
                  <Text>Skyler White</Text>
                  <Text note>Albuquerque, NM</Text>
                </Body>
              </Left>
            </CardItem>

            <CardItem cardBody>

            </CardItem>
            <CardItem style={{ paddingVertical: 0 }}>
              <Left>
                <Button iconLeft transparent>
                  <Icon active name="thumbs-up" />
                  <Text>Application Recieved</Text>
                </Button>
              </Left>
              <Body>
                <Button iconLeft transparent>
                  <Icon active name="chatbubbles" />
                  <Text>8 messages</Text>
                </Button>
              </Body>
              <Right>
                <Text>13 days ago</Text>
              </Right>
            </CardItem>
          </Card>

        </Content>
      </Container>
    );
  }
}

export default Pending;
