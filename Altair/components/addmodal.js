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
import {insertNewServantFromServer} from '../networking/server';

var screen = Dimensions.get('window');
//export = public, Component = tag in HTML
export default class AddModal extends Component {
    constructor(props){
        // super goi contructor cua lop cha-Component
           super(props); 
           this.state={
                Sername: '',
                Serclass: ''
           };
        
    }
    showAddModal=()=>{
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
                <Text style={styles.styletext}>New Servant Information</Text>
                <TextInput  style={styles.styleinput}
                            placeholder="Enter Servant Name"
                            value={this.state.Sername}
                            onChangeText={(text)=> this.setState({Sername: text})}
                />
                <TextInput  style={styles.styleinput}
                            placeholder="Enter Servant Class"
                            value={this.state.Serclass}
                            onChangeText={(text)=> this.setState({Serclass: text})}
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
                        const newkey = this.generateKey(24);
                        const newServant={
                            key: newkey,
                            name: this.state.Sername,
                            class: this.state.Serclass,
                            //image: ""
                        };
                        //flatListData.push(newServant);
                        //this.props.parentFlatList.refreshFlatList(newkey);
                        insertNewServantFromServer(newServant).then((result)=>{
                            if(result === 'ok'){
                                this.props.parentFlatList.refreshDataFromServer();
                            }
                        });
                        this.refs.myModal.close();
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