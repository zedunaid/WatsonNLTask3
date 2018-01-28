
import React from 'react';
import { StyleSheet, Text, View,TextInput,Button } from 'react-native';
import axios from 'axios';


export default class HomeScreen extends React.Component {
    state={statement:'',inp:'text'};
    static navigationOptions = {
      title: 'Welcome',
    };
    /*componentWillMount()
    {
    axios.get('https://app.accumulate65.hasura-app.io/api')
    .then(response =>this.setState({watdata:response.data}));
    }*/
    /*handleStatement = (text) => {
      console.log('insidde handleStatement');
      this.setState({ statement: text })
    }*/
   /*setStart = () => {
    console.log('inside set start');
    if (!this.validateUrl(this.state.statement)) {
      this.setState({ inp: 'text' });
      console.log("Input as text");
    }
   }*/
   validateUrl = (site) => {
     console.log('inside validateUrl');
    var re = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/;
      if(re.test(site))
      { 
        this.setState({ inp: 'url' });
      }
      console.log("Input as text");
  }
    render() {
      const { navigate } = this.props.navigation;
      //console.log(this.state);
      return (
        <View>
          <Text>
          Watson Natural Language Classifier</Text>
          <Text>Find out category of your input</Text>
          <TextInput style={{height: 40}} placeholder="Enter any url or text"  autoCapitalize = "none"
                 onChangeText = {(text) => {
                  this.setState({statement: text})
                  this.validateUrl(text)
              }}>
            </TextInput>
            <Button
              title="Go"
              color='blue'
              onPress={() =>
                navigate('Output', {statement:this.state.statement,inp:this.state.inp})
              }
            />
        </View>
      );
    }

  newMethod() {
    return this;
  }
  }