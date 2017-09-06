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
import MapView from 'react-native-maps';

const logo = require("../../../img/contacts/varun.png");
const cardImage = require("../../../img/drawer-cover.png");

class Locate extends Component {
  //eslint-disable-line

  constructor(props) {
    super(props);
    this.state = {
      associates:[],
      showToast: false,
      i: 0
    };

    this.loadData = this.loadData.bind(this);
    this.latList = this.latList.bind(this);
    this.lngList = this.lngList.bind(this);
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

  toggleList = () => {
    if(this.state.i == 1){
      this.setState({i: 0});
    } else {
      this.setState({i: 1});
    }
    console.log(this.state.i);
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
      </Card>
    );

    return (list);
  }

  latList = () => {
    const list = this.state.associates.map((associate) =>
      associate.lat
    );

    return (list);
  }

  lngList = () => {
    const list = this.state.associates.map((associate) =>
      associate.lng
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
              onPress={() => this.props.navigation.goBack()}
            >
              <Icon style={{ color: "#fff" }} name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title style={{ color: "#fff" }}>Location</Title>
          </Body>
          <Right />
        </Header>

        <Content scrollEnabled={false}>

        <View style={styles.profileInfo}>

            {this.associateList()[this.state.i]}

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
          <MapView
            style={styles.mapLocation}
            initialRegion={{
              latitude: 36.7783,
              longitude: -119.4179,
              latitudeDelta: 10.0,
              longitudeDelta: 10.0,
            }}
          >

          <MapView.Marker
            coordinate={{latitude: this.latList()[this.state.i], longitude: this.lngList()[this.state.i]}}
          />

          </MapView>


        </Content>


      </Container>
    );
  }
}

export default Locate;
