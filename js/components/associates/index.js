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



class Form106 extends Component {
  // eslint-disable-line


    constructor(props) {
      super(props);

      this.state = {associates:[]};

      this.loadData = this.loadData.bind(this);
      this.associateList = this.associateList.bind(this);

      this.loadData();
    }

    loadData = () => {
      var self = this;
      return fetch('http://private-a4cda-thebscolaro.apiary-mock.com/associates')
        .then((response) => response.json())
        .then((responseJson) => {
          self.setState({associates: responseJson.associates});
        })
        .catch((error) => {
          console.error(error);
        });
    }

    associateList = () => {
      const list = this.state.associates.map((associate) =>
        <Card style={styles.mb}>
          <CardItem>
            <Left>
              <Thumbnail source={{uri: associate.photo}} />
              <Body>
                <Text>{associate.name}</Text>
                <Text note>{associate.location}</Text>
              </Body>
            </Left>
          </CardItem>

          <CardItem cardBody>

          <Button transparent onPress={() => this.props.navigation.navigate("Schedule") }>
            <Text>Schedule Meeting</Text>
          </Button>

          </CardItem>
          <CardItem style={{ paddingVertical: 0 }}>
            <Left>
              <Button iconLeft transparent>
                <Icon active name="thumbs-up" />
                <Text> {associate.meetings} Meetings</Text>
              </Button>
            </Left>
            <Body>
              <Button iconLeft transparent>
                <Icon active name="chatbubbles" />
                <Text>{associate.messages} messages</Text>
              </Button>
            </Body>
            <Right>
              <Text>{associate.last} ago</Text>
            </Right>
          </CardItem>
        </Card>
      );

      return (list);
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
            <Button transparent onPress={() => this.props.navigation.navigate("DrawerOpen")}>
              <Icon style={{ color: "#fff" }} name="menu" />
            </Button>
          </Left>
          <Body>
            <Title style={{ color: "#fff" }}>Associates</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon style={{ color: "#fff" }} name="add" />
            </Button>
          </Right>

        </Header>

        <Content padder>

          {this.associateList()}

        </Content>
      </Container>
    );
  }
}

export default Form106;
