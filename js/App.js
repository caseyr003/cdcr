 /* @flow */

import React from "react";

import { Platform } from "react-native";
import { Root } from "native-base";
import { StackNavigator } from "react-navigation";

import Drawer from "./Drawer";
import Dashboard from "./components/dashboard/";
import Schedule from "./components/schedule/";
import Default from "./components/button/default";
import Locate from "./components/locate";

import Form106 from "./components/form106/";
import Checklist from "./components/checklist/";
import Meetings from "./components/meetings/";
import Associates from "./components/associates/";
import Vistors from "./components/vistors/";
import Permitted from "./components/vistors/permitted";
import Pending from "./components/vistors/pending";
import Forbidden from "./components/vistors/forbidden";


const AppNavigator = StackNavigator(
    {
        Drawer: { screen: Drawer },
        Locate: { screen: Locate },

        Dashboard: { screen: Dashboard },
        Meetings: { screen: Meetings },
        Locate: { screen: Locate },

        Schedule: { screen: Schedule },
        Checklist: { screen: Checklist },

        Permitted: { screen: Permitted },
        Pending: { screen: Pending },
        Forbidden: { screen: Forbidden },

        Default: { screen: Default },
        Associates: { screen: Associates },
        Form106: { screen: Form106 },

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
