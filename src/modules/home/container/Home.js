import React, { Component } from 'react';
import { View } from 'react-native';
import defaultStyles from '../../../shared/style/styles';
import { Text } from '@99xt/first-born';

class Home extends Component {

    render() {
        return (
            <View style={defaultStyles.paddedCenterContainer}>
                <Text>Home</Text>
            </View>
        );
    }

}

export default Home;
