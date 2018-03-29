import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

//export = public, Component = tag in HTML
export default class HelloWorld extends Component {
    render(){
        let greeting=`
        You Are Welcome`;
        return(
            <View>
                <Text>HelloWorld</Text>
                <Text>{greeting}</Text>
            </View> 
        );
    }
}