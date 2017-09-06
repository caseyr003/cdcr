import React, { Component } from "react";
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
  Toast,
  View
} from "native-base";
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import styles from "./styles";

const logo = require("../../../img/contacts/varun.png");
const cardImage = require("../../../img/drawer-cover.png");

var BUTTONS = ["1:00pm", "2:00pm", "4:00pm", "6:00pm", "8:00pm", "Cancel"];
var DESTRUCTIVE_INDEX = 5;
var CANCEL_INDEX = 5;

class Schedule extends Component {
  //eslint-disable-line

  constructor(props) {
    super(props);
    this.state = {
      associates:[],
      showToast: false,
      i: 0
    };

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
        console.log(this.state.associates[0].photo);
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
            <Thumbnail source={logo} />
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

  associateNames = () => {
    const list = this.state.associates.map((associate) =>
      associate.name
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
            <Title style={{ color: "#fff" }}>Schedule</Title>
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




          <Calendar
            // Initially visible month. Default = Date()
            current={'2017-09-01'}
            // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
            minDate={'2016-05-10'}
            // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
            maxDate={'2018-04-30'}
            // Handler which gets executed on day press. Default = undefined
            onDayPress={(day) => {
              ActionSheet.show(
                {
                  options: BUTTONS,
                  cancelButtonIndex: CANCEL_INDEX,
                  destructiveButtonIndex: DESTRUCTIVE_INDEX,
                  title: day.dateString
                },
                buttonIndex => {
                  this.setState({ clicked: BUTTONS[buttonIndex] });
                  Toast.show({
                    text: "Meeting Scheduled for " + day.dateString.toString() + " at " + BUTTONS[buttonIndex] + " with " + this.associateNames()[this.state.i],
                    buttonText: "Okay"
                  })
                  console.log(day.timestamp);
                }
              )

              console.log('selected day', day)
            }}
            // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
            monthFormat={'MMM yyyy'}
            // Handler which gets executed when visible month changes in calendar. Default = undefined
            onMonthChange={(month) => {console.log('month changed', month)}}
            // Hide month navigation arrows. Default = false
            hideArrows={true}
            // Replace default arrows with custom ones (direction can be 'left' or 'right')
            renderArrow={(direction) => (<Arrow />)}
            // Do not show days of other months in month page. Default = false
            hideExtraDays={true}
            // If hideArrows=false and hideExtraDays=false do not swich month when tapping on greyed out
            // day from another month that is visible in calendar page. Default = false
            disableMonthChange={true}
            // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday.
            firstDay={1}
          />

        </Content>


      </Container>
    );
  }
}

export default Schedule;
