import React from 'react';
import {
    Button
}from 'react-native'
import StandardNavigation from './standardNavigation';

//copy rights Mayuran Kunarajah
export interface HomeNavigationParams {
  name : string
 
}
interface Props {
  navigation: StandardNavigation<HomeNavigationParams>,
}
  
class Home extends React.Component<Props>{
  constructor(props: Props) {
    super(props);
  }
    render(){
        return(
            <Button title='click me' onPress={() => {
                this.props.navigation.navigate(
                  'Details',
                  {
                    'name': 'Mayu'
                  }
                  )
      
            }}/>
        )
    }
}

export default Home;