import React from 'react';
import { StyleSheet, Text, View,TextInput } from 'react-native';
import axios from 'axios';
/** Parent to child communication, we use prop. State- component internal record keeping (Update some amount
 *  of data over time) */
export default class OutputScreen extends React.Component {
  state={watdata:[]};
  componentWillMount()
  {
    const {state} = this.props.navigation;
    
  axios.post('https://app.accumulate65.hasura-app.io/api',
  {
     username:'Zedunaid',
    type:state.params.inp,
    input:state.params.statement
   })
  .then(response =>this.setState({watdata:response.data}))
  .catch(error => {
    console.log(error.response)
});
  }
 
 
  render() {
    console.log(this.state);
    
    return (
      <View>
         <Text>Your Category: </Text>
        <Text>Name: </Text>
      </View>
    );
  }
}