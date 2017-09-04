/* @flow */

import React from "react";
import { DrawerNavigator } from "react-navigation";

import Home from "./components/home/";
import Dashboard from "./components/dashboard/";
import Schedule from "./components/schedule/";
import Vistors from "./components/vistors/";
import SplashPage from "./components/splashscreen/";
import SideBar from "./components/sidebar";

const DrawerExample = DrawerNavigator(
  {
    Home: { screen: Home },
    Schedule: { screen: Schedule },
    Dashboard: { screen: Dashboard },
    Vistors: { screen: Vistors },
  },
  {
    initialRouteName: "Home",
    contentOptions: {
      activeTintColor: "#e91e63"
    },
    contentComponent: props => <SideBar {...props} />
  }
);

export default DrawerExample;
