import React from 'react';
import { StyleSheet, Text, View,TextInput } from 'react-native';
import axios from 'axios';
/** Parent to child communication, we use prop. State- component internal record keeping (Update some amount
 *  of data over time) */
export default class OutputScreen extends React.Component {
  constructor(props) {
    super(props);
    this.renderCategory = this.renderCategory.bind(this);
    this.state={watdata:[]};
}

  componentWillMount()
  {
    const {state} = this.props.navigation;
    
  axios.post('https://app.accumulate65.hasura-app.io/api2',
  {
     username:'Zedunaid',
    type:state.params.inp,
    input:state.params.statement
   })
 .then(response =>this.setState({watdata:Object.values(response.data)})) 
 .catch(error => {
  console.log(error.response)
});

  }
  renderCategory()
  {
  /* return this.state.watdata.map((data) => data.categories.map((category)=>(<Text>{category[1].label}</Text>)));*/
   /*return this.state.watdata.map((data)=>data.Object.categories.map((category)=>(<Text>{category[1].label}</Text>)));*/
   
   return this.state.watdata.map((data)=>(<View style={{marginLeft:5}}>
   <Text>{String(data[0].label).substring(String(data[0].label).lastIndexOf("/") + 1, String(data[0].label).length)}                                {parseFloat(String(data[0].score)).toFixed(4)*100} %</Text>
   <Text>{String(data[1].label).substring(String(data[1].label).lastIndexOf("/") + 1, String(data[1].label).length)}                                {parseFloat(String(data[1].score)).toFixed(4)*100} %</Text>
   <Text>{String(data[2].label).substring(String(data[2].label).lastIndexOf("/") + 1, String(data[2].label).length)}                                {parseFloat(String(data[2].score)).toFixed(4)*100} %</Text>
   </View>));
      
  
  }
 
 
  render() {
    console.log(this.state);
    if(!this.state.watdata){
      return null;
  }
    return (
      <View>
         <Text style={{fontWeight:"bold",marginLeft:5}}>Your Results: </Text>
        <Text style={{fontWeight:"bold",marginLeft:5}}>Category Name                Confidence</Text>
        <View>{this.renderCategory()}</View>
      </View>
    );
  }
}