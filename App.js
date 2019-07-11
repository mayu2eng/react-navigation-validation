import React from 'react';
import { Text, View,Button } from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import Home from './Home';
import Details from './Detail'
const AppNavigator = createStackNavigator({
  Home : {
    screen : Home
  },
  Details: {
    screen: Details
  },
  initialRouteName: "Home"
}
)
const AppContainer = createAppContainer(AppNavigator);

export default function App() {
  return (
    <AppContainer />
  );
}