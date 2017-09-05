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
  IconNB,
  Grid,
  Col,
  Row
} from "native-base";

import styles from "./styles";

const logo = require("../../../img/contacts/varun.png");
const pass = require("../../../img/pass-logo.png");
const upcoming = require("../../../img/upcoming-icon.png");
const schedule = require("../../../img/schedule-icon.png");
const checklist = require("../../../img/checklist-icon.png");
const locate = require("../../../img/locate-icon.png");
const form = require("../../../img/form-icon.png");
const associates = require("../../../img/associates-icon.png");

class NHCardImage extends Component {
  render() {
    return (
      <Container style={styles.container}>
        <Header
          style={{ backgroundColor: "#008C57", borderBottomWidth: 0 }}
          androidStatusBarColor="#008C57"
          iosBarStyle="light-content"
        >
          <Left>
            <Button transparent onPress={() => this.props.navigation.navigate("DrawerOpen")}>
              <Icon style={{ color: "#fff" }} name="menu" />
            </Button>
          </Left>
          <Body>
            <Title style={{ color: "#fff" }}>VPASS</Title>
          </Body>
          <Right />
        </Header>

        <Content scrollEnabled={false}>
        <View style={styles.profileInfo}>
          <Thumbnail style={styles.img} source={logo} />
          <Body>
            <Text style={styles.title} >Joey Smith</Text>
            <Text note style={styles.subtitle} >San Francisco, CA</Text>
          </Body>
        </View>

        <View style={{ padding: 10 }}>
          <Card style={styles.mb}>

            <CardItem cardBody>
              <Grid>
                <Col style={styles.colBig} onPress={() => this.props.navigation.navigate("Schedule")}>
                  <View>
                    <Image square style={styles.icon} source={upcoming} />
                    <Text style={styles.smallTxt}>Upcoming Meetings</Text>
                  </View>
                </Col>

                <Col>
                  <Row style={styles.colSmall} onPress={() => this.props.navigation.navigate("Schedule")}>
                    <View>
                      <Image square style={styles.iconSmall} source={schedule} />
                      <Text style={styles.smallTxt}>Schedule Meeting</Text>
                    </View>
                  </Row>
                  <Row style={styles.colSmall} onPress={() => this.props.navigation.navigate("Schedule")}>
                    <View>
                      <Image square style={styles.iconSmall} source={checklist} />
                      <Text style={styles.smallTxt}>Meeting Checklist</Text>
                    </View>
                  </Row>
                </Col>
              </Grid>


            </CardItem>
          </Card>
          <Card style={styles.mb}>

            <CardItem cardBody>
              <Grid>


                <Col>
                  <Row style={styles.colSmall} onPress={() => this.props.navigation.navigate("Schedule")}>
                    <View>
                      <Image square style={styles.iconSmall} source={locate} />
                      <Text style={styles.smallTxt}>Locate</Text>
                    </View>

                  </Row>
                  <Row style={styles.colSmall} onPress={() => this.props.navigation.navigate("Schedule")}>
                    <View>
                      <Image square style={styles.iconSmall} source={form} />
                      <Text style={styles.smallTxt}>Form 106</Text>
                    </View>

                  </Row>
                </Col>

                <Col style={styles.colBig} onPress={() => this.props.navigation.navigate("Schedule")}>
                  <View>
                    <Image square style={styles.icon} source={associates} />
                    <Text style={styles.smallTxt}>Associates</Text>
                  </View>
                </Col>

              </Grid>


            </CardItem>
          </Card>
        </View>


        </Content>
      </Container>
    );
  }
}

export default NHCardImage;
