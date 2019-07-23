import React, { Component } from 'react';
import { View } from 'react-native';
import defaultStyles from '../../../shared/style/styles';
import { Text } from "@99xt/first-born";

class Search extends Component {

    render() {
        return (
            <View style={defaultStyles.paddedCenterContainer}>
                <Text>Search</Text>
            </View>
        );
    }

}

export default Search;
