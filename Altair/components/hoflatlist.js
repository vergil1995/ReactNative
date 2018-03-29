import React, { Component } from 'react';
import {
    AppRegistry,
    FlatList, StyleSheet, Text, View, Image, ImageBackground,
    Alert, Platform, TouchableHighlight, TouchableOpacity
} from 'react-native';

import { horizontalStatus } from '../flatlist/hordataflat';
import { horizontalFlatListData } from '../flatlist/hordataflat';

//import Icon from 'react-native-vector-icons/Ionicons';
//export = public, Component = tag in HTML
export default class HorizontalFlatList extends Component {
    constructor(props){
        // super goi contructor cua lop cha-Component
           super(props); 
        
    }
    render(){
        return(
            <View style={styles.styleview}>
                <View   style={{position: 'absolute',// toan man hinh
                                top: 0, bottom: 0, right: 0, left: 0
                }}>
                    <Image  style={{flex:1,
                                    flexDirection:'column',
                                    width: null, height: null,
                                    backgroundColor:'transparent', // ko co mau nen
                                    justifyContent: 'center'}}
                            source={require('../images/A.jpg')}
                    
                    ></Image>
                </View>
                <Text   style={{fontSize: 16, fontWeight:'bold',
                                color: 'black', backgroundColor: 'transparent',
                                margin: 10}}
                >Weather forecast</Text>
                <View style={{height: 150}}>
                    <FlatList
                        style = {{
                            backgroundColor: 'black',
                            opacity: 0.5,
                        }}
                        horizontal={true}
                        data={horizontalFlatListData}
                        // cac item se la tung obj trong list tren
                        renderItem={({item, index})=>{
                            return (
                                <HorizontalFlatListItem
                                    item = {item}
                                    index = {index}
                                    parentFlatList = {this}
                                >
                                </HorizontalFlatListItem>
                            );
                        }}
                        keyExtractor={(item,index)=>item.hour}
                    ></FlatList>
                </View>
            </View> 
        );
    }
}
class HorizontalFlatListItem extends Component{
    render(){
        return(
            <View style={styles.style2}>
                <TouchableOpacity   style={{position: 'absolute',// toan man hinh item
                                    top: 0, bottom: 0, right: 0, left: 0}}

                                    onPress={()=>{
                                        alert(`you pressed: ${this.props.item.hour}`);
                                    }}

                ></TouchableOpacity>
                <Text style={{
                    fontSize: 16,
                    fontWeight: 'bold',
                    color: 'white',
                    margin: 20
                }}>{this.props.item.hour}</Text>  
                
                <Text style={{
                    fontSize: 16,
                    color: 'white',
                    margin: 10
                }}>{this.props.item.degrees} ℉</Text>   
                 
            </View>  
        );
    }
}
//<Icon name={(Platform.OS === 'ios') ? this.props.item.status.ios : this.props.item.status.android}
// size={30}
// color='white'></Icon>
const styles = StyleSheet.create({
    styleview: {
        flex: 1, 
        flexDirection: 'column',
        marginTop: Platform.OS === 'ios' ? 34 : 0
    },
    style2: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        width: 90,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'grey',
        margin: 4
    },
    textstyle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white',
        margin: 20
    }
});