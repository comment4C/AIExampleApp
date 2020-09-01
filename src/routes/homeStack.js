import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import HomeScreen from '../screens/homeScreen'
import FaceDetectScreen from '../screens/faceDetectScreen';
import ObjectDectScreen from '../screens/objectDetectScreen';
import ChatBotScreen from '../screens/chatBotScreen';
import Header from '../components/header'
import HeaderFeature from '../components/headerFeature'
import React from 'react'

const screens = {
    HomeScreen: {
        screen: HomeScreen,
        navigationOptions: ( {navigation} ) => {
            return {
                headerTitle: () => <Header title="Artificial Intelligence" navigation={navigation} />
            }
        }
    },
    FaceDetect: {
        screen: FaceDetectScreen,
        navigationOptions: ( {navigation} ) => {
            return {
                headerTitle: () => <HeaderFeature title="Face Detect" navigation={navigation} />
            }
        }
    },
    ObjectDetect: {
        screen: ObjectDectScreen,
        navigationOptions: ( {navigation} ) => {
            return {
                headerTitle: () => <HeaderFeature title="Object Detect" navigation={navigation} />
            }
        }
    },
    ChatBot: {
        screen: ChatBotScreen,
        navigationOptions: ( {navigation} ) => {
            return {
                headerTitle: () => <HeaderFeature title="Chat Bot" navigation={navigation} />
            }
        }
    }
}

const HomeStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: '#444',
        headerStyle: { backgroundColor: '#000', height: 60 }
    }
});

export default createAppContainer(HomeStack);