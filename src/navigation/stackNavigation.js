import {createStackNavigator} from 'react-navigation-stack'
import {createDrawerNavigator} from 'react-navigation-drawer'
import {createSwitchNavigator,createAppContainer} from 'react-navigation'
import SignInScreen from '../screens/signInScreen'
import SignUpScreen from '../screens/signUpScreen'
import ForgetScreen from '../screens/forgetScreen'
import HomeScreen from '../screens/homeScreen'
import ProductScreen from '../screens/productScreen'
import LandingScreen from '../screens/landingScreen'


export const AuthStack = createStackNavigator({
    Landing:LandingScreen,
    SignUp: SignUpScreen,
    SignIn:SignInScreen,
    Forget:ForgetScreen 
},{
    defaultNavigationOptions:{
        header:null
    },
    initialRouteName:'Landing'
})

export const AppStack = createStackNavigator({
    Home:{
        screen:HomeScreen,
        navigationOptions:{
            header:null
        }
    },
    Product:ProductScreen
},{
    initialRouteName:'Home'
    
})

const Drawer = createDrawerNavigator({
    AppStack,
})

const AppNavigator = createSwitchNavigator({
    Auth:AuthStack,
    App:Drawer
})

export default createAppContainer(AppNavigator)