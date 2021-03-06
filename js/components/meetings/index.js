import React, { Component } from "react";
import { AppRegistry, View, Image } from 'react-native';
import {
  Container,
  Header,
  ActionSheet,
  Title,
  Content,
  Button,
  Icon,
  Badge,
  Text,
  Left,
  Right,
  Body,
  Card,
  CardItem,
  Thumbnail,
  Toast
} from "native-base";

import styles from "./styles";

const logo = require("../../../img/contacts/varun.png");
const cardImage = require("../../../img/drawer-cover.png");

class Meetings extends Component {
  //eslint-disable-line

  constructor(props) {
    super(props);
    this.state = {
      meetings:[],
      showToast: false,
      i: 0
    };

    this.loadData = this.loadData.bind(this);
    this.meetingsList = this.meetingsList.bind(this);

    this.loadData();
  }

  loadData = () => {
    var self = this;
    return fetch('http://private-a4cda-thebscolaro.apiary-mock.com/upcoming')
      .then((response) => response.json())
      .then((responseJson) => {
        self.setState({meetings: responseJson.upcomings});
      })
      .catch((error) => {
        console.error(error);
      });
  }

  toggleList = () => {
    if(this.state.i == 1){
      this.setState({i: 2});
    } else if(this.state.i == 2) {
      this.setState({i: 0});
    } else {
      this.setState({i: 1});
    }
    console.log(this.state.i);
  }

  meetingsList = () => {
    const list = this.state.meetings.map((meeting) =>
      <Card style={styles.mb}>
        <CardItem>
          <Left>
            <Thumbnail source={{uri: meeting.photo}} />
            <Body>
              <Text>{meeting.name}</Text>
              <Text note>{meeting.location}</Text>
            </Body>
          </Left>
        </CardItem>
      </Card>
    );

    return (list);
  }

  meetingsNames = () => {
    const list = this.state.meetings.map((meeting) =>
      meeting.id
    );

    return (list);
  }

  meetingDates = () => {
    const list = this.state.meetings.map((meeting) =>
      meeting.date
    );

    return (list);
  }



  render() {
    return (
      <Container style={styles.container}>
        <Header
          style={{ backgroundColor: "#008C57", borderBottomWidth: 0 }}
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
            <Title style={{ color: "#fff" }}>Meetings</Title>
          </Body>
          <Right />
        </Header>

        <Content scrollEnabled={false}>

        <View style={styles.profileInfo}>

            {this.meetingsList()[this.state.i]}

            <View style={styles.navBtn}>
              <Left>

              <Button transparent onPress={() => this.toggleList() }>
                <Icon style={{ color: "#fff" }} name="arrow-back" /><Text style={styles.white}>Prev</Text>
              </Button>

              </Left>

              <Button transparent onPress={() => this.toggleList() }>
                <Text style={styles.white}>Next</Text><Icon style={{ color: "#fff" }} name="arrow-forward" />
              </Button>

            </View>

          </View>
          <Text style={styles.dateTxt}>{this.meetingDates()[this.state.i]}</Text>

          <View>
          <Image
            style={styles.qr}
            source={{uri: 'https://chart.googleapis.com/chart?cht=qr&chs=400x400&chl='.concat(this.meetingsNames()[this.state.i])}}
          />
          <Text style={styles.qrTxt}>Scan QR Code upon arrival</Text>
          </View>


        </Content>


      </Container>
    );
  }
}

export default Meetings;
