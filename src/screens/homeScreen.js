import React, { Component } from 'react'
import { Text, View,Button } from 'react-native'

export default class HomeScreen extends Component {
    render() {
        const {goBack,navigate,toggleDrawer} = this.props.navigation;
        return (
            <View>
                <Text> homeScreen </Text>
                <Button title='openDrawr' onPress={()=>toggleDrawer()} />
                <Button title='back Screen' onPress={()=>goBack()} />
                <Button title='SignIn Screen' onPress={()=>navigate('Product')} />
            </View>
        )
    }
}
