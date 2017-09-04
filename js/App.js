/* @flow */

import React from "react";

import { Platform } from "react-native";
import { Root } from "native-base";
import { StackNavigator } from "react-navigation";

import Drawer from "./Drawer";
import Dashboard from "./components/dashboard/";
import Schedule from "./components/schedule/";
import Default from "./components/button/default";

import Vistors from "./components/vistors/";
import Permitted from "./components/vistors/permitted";
import Pending from "./components/vistors/pending";
import Forbidden from "./components/vistors/forbidden";


const AppNavigator = StackNavigator(
    {
        Drawer: { screen: Drawer },

        Dashboard: { screen: Dashboard },

        Schedule: { screen: Schedule },

        Permitted: { screen: Permitted },
        Pending: { screen: Pending },
        Forbidden: { screen: Forbidden },

        Default: { screen: Default },

    },
    {
        initialRouteName: "Drawer",
        headerMode: "none",
    }
);

export default () =>
    <Root>
        <AppNavigator />
    </Root>;
