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
const warren = require("../../../img/warren.png");
const red = require("../../../img/red.jpg");
const pornstache = require("../../../img/pornstache.jpg");



class Forbidden extends Component {
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
            <Title style={{ color: "#fff" }}>Forbidden</Title>
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
                <Thumbnail source={warren} />
                <Body>
                  <Text>Suzzane "Crazy Eyes" Warren</Text>
                  <Text note>Litchfield, NY</Text>
                </Body>
              </Left>
              <Right>
                <Button iconRight transparent>
                  <Icon style={{color: 'red'}}active name="radio-button-on"/>
                </Button>
              </Right>
            </CardItem>

            <CardItem cardBody>

            </CardItem>
            <Button transparent>
              <Text>Reason: Throws pies at innmates</Text>
            </Button>
            <CardItem style={{ paddingVertical: 0 }}>
              <Left >
                <Button iconLeft transparent>
                  <Icon active name="ios-person" />
                  <Text>2 Meetings</Text>
                </Button>
              </Left>
              <Body>
                <Button iconLeft transparent>
                  <Icon active name="chatboxes" />
                  <Text>2 messages</Text>
                </Button>
              </Body>
              <Right>
                <Text>1 day ago</Text>
              </Right>
            </CardItem>
          </Card>

          <Card style={styles.mb}>
            <CardItem>
              <Left>
                <Thumbnail source={red} />
                <Body>
                  <Text>Galina "Red" Reznikov</Text>
                  <Text note >Litchfield, NY</Text>
                </Body>
              </Left>
              <Right>
                <Button iconRight transparent>
                  <Icon style={{color: 'red'}}active name="radio-button-on"/>
                </Button>
              </Right>
            </CardItem>

            <CardItem cardBody>

            </CardItem>
            <Button transparent>
              <Text>Reason: Known member of Russian Mafia</Text>
            </Button>
            <CardItem style={{ paddingVertical: 0 }}>
              <Left>
                <Button iconLeft transparent>
                  <Icon  active name="ios-person" />
                  <Text>0 Meetings</Text>
                </Button>
              </Left>
              <Body>
                <Button iconLeft transparent>
                  <Icon active name="chatboxes" />
                  <Text>4 messages</Text>
                </Button>
              </Body>
              <Right>
                <Text> 8 days ago</Text>
              </Right>
            </CardItem>
          </Card>

          <Card style={styles.mb}>
            <CardItem>
              <Left>
                <Thumbnail source={pornstache} />
                <Body>
                  <Text>George "Pornstache" Mendez</Text>
                  <Text note>Litchfield, NY</Text>
                </Body>
              </Left>
              <Right>
                <Button iconRight transparent>
                  <Icon style={{color: 'red'}}active name="radio-button-on"/>
                </Button>
              </Right>
            </CardItem>

            <CardItem cardBody>

            </CardItem>
            <Button transparent>
              <Text>Reason: Bringing drugs into prison</Text>
            </Button>
            <CardItem style={{ paddingVertical: 0 }}>
              <Left>
                <Button iconLeft transparent>
                  <Icon active name="ios-person" />
                  <Text>0 Meetings</Text>
                </Button>
              </Left>
              <Body>
                <Button iconLeft transparent>
                  <Icon active name="chatboxes" />
                  <Text>8 messages</Text>
                </Button>
              </Body>
              <Right>
                <Text>12 days ago</Text>
              </Right>
            </CardItem>
          </Card>

        </Content>
      </Container>
    );
  }
}

export default Forbidden;
