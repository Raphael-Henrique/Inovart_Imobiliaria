import React, { Component } from 'react';
import { View, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
Icon.loadFont();


class Header extends Component {

    render() {
        return (
            <View style={{ backgroundColor: "#000000", bottom: 70, width: 444, height: 131 }}>
                <Icon name="menu" style={{ marginTop: 33, marginLeft: 30 }} size={62} color="white" />
            </View>
        )
    }
}

export default Header;