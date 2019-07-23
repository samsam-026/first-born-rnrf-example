import React, { Component } from 'react';
import { ScrollView, SafeAreaView } from 'react-native';
import { ThinListItem } from '@99xt/first-born';
import { Actions } from 'react-native-router-flux';
import colors from '../shared/style/colors';

class DrawerComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            activeDrawerName: 'TabStack'
        };
    }

    drawerAction(drawer) {
        this.setState({ activeDrawerName: drawer });
        Actions[drawer].call()
    }

    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <ScrollView>
                    {this.props.items.map((item, index) => {
                        return <ThinListItem title={item.key} key={index} onPress={() => this.drawerAction(item.key)} backgroundColor={this.state.activeDrawerName === item.key ? "aliceblue" : colors.white} />
                    })}
                </ScrollView>
            </SafeAreaView>
        );
    }
}

export default DrawerComponent;