import React, { Component } from 'react'
import { Text, View ,Button} from 'react-native'

export default class landingScreen extends Component {
    constructor(props){
        super(props)
    }
    render() {
        const {navigate} = this.props.navigation;
        return (
            <View>
                <Text> landingScreen </Text>
                <Button title='SignUp Screen' onPress={()=>navigate('SignUp')} />
                <Button title='SignIn Screen' onPress={()=>navigate('SignIn')} />
                <Button title='Forget Screen' onPress={()=>navigate('Forget')} />
            </View>
        )
    }
}
