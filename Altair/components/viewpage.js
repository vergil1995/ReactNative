import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView, AppRegistry,
    TextInput, Dimensions, Alert,
    ViewPagerAndroid
} from 'react-native';

//export = public, Component = tag in HTML
export default class ViewPagerExample extends Component {
    render(){
        return(
            <ViewPagerAndroid   style={{flex:1}}
                                initialPage={2}
                                onPageScroll={(event)=>{
                                    let logData = `offset = ${event.nativeEvent.offset}`;
                                    // console.log(logData);
                                }}
                                onPageScrollStateChanged={(state)=>{
                                    let logData = `State = ${state}`;
                                    //console.log(logData);
                                    // dragging: Tay chạm vào
                                    // settling: Nhấc ra khỏi
                                    // idle: ko chạm vào màn hinh
                                }}
                                onPageSelected={(event)=>{
                                    let logData = `Scrolled to page = ${event.nativeEvent.position}`;
                                    console.log(logData);
                                    // dragging: Tay chạm vào
                                    // settling: Nhấc ra khỏi
                                    // idle: ko chạm vào màn hinh
                                }}
            >
                <View style={styles.styleview}>
                    <Text style={styles.styletext}>Screen 1</Text>
                </View> 
                <View style={{backgroundColor:'lightseagreen'}}>
                    <Text style={styles.styletext}>Screen 2</Text>
                </View> 
                <View style={{backgroundColor:'salmon'}}>
                    <Text style={styles.styletext}>Screen 3</Text>
                </View> 
            </ViewPagerAndroid> 
        );
    }
}

const styles = StyleSheet.create({
    styleviewandroid: {
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center',
        backgroundColor: 'blue'
    },
    styleview: {
        backgroundColor: '#00CC99'
    },
    styletext: {
        fontSize: 20,
        fontWeight: 'bold',
        padding: 15,
        textAlign: 'center', 
        color:'white'
    },
    style3: {
        width: 100, 
        height: 200, 
        backgroundColor: 'red'
    }
});