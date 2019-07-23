import React, { Component } from "react";
import Home from "../modules/home/container/Home";
import Payment from "../modules/payment/container/Payment";
import About from "../modules/about/container/About";
import Settings from "../modules/settings/container/Settings";
import DrawerComponent from "./DrawerComponent";
import Search from "../modules/search/container/Search";
import { Drawer, Stack, Tabs, Scene, Router, Actions } from "react-native-router-flux";
import NavigationFooter from "./NavigationFooter";
import NavigationHeader from "./NavigationHeader";

class Navigator extends Component {

    render() {
        return (
            <Router>
                <Drawer key="root" contentComponent={DrawerComponent} initial >
                    <Tabs key="TabStack" title="Home" tabBarComponent={NavigationFooter}>
                        <Stack key="HomeStack" initial>
                            <Scene key="Home" component={Home} title="Home" onLeft={() => Actions.drawerOpen()} typeLeft="drawer" navBar={NavigationHeader} initial />
                        </Stack>
                        <Stack key="PaymentStack">
                            <Scene key="Payment" component={Payment} title="Payment" onLeft={() => Actions.drawerOpen()} typeLeft="drawer" navBar={NavigationHeader} initial />
                        </Stack>
                        <Stack key="SettingsStack">
                            <Scene key="Settings" component={Settings} title="Settings" onLeft={() => Actions.drawerOpen()} typeLeft="drawer" navBar={NavigationHeader} initial />
                        </Stack>
                    </Tabs>
                    <Stack key="AboutStack" title="About">
                        <Scene key="About" component={About} title="About" onLeft={() => Actions.pop()} typeLeft="back" navBar={NavigationHeader} initial />
                    </Stack>
                    <Stack key="SearchStack" title="Search">
                        <Scene key="Search" component={Search} title="Search" onLeft={() => Actions.pop()} typeLeft="back" navBar={NavigationHeader} initial />
                    </Stack>
                </Drawer>
            </Router>
        );
    }
}

export default Navigator;