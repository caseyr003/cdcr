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



class Header3 extends Component {
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
            <Title>Forbidden</Title>
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
                <Thumbnail source={warren} />
                <Body>
                  <Text style={{color: 'red'}}>Suzzane "Crazy Eyes" Warren</Text>
                  <Text note>Litchfield, NY</Text>
                </Body>
              </Left>
            </CardItem>
            
            <CardItem cardBody>

            </CardItem>
            <Button transparent>
              <Text style={{color: 'red'}}>Reason: Throws pies at innmates</Text>
            </Button>
            <CardItem style={{ paddingVertical: 0 }}>
              <Left >
                <Button iconLeft transparent>
                  <Icon  style={{color: 'red'}}  active name="thumbs-down" />
                  <Text >2 Meetings</Text>
                </Button>
              </Left>
              <Body>
                <Button iconLeft transparent>
                  <Icon active name="chatbubbles" />
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
                  <Text style={{color: 'red'}}>Galina "Red" Reznikov</Text>
                  <Text note >Albuquerque, NM</Text>
                </Body>
              </Left>
            </CardItem>
            
            <CardItem cardBody>

            </CardItem>
            <Button transparent>
              <Text style={{color: 'red'}}>Reason: Known member of Russian Mafia</Text>
            </Button>
            <CardItem style={{ paddingVertical: 0 }}>
              <Left>
                <Button iconLeft transparent>
                  <Icon style={{color: 'red'}}  active name="thumbs-down" />
                  <Text>0 Meetings</Text>
                </Button>
              </Left>
              <Body>
                <Button iconLeft transparent>
                  <Icon active name="chatbubbles" />
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
                  <Text style={{color: 'red'}} >George "Pornstache" Mendez</Text>
                  <Text note>Litchfield, NY</Text>
                </Body>
              </Left>
            </CardItem>
            
            <CardItem cardBody>

            </CardItem>
            <Button transparent>
              <Text style={{color: 'red'}}>Reason: Bringing drugs into prison</Text>
            </Button>
            <CardItem style={{ paddingVertical: 0 }}>
              <Left>
                <Button iconLeft transparent>
                  <Icon style={{color: 'red'}}  active name="thumbs-down" />
                  <Text>0 Meetings</Text>
                </Button>
              </Left>
              <Body>
                <Button iconLeft transparent>
                  <Icon active name="chatbubbles" />
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

export default Header3;