import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  Alert
} from 'react-native';
import Button from 'react-native-button';
//export = public, Component = tag in HTML
export default class Touch1 extends Component {
    _onPressButton = () => {
        Alert.alert("Button is pressed");
    }
    render(){

        return(
            <View style={styles.styleview}>
                <Button style={styles.stylebutton}
                        onPress={this._onPressButton}
                >
                This is a Button
                </Button>
                { //IOS
                    /* <View style={styles.stylebutton}>
                    <Button onPress={this._onPressButton}
                    title="This is a button"
                    color='red'>
                    </Button>
                </View> */}
            </View> 

        );
    }
}

const styles = StyleSheet.create({
    styleview: {
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center',
        
    },
    stylebutton: {
        //Android
        color: 'white',
        fontSize: 25,
        ////////////////
        backgroundColor: 'green',
        padding: 15,
        ////// IOS
        // bor vien
        borderRadius: 16,
        // bong đổ
        shadowRadius: 20,
        // mức độ mờ
        shadowOpacity: 0.5,
       
    }
    
});