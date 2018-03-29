import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

//export = public, Component = tag in HTML
export default class FlexDimension extends Component {
    render(){

        return( 
            <View style={{flex:1}}>
                <View style={{flex: 80, backgroundColor:'pink'}}></View>
                <View style={{flex: 20, backgroundColor:'green'}}></View>
            </View>
            
        );
    }
}