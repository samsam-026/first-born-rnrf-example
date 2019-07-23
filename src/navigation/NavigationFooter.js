import React, { Component } from 'react';
import { TabBar, TabItem, Icon, Text } from '@99xt/first-born';
import { Actions } from 'react-native-router-flux';
import colors from '../shared/style/colors';


export default class NavigationFooter extends Component {

    constructor(props) {
        super(props);
        this.state = {
            activeTabName: 'HomeStack'
        };
    }

    tabAction(tab) {
        this.setState({ activeTabName: tab });
        Actions[tab].call()
    }

    render() {
        return (
            <TabBar color={colors.navBack} activeColor={colors.activeNav} inactiveColor={colors.inactiveNav}>
                <TabItem onPress={() => this.tabAction("HomeStack")} active={this.state.activeTabName === 'HomeStack' ? true : false}>
                    <Icon name="home" />
                    <Text>Home</Text>
                </TabItem>
                <TabItem onPress={() => this.tabAction("PaymentStack")} active={this.state.activeTabName === 'PaymentStack' ? true : false}>
                    <Icon name="card" />
                    <Text>Payments</Text>
                </TabItem >
                <TabItem onPress={() => this.tabAction("SettingsStack")} active={this.state.activeTabName === 'SettingsStack' ? true : false}>
                    <Icon name="settings" />
                    <Text>Settings</Text>
                </TabItem>
            </TabBar>
        );
    }
}