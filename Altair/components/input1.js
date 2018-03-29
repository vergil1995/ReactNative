import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Keyboard
} from 'react-native';

//export = public, Component = tag in HTML
export default class Input1 extends Component {
    constructor(props){
        // super goi contructor cua lop cha-Component
           super(props); 
           // lưu biến được đánh vào. Chỉ trong này mới dùng được this.state
           this.state = {
               typedText: 'plz type your text',
               typedPass: 'plz type your text'
           };
        
    }
    componentWillMount () {
        this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', ()=>{
            this.setState(() => {
                return {typedText: 'Keyboard is shown'}
            })
        });
        this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => {
          this.setState(() => {
              return {typedText: 'Keyboard Hide'};
          });
        });
    }
  
    componentWillUnmount () {
        this.keyboardDidShowListener.remove();
        this.keyboardDidHideListener.remove();
    }
    render(){

        return(
            <View>
                <TextInput  style={styles.style1}
                            keyboardType='email-address'
                            placeholder='Enter key'
                            placeholderTextColor='gray'
                            //autoFocus={true}
                            onChangeText={
                                (text) => {
                                    input: text
                                    //this.state = // fail
                                    this.setState(
                                        // input: previousState
                                        (previousState) => {
                                            return{
                                                // luu lai vao typedText
                                                typedText: text
                                            };

                                        }
                                    );
                                }
                            }
                />
                <Text style={styles.marginstyle}>{this.state.typedText}</Text>
                <TextInput  style={styles.style1}
                            keyboardType='default'
                            placeholder='Enter pass'
                            placeholderTextColor='gray'
                            secureTextEntry={true}
                />
                <TextInput  style={styles.style2}
                            keyboardType='default'
                            placeholder='Enter line'
                            placeholderTextColor='gray'
                            multiline={true}
                            borderBottomColor='green'
                            borderBottomWidth={3}
                            borderLeftColor="green"
                            borderLeftWidth={3}
                            editable={true}
                            returnKeyType='done'
                            onSubmitEditing={Keyboard.dismiss}
                            
                />
            </View> 

        );
    }
}

const styles = StyleSheet.create({
    style1: {
        margin: 20, 
        height: 40,
        borderColor: 'pink', 
        borderWidth: 1,
        padding: 10
    },
    style2: {
        margin: 20, 
        height: 100,
        //borderColor: 'pink', 
        borderWidth: 1,
        padding: 10
    },
    marginstyle: {
        margin: 20
    }
    
});