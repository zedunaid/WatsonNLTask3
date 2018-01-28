import React from 'react';
import OutputScreen from './src/component';
import HomeScreen from './src/login';
/** Parent to child communication, we use prop. State- component internal record keeping (Update some amount
 *  of data over time) */

import {
  StackNavigator,
} from 'react-navigation';

const wat = StackNavigator({
  Login: { screen: HomeScreen },
  Output: { screen: OutputScreen },
});
 

export default wat;
