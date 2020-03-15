import React, { Component } from 'react'
import { Text, View,Button } from 'react-native'

export default class signIn extends Component {
    render() {
        const {navigate} = this.props.navigation;
        return (
            <View>
                <Text> signIn </Text>
                
                <Button title='Home Screen' onPress={()=>navigate('Home')} />
            </View>
        )
    }
}
