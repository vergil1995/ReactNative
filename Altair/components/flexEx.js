import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

//export = public, Component = tag in HTML
export default class FlexExample extends Component {
    render(){

        return( 
            <View style={{
                flex:1, 
                flexDirection:'row', //or row
                //margin:20,
                // xuat pha tu diem dau-tren dinh flex-start
                // or flex-end, 
                //space-between or space-around: tự cân khoảng cách
                // center của column or row
                justifyContent: 'center',  
                backgroundColor: 'pink',
                // alignItems ngược với flexDirection theo row-column
                //strech kéo căng ra
                alignItems: 'center'
                }}>
                <Text style={styles.style1}></Text>
                <Text style={styles.style2}></Text>
                <Text style={styles.style3}></Text>
            </View>    
        );
    }
}

const styles = StyleSheet.create({
    style1: {
        width: 50, 
        height: 50, 
        backgroundColor: 'green',
        //marginRight: 5
    },
    style2: {
        width: 50, 
        height: 50, 
        backgroundColor: 'blue',
        //marginRight: 5
    },
    style3: {
        width: 50, 
        height: 50, 
        backgroundColor: 'red',
        //marginRight: 5
    }
});