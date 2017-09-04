import React, { Component } from "react";
import { BackAndroid, StatusBar, Platform } from "react-native";
import { variables, Drawer } from "native-base";

import getTheme from "../native-base-theme/components";
import material from "../native-base-theme/variables/material";
import platform from "../native-base-theme/variables/platform";

import Home from "./components/home/";
import Schedule from "./components/schedule/";
import Default from "./components/button/default";
import Vistors from "./components/vistors/";
import Pending from "./components/vistors/pending";
import Permitted from "./components/vistors/permitted";
import Forbidden from "./components/vistors/forbidden";

import SplashPage from "./components/splashscreen/";
import SideBar from "./components/sidebar";
import Dashboard from "./components/dashboard/";

class AppNavigator extends Component {
  render() {
    return ;
  }
}

export default AppNavigator;
