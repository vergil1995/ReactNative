import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TextInput
} from 'react-native';
import Modal from 'react-native-modalbox';
import Button from 'react-native-button';
import flatListData from '../flatlist/dataflat';
import {updateAServant} from '../networking/server';

var screen = Dimensions.get('window');
//export = public, Component = tag in HTML
export default class EditModal extends Component {
    constructor(props){
        // super goi contructor cua lop cha-Component
           super(props); 
           this.state={
                Sername: '',
                Serclass: ''
                //flatListItem: []
           };
        
    }
    showEditModal=(editingSer, flatListItem)=>{
        console.log(`this.state.flatlistItem_main2 = ${flatListItem}`);
        console.log(`editingSer = ${JSON.stringify(editingSer)}`); 
        console.log(` ${editingSer._id}`); 
        this.setState({
            //key: editingSer.key,
            key: editingSer._id,
            Sername: editingSer.name,
            Serclass: editingSer.class,
            flatListItem: flatListItem
            
        });
        
        //console.log(`this.state.flatlistItem_main3 = ${this.getState(this.Sername)}`);
        
        this.refs.myModal.open();
    }
    generateKey= (numberOfCharacters)=>{
        return require('random-string')({length: numberOfCharacters}); 
    }
    render(){
        return(
            <Modal
            // tao 1 ten bien cho comp Modal tro den chinh obj Modal do
                ref={"myModal"}
                style={{
                    justifyContent:'center',
                    borderRadius: Platform.OS === 'ios' ? 30:0,
                    shadowRadius:10,
                    width: screen.width-80,
                    height: 320
                }}
                position='center'
                backdrop={true}
                onClosed={()=>{
                    //alert("Modal Closed");
                }}
            >
                <Text style={styles.styletext}>Servant Information</Text>
                <TextInput  style={styles.styleinput}
                            onChangeText={(text)=> this.setState({Sername: text})}
                            placeholder="Enter Servant Name"
                            value={this.state.Sername}
                            
                />
                <TextInput  style={styles.styleinput}
                            onChangeText={(text)=> this.setState({Serclass: text})}
                            placeholder="Enter Servant Class"
                            value={this.state.Serclass}
                            
                />
                <Button
                    style={{fontSize: 18, color:'white'}}
                    containerStyle={{
                        padding: 8,
                        marginLeft: 70,
                        marginRight: 70,
                        height: 40,
                        borderRadius: 6,
                        backgroundColor: 'mediumseagreen'
                    }}
                    onPress={()=>{
                        if(this.state.Serclass.length == 0 || this.state.Sername.length == 0){
                            alert("You must enter information");
                            return;
                        }
                        // Update existing
                        // var foundIndex = flatListData.findIndex(item=> this.state.key == item.key);
                        // if( foundIndex < 0){
                        //     return;// not found
                        // }
                        // flatListData[foundIndex].name = this.state.Sername;
                        // flatListData[foundIndex].class = this.state.Serclass;
                        
                        // khi go vao text input va gui len server
                        let params = {
                            servant_id: this.state.key,
                            name: this.state.Sername,
                            class: this.state.Serclass
                        };
                        
                        updateAServant(params).then((result) => {                            
                            console.log(`this.state.sername = ${this.state.key}`);
                            let itemm = {
                                _id: this.state.key,
                                name: this.state.Sername,
                                class: this.state.Serclass
                            };
                            console.log(`${JSON.stringify(itemm)}`);
                            if (result === 'ok') {
                                this.state.flatlistItem.refreshFlatListItem(itemm);          
                                this.refs.myModal.close();                          
                            }
                        }).catch((error) => {                            
                            console.log(`error = ${error}`);   
                            this.refs.myModal.close();                          
                        });
                        // //Refresh
                        //this.state.flatListItem.refreshFlatListItem();
                        //this.refs.myModal.close();
                    }}
                >Save</Button>
            </Modal>
        );
    }
}

const styles = StyleSheet.create({
    styleview: {
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center',
        backgroundColor: '#00CC99'
    },
    styletext: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 20
    },
    styleinput: {
        height: 40,
        borderBottomColor: 'gray',
        marginLeft: 30,
        marginRight: 30,
        marginTop: 30,
        marginBottom: 30,
        borderBottomWidth:1
    },
    stylebutt: {

    }
});