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
const path = "../../../img/";
const suffix = ".png";



class Meetings extends Component {
  // eslint-disable-line

  constructor(props) {
    super(props);

    this.state = {meetings:[]};

    this.loadData = this.loadData.bind(this);
    this.meetingList = this.meetingList.bind(this);

    this.loadData();
  }

  loadData = () => {
    var self = this;
    return fetch('http://private-a4cda-thebscolaro.apiary-mock.com/meetings')
      .then((response) => response.json())
      .then((responseJson) => {
        self.setState({meetings: responseJson.meetings});
        console.log(responseJson);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  meetingList = () => {
    const list = this.state.meetings.map((meeting) =>
      <Card key={meeting.name}>
        <CardItem>
          <Left>
            <Thumbnail source={"https://previews.123rf.com/images/racorn/racorn1308/racorn130805649/21341221-Profile-portrait-of-a-charming-young-business-woman-being-happy-and-smiling-in-an-office-setting--Stock-Photo.jpg"} />
            <Body>
              <Text>{meeting.name}</Text>
              <Text note>{meeting.location}</Text>
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
            <Text>{meeting.date}</Text>
          </Left>
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

          {this.meetingList()}

        </Content>
      </Container>
    );
  }
}

export default Meetings;
