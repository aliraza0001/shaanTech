import React, { Component } from 'react'
import { Text, View,Button } from 'react-native'

export default class ProductScreen extends Component {
    render() {
        const {goBack} = this.props.navigation;
        return (
            <View>
                
                <Text> ProductScreen </Text>
                <Button title='go Back' onPress={()=>goBack()} />
            </View>
        )
    }
}
