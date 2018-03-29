import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView, AppRegistry,
  TextInput, Dimensions
} from 'react-native';

//export = public, Component = tag in HTML
export default class VerticalScrollView extends Component {
    render(){
        let screenWidth = Dimensions.get('window').width
        return(
            <ScrollView //keyboardDismissMode='on-drag'
                        maximumZoomScale={3}
                        minimumZoomScale={0.2}
                        contentContainerStyle={{paddingLeft: 2}}
            >
                <Image  source={require('../images/1.jpg')}
                        style={{width: screenWidth, height: screenWidth * 1024 / 745, marginTop: 2}}
                ></Image>
                <Text style={styles.textstyle}>Assassin</Text>
                <TextInput  style={styles.style1}
                            placeholder='Enter Comment'
                            placeholderTextColor='gray'
                />
                <View style={styles.styleview}>
                <Text style={styles.textstyle}>Semiramis</Text>    
                </View>
            </ScrollView> 
        );
    }
}

const styles = StyleSheet.create({
    styleview: { 
        height: 50,
        backgroundColor: '#00CC99'
    },
    textstyle: {
        fontSize: 20,
        padding: 15,
        color: 'white',
        textAlign: 'center',
        backgroundColor: 'green'
    },
    style1: {
        padding: 10, 
        margin: 10, 
        borderWidth: 1
    }
});