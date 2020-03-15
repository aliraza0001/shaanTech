import React, { Component } from 'react'
import { Text, View ,Button} from 'react-native'

export default class signUp extends Component {
    render() {
        const {goBack} = this.props.navigation;
        return (
            <View>
                <Button title='go Back' onPress={()=>goBack()} />
                <Text> signUp </Text>
            </View>
        )
    }
}
