import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

//export = public, Component = tag in HTML
export default class MultiGreeting extends Component {
    render(){
        return(
            <View
                style = {{alignItems:'center'}}
            >
            <Greeting name = "Assassin"></Greeting>  
            <Greeting name = "Semiramis"></Greeting>   
            </View>
            
        );
    }
}

// private
class Greeting extends Component {
    render(){
        // Them $ neu bien la String
        let greetString = `
        Servant ${ this.props.name }`;
        return(
            <Text>{greetString}</Text>
        );
    }
}