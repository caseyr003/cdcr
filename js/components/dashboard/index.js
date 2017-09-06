import React, { Component } from "react";
import { Image, View } from "react-native";
import Permitted from '../vistors/permitted'

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

          <Grid>

            <Col>
              <Thumbnail left style={styles.img} source={{uri: 'https://asphaltgold.de/media/catalog/product/cache/1/image/930x669/0f396e8a55728e79b48334e699243c07/s/t/st_ssy_stock_cap_black_1.jpg'}} />
              <Text style={styles.title} >Chuck Finley</Text>
              <Text note style={styles.subtitle} >San Francisco, CA</Text>
            </Col>
            <Col>
              <Text style={styles.notification} >3 Upcoming Meetings</Text>
              <Text style={styles.notification} >2 Associates</Text>
              <Text style={styles.notification} >Approved</Text>
            </Col>
          </Grid>

        </View>

        <View style={{ padding: 10 }}>

              <Grid>
              <Card style={styles.mb}>

                <CardItem cardBody>
                <Col style={styles.colBig} onPress={() => this.props.navigation.navigate("Meetings")}>
                  <View>
                    <Image square style={styles.icon} source={upcoming} />
                    <Text style={[styles.smallTxt, {color: "#00E081"}]}>Upcoming Meetings</Text>
                  </View>
                </Col>
                </CardItem>
              </Card>

                <Col>
                <Card style={styles.mb}>

                  <CardItem cardBody>
                  <Row style={styles.colSmall} onPress={() => this.props.navigation.navigate("Schedule")}>
                    <View>
                      <Image square style={styles.iconSmall} source={schedule} />
                      <Text style={[styles.smallTxt, {color: "#2990B2"}]}>Schedule Meeting</Text>
                    </View>
                  </Row>
                  </CardItem>
                </Card>
                  <Card style={styles.mb}>

                    <CardItem cardBody>
                  <Row style={styles.colSmall} onPress={() => this.props.navigation.navigate("Checklist")}>
                    <View>
                      <Image square style={styles.iconSmall} source={checklist} />
                      <Text style={[styles.smallTxt, {color: "#7ED321"}]}>Meeting Checklist</Text>
                    </View>
                  </Row>
                  </CardItem>
                </Card>
                </Col>
              </Grid>



              <Grid>


                <Col>
                <Card style={styles.mb}>

                  <CardItem cardBody>
                  <Row style={styles.colSmall} onPress={() => this.props.navigation.navigate("Locate")}>
                    <View>
                      <Image square style={styles.iconSmall} source={locate} />
                      <Text style={[styles.smallTxt, {color: "#FBE800", marginLeft: 58}]}>Locate</Text>
                    </View>

                  </Row>
                  </CardItem>
                </Card>
                  <Card style={styles.mb}>

                    <CardItem cardBody>
                  <Row style={styles.colSmall} onPress={() => this.props.navigation.navigate("Form106")}>
                    <View>
                      <Image resizeMode="cover" style={styles.iconSmall} source={form} />
                      <Text style={[styles.smallTxt, {color: "#FFCB00", marginLeft: 48}]}>Form 106</Text>
                    </View>

                  </Row>
                  </CardItem>
                </Card>
                </Col>

                <Card style={styles.mb}>

                  <CardItem cardBody>

                <Col style={styles.colBig} onPress={() => this.props.navigation.navigate("Associates")}>
                  <View>
                    <Image square style={styles.icon} source={associates} />
                    <Text style={[styles.smallTxt, {color: "#F6A623", marginLeft: 48}]}>Associates</Text>
                  </View>
                </Col>
                </CardItem>
              </Card>

              </Grid>

        </View>

        </Content>
      </Container>
    );
  }
}

export default NHCardImage;
