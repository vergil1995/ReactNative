import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView, AppRegistry,
  TextInput, Dimensions, Alert
} from 'react-native';

//export = public, Component = tag in HTML
export default class HorizontalScrollView extends Component {
    render(){
         let screenWidth = Dimensions.get('window').width;
         let screenHeight = Dimensions.get('window').height;
        return(
            <ScrollView //keyboardDismissMode='on-drag'
                        horizontal={true}
                        pagingEnabled={true}
                        showsHorizontalScrollIndicator={true}
                        scrollIndicatorInsets={{top:10, bottom:10, left: 10, right: 10}}//IOS
                        onMomentumScrollBegin={()=>{
                            //alert('Begin Scrolling')
                        }}
                        onMomentumScrollEnd={()=>{
                            //alert('End Scrolling')
                        }}
                        // doi tượng mà tay bấm xuống
                        onScroll={(event)=>{
                            let logData = `Scrolled to x = ${event.nativeEvent.contentOffset.x}, y = ${event.nativeEvent.contentOffset.y}`;
                            console.log(logData);
                        }}
                        // 10 ms update tọa độ 1 lần
                        scrollEventThrottle={10}
                        >
                <View style={styles.styleview}>
                    <Text style={styles.textstyle}>Main Page</Text>          
                </View>

                <View style={styles.styleview}>
                <Image  source={require('../images/1.jpg')}
                        style={{width: screenWidth, height: screenWidth * 1024 / 745, marginTop: 2}}
                ></Image> 
                <Text style={styles.comment}>Semiramis</Text>          
                </View>

                <View style={styles.styleview}>
                <Image  source={require('../images/2.jpg')}
                        style={{width: screenWidth, height: screenWidth * 858 / 592, marginTop: 2}}
                ></Image> 
                <Text style={styles.comment}>Achilles</Text>          
                </View>
            </ScrollView> 
        );
    }
}

const styles = StyleSheet.create({
    styleview: {
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center',
        backgroundColor: '#00CC99',
        margin:2,
        width: Dimensions.get('window').width
    },
    textstyle: {
        fontSize: 20,
        padding: 15,
        color: 'white',
        textAlign: 'center',
        backgroundColor: 'green'
    },
    comment: {
        width: Dimensions.get('window').width,
        padding: 15,
        color: 'white',
        textAlign: 'center',
        backgroundColor: 'green'
    }
});