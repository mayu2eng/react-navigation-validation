import React from 'react';
import {
    Text
}from 'react-native'
import { HomeNavigationParams } from './Home';
import StandardNavigation from './standardNavigation';

  interface Props {
    navigation: StandardNavigation<HomeNavigationParams>
  }
  
class Details extends React.Component<Props>{
    render(){
        return(
          <Text>
            {this.props.navigation.getParam('name')}
          </Text>

        )
    }
}

export default Details;