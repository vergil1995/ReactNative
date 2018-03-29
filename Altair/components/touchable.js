import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image, Alert,
  // change color when press button
  TouchableHighlight,
  // set mau so voi Foreground
  TouchableNativeFeedback,
  // Press thi lam mo`
  TouchableOpacity,
  TouchableWithoutFeedback
} from 'react-native';

//export = public, Component = tag in HTML
export default class Touchablee extends Component {
    _onPressButton = () => {
        Alert.alert("Button is pressed");
    }
    _onShowUnderlay = () => {
        Alert.alert("on Show Underlay");
    }
    _onPressIn = () => {
        Alert.alert("_onPressIn");
    }
    _onPressOut = () => {
        Alert.alert("_onPressOut");
    }
    _onLongPress = () => {
        Alert.alert("_onLongPress");
    }
    render(){
        return(
            <View style={styles.styleview}>
            
                <TouchableHighlight underlayColor='pink'
                                    onPress={this._onPressButton}
                                    onShowUnderlay={this._onShowUnderlay}>
                    <View style={styles.styleImage}>
                        {/* <Text style={styles.styleText}>TouchableHighlight</Text> */}
                        <Image  style={styles.styleImage}
                                source={require('../images/touchable.png')}></Image>
                    </View>
                </TouchableHighlight>
                
                <TouchableNativeFeedback onPress={this._onPressButton}
                                         useForeground={false}
                >
                <View style={styles.style1}>
                    <Text style={styles.text2}>TouchableNativeFeedback OnlyAndroid
                    </Text>
                </View>
                </TouchableNativeFeedback>

                <TouchableOpacity onPress={this._onPressButton}
                                  activeOpacity={0.7}>
                <View style={styles.sopacity}>
                    <Text style={styles.text3}>TouchableOpacity</Text>
                </View>
                </TouchableOpacity>

                <TouchableWithoutFeedback   onPress={this._onPressButton}
                                            onPressIn={this._onPressIn}
                                            onPressOut={this._onPressOut}
                                            //disabled={true}  
                                            onLongPress={this._onLongPress}
                >
                <View style={styles.outback}>
                    <Text style={styles.text3}>TouchableWithoutFeedback</Text>
                </View>
                </TouchableWithoutFeedback>

            </View> 
        );
    }
}

const styles = StyleSheet.create({
    styleview: {
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center',
        backgroundColor: '#00CC99',
    },
    styleText:{
        color:'white',
        padding: 20,
        fontSize: 18    
    },
    styleImage:{
        width: 150,
        height: 40   
    },
    style1:{
        width: 300,
        height: 60,
        margin: 20,
        backgroundColor: 'orange'
    },
    sopacity:{
        width: 200,
        height: 50,
        margin: 20,
        backgroundColor: 'violet'
    },
    outback:{
        width: 250,
        height: 50,
        margin: 20,
        backgroundColor: 'yellow'
    },
    text2:{
        color:'white',
        textAlign: 'center',
        fontSize: 18,
        margin: 10    
    },
    text3:{
        color:'black',
        textAlign: 'center',
        fontSize: 18,
        margin: 10    
    }


});