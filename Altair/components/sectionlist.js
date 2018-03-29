import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image, AppRegistry, FlatList, ImageBackground,
    Alert, TouchableHighlight, TouchableOpacity, SectionList
} from 'react-native';
import {sectionListData} from '../flatlist/sectionlistdata';
//export = public, Component = tag in HTML
export default class BasicSectionList extends Component {
    constructor(props){
        // super goi contructor cua lop cha-Component
           super(props); 
        
    }
    render(){
        return(
            <View style={styles.styleview}>
                <SectionList
                    renderItem={({item,index})=>{
                        return (<SectionListItem
                                    item={item}
                                    index={index}>
                                </SectionListItem>);
                    }}
                    renderSectionHeader={({section})=>{
                        return(<SectionHeader section={section} />)
                    }}
                    sections={sectionListData}
                    keyExtractor={(item,index)=> item.name}
                >

                </SectionList>
            </View> 
        );
    }
}

class SectionHeader extends Component{
    render(){
        return(
            <View style={styles.style3}>
                <Text style={styles.textstyle}>
                
                {this.props.section.title}</Text>
            </View> 
        );
    }
}
class SectionListItem extends Component{
    render(){
        return(
            <View style={styles.style2}>
                <Text   style={{
                            fontSize:16,
                            fontWeight:'bold',
                            color:'white',
                            marginLeft: 20,
                            marginRight: 10
                }}
                >{this.props.item.name}</Text>
                <Text   style={{
                            fontSize:16,
                            color:'white',
                            marginLeft: 20,
                            marginRight: 10
                }}
                >{this.props.item.description}</Text>
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
        marginTop: Platform.OS === 'ios' ? 34 : 0
    },
    style2: {
        flex: 1, 
        flexDirection: 'column', 
        backgroundColor: 'green'
    },
    style3: {
        flex:1,
        backgroundColor:'blue'
    },
    textstyle:{
        fontSize: 16,
        fontWeight: 'bold',
        color:'white',
        margin: 20
    }
});