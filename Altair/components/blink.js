import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

//export = public, Component = tag in HTML
class Blink extends Component {
    constructor(props){
    // super goi contructor cua lop cha-Component
       super(props); 
    // state la private chi set duoc trong contructor, goi ngoai thi Get-Set
       this.state = {
            showText:true
       };
       // ArrowFunc Ben trai-param input. Ben phai-phan thuc thi
       var taskToDo = () => {
            //this.state = "blahbla";       fail
            this.setState(previousState => {
                return {
                    showText: !previousState.showText
                };
            });
       };
       const timeToBlink = 1000;    //1000 ms
       // Lap lai thuc hien sau 1 khoang thoi gian
       setInterval(taskToDo, timeToBlink);
    }
    // Ham render tu dong duoc update
    render(){
        // Sau khi trang thai thay doi, comp se render
        let textToDisplay = this.state.showText ? this.props.inputText : " "; 
        return(
            <Text>{textToDisplay}</Text>    
        );
    }
}

export default class TextBlink extends Component {
    render(){
        
        return(
            <View>
                <Blink inputText='Hello'></Blink>
                <Blink inputText='Hi'></Blink>
            </View>   
        );
    }
}