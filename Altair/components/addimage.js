import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

//export = public, Component = tag in HTML
export default class AddImage extends Component {
    render(){
        const JSObject = {
            uri:"https://images-na.ssl-images-amazon.com/images/I/71uN35153AL._SL1024_.jpg"
        };
        return(
            //source la prop cua component Image
            <Image  source={JSObject}
                    style={styles.container}
            >
            </Image>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        //marginTop: 5,
        //width: 400,
        //height: 650,
        flex:1
    }
});