import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  FlatList
} from 'react-native';
import flatListData from '../flatlist/dataflat'
//export = public, Component = tag in HTML
export default class BasicFlatList extends Component {
    render(){
        return(
            <View style={styles.styleview}>
                <FlatList
                // danh sach doi tuong vao flat list
                    data={flatListData}
                // cac component ra 1 file or class rieng biet
                    renderItem={({item, index})=>{
                        //console.log(`Item = ${JSON.stringify(item)}, index = ${index}`);
                        // tự định nghĩa
                        return (<FlatListItem
                                    item={item}
                                    index={index}
                                ></FlatListItem>);
                    }}
                >

                </FlatList>
            </View> 
        );
    }
}
// từng hàng trong danh sách
class FlatListItem extends Component {
    render(){
        return(
            <View   style={{flex:1,
                    flexDirection:'column'
                }}>
                <View style={{flex:1,
                          //backgroundColor: this.props.index % 2 == 0 ? 'mediumseagreen': 'tomato',
                          backgroundColor: 'mediumseagreen',
                          flexDirection:'row'
                          }}>
                    <Image 
                        source={{uri: this.props.item.image}}
                        style={{width:100, height:100, margin:5 }}
                    ></Image>
                    <View style={{flex:1, flexDirection:'column'}}>
                        <Text style={styles.styletext}>{this.props.item.class}</Text>
                        <Text style={styles.styletext}>{this.props.item.name}</Text>
                    </View>  
                </View>
                           
                <View style={{height:1,
                              backgroundColor: 'white'}}>

                </View> 
            </View>

            
        );
    }

}
const styles = StyleSheet.create({
    styleview: {
        flex: 1, 
        marginTop: 2
        
    },
    styletext: {
        color: 'white', 
        padding: 10,
        fontSize: 16
        
    }
    
});