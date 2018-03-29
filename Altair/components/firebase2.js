import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    TextInput,
    Image, AppRegistry, FlatList, ImageBackground,
    Alert, TouchableHighlight, TouchableOpacity
} from 'react-native';
//import * as firebase from 'firebase';
import {firebaseApp} from '../config/firebase';
//import firebase from 'react-native-firebase';
import Button from 'react-native-button';
import { error } from 'util';
import FBSDK,{ AccessToken, LoginManager, LoginButton } from 'react-native-fbsdk';
import {GoogleSignin} from 'react-native-google-signin';

//export = public, Component = tag in HTML
export default class BasicFireBase extends Component {
    constructor(props){
        // super goi contructor cua lop cha-Component
           super(props); 
           // quan sat thay doi user
           this.unsubcriber = null;
           this.state = {
               isAuthenticated: false,
               typedEmail: '',
               typedPass: '',
               user: null 
           };
        
    }
    componentDidMount(){
        this.unsubcriber = firebaseApp.auth().onAuthStateChanged((changeduser)=>{
            this.setState({user: changeduser});
        });
    }
    componentWillUnmount(){
        if(this.unsubcriber){
            this.unsubcriber();
        }
        GoogleSignin.hasPlayServices({autoResolve: true});
        GoogleSignin.configure({
            webClientId: '859119399264-rpjasmgdf0qmt78unoe70tvmni012tkq.apps.googleusercontent.com'
            //859119399264-rpjasmgdf0qmt78unoe70tvmni012tkq.apps.googleusercontent.com
            

        })
    }
    onAnonymous = () => {
        firebaseApp.auth().signInAnonymously()
        .then(() => {
            console.log('Login OK');
            this.setState({
                // render dc goi lai khi state thay doi
                isAuthenticated: true
            });
        })
        .catch((error)=>{
            console.log(`Login Failed. Error = ${error}`);
        })
    }
    onRegister = () => {
        firebaseApp.auth().createUserWithEmailAndPassword(this.state.typedEmail, this.state.typedPass)
        .then((loginuser) =>{
            this.setState({user: loginuser});
            console.log(`Register with user ${JSON.stringify(loginuser.toJSON())}`);

        })
        .catch((error)=>{
            console.log(`Login Failed. Error = ${error}`);
        })

    }
    onLogin = () => {
        firebaseApp.auth().signInWithEmailAndPassword(this.state.typedEmail, this.state.typedPass)
        .then((loginuser) =>{
            
            //console.log(`Login with user ${JSON.stringify(loginuser.toJSON())}`);
            console.log("Login OKKKKKK");
        })
        .catch((error)=>{
            console.log(`Login Failed. Error = ${error}`);
        })
    }
    onLoginFacebook = () => {
        LoginManager
            .logInWithReadPermissions(['public_profile', 'email'])
            .then((result) => {
                // lay access token
                if (result.isCancelled) {
                    return Promise.reject(new Error('The user cancelled the request'));
                }
                console.log(`Login success with permissions: ${result.grantedPermissions.toString()}`);
                // get the access token
                return AccessToken.getCurrentAccessToken();
            })
            .then(data => {
                // tao credential tu access token. la key login firebase
                const credential = firebaseApp.auth.FacebookAuthProvider.credential(data.accessToken);      
                return firebaseApp.auth().signInWithCredential(credential);
            })
            .then((currentUser) => {
                console.log(`Facebook Login with user : ${JSON.stringify(currentUser.toJSON())}`);            
            })
            .catch((error) => {
                console.log(`Facebook login fail with error: ${error}`);
            });
    }
    onLoginGoogle = ()=>{
        console.log("Sign In Google");
        GoogleSignin
        .signIn()
        .then((data)=>{
            const credential = firebaseApp.auth.GoogleAuthProvider.credential(data.idToken, data.accessToken);      
                return firebaseApp.auth().signInWithCredential(credential);
        })
        .then((currentUser)=>{
            console.log(`Google Login with user : ${JSON.stringify(currentUser.toJSON())}`);  
        })
        .catch((error) => {
            console.log(`Google login fail with error: ${error}`);
        });
    }

    render(){
        return(
            <View style={styles.styleview}>
                <Button containerStyle={{
                    padding: 10,
                    borderRadius: 4,
                    backgroundColor: 'white'

                }}
                        style = {{fontSize: 18, color: 'blue'}}
                        onPress = {this.onAnonymous}
                >
                Login Anonymous
                </Button>
                <Text style={{margin: 20, fontSize: 15}}
                >{this.state.isAuthenticated == true ? "Login in anonymous ": ""}</Text>
                <TextInput 
                    style={styles.styleinput}
                    keyboardType="email-address"
                    placeholder="Enter Email"
                    autoCapitalize='none'
                    onChangeText={
                        (text)=>{
                            this.setState({typedEmail: text});
                        }
                    }
                />
                <TextInput 
                    style={styles.styleinput}
                    keyboardType="default"
                    placeholder="Enter Password"
                    secureTextEntry={true}
                    onChangeText={
                        (text)=>{
                            this.setState({typedPass: text});
                        }
                    }
                />
                <View style={{flexDirection: 'row'}}>
                    <Button containerStyle={styles.styleButton}
                            style = {{fontSize: 17, color: 'white'}}
                            onPress={this.onRegister}
                    >Register</Button>
                    <Button containerStyle={styles.styleButton}
                            style = {{fontSize: 17, color: 'white'}}
                            onPress = {this.onLogin}
                    >Login</Button>
                </View>
                <Button containerStyle={{
                    padding: 10,
                    width: 150,
                    margin: 20,
                    borderRadius: 4,
                    backgroundColor: 'rgb(73,104,173)'
                }}
                    style={{ fontSize: 18, color: 'white' }}
                    onPress={this.onLoginFacebook}
                >Login Facebook</Button>
                <Button containerStyle={{
                    padding: 10,
                    width: 150,
                    margin: 20,
                    borderRadius: 4,
                    backgroundColor: 'rgb(73,104,173)'
                }}
                    style={{ fontSize: 18, color: 'white' }}
                    onPress={this.onLoginGoogle}
                >Login Google</Button>
            </View> 
        );
    }
}

const styles = StyleSheet.create({
    styleview: {
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center',
        backgroundColor: '#00CC99',
        marginTop: Platform.OS === 'ios' ? 34 : 0
    },
    styleinput: {
        width: 200, 
        height: 40, 
        margin: 10,
        padding: 10,
        borderColor: 'gray',
        borderWidth: 1,
        color: 'black'
        
    },
    styleButton: {
        padding: 10,
        margin: 10,
        borderRadius: 4,
        backgroundColor: 'blue'
    }
});