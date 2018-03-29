import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

//export = public, Component = tag in HTML
export default class FixedDms extends Component {
    render(){

        return( 
            <View>
                <View style={styles.style1}></View>
                <View style={styles.style2}></View>
                <View style={styles.style3}></View>
            </View>
            
        );
    }
}

const styles = StyleSheet.create({
    style1: {
        width: 100, 
        height: 200, 
        backgroundColor: 'green'
    },
    style2: {
        width: 100, 
        height: 200, 
        backgroundColor: 'blue'
    },
    style3: {
        width: 100, 
        height: 200, 
        backgroundColor: 'red'
    }
});