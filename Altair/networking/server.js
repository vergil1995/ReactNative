import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image, AppRegistry, FlatList, ImageBackground,
    Alert, TouchableHighlight, TouchableOpacity
} from 'react-native';

const apiGetAll = 'http://192.168.1.20:3000/list_all_servant';
const apiInsertNewServant = 'http://192.168.1.20:3000/insert_new_servant';
const apiUpdateAServant = 'http://192.168.1.20:3000/update_a_servant';
// gui data len server va lay du lieu ve
// ko dong bo
// chay den khi co kqua thi quay lai kay ket qua
async function getServantFromServer() {
    try {
        //await la doi den khi xong moi den dong tiep theo
        let respone = await fetch(apiGetAll);
        let responeJSON = await respone.json();
        // tra ve truong trong API get list all servant
        return responeJSON.data;
    } catch (error) {
        console.error(`Error is : ${error}`);
    }
}

async function insertNewServantFromServer(params) {
    // phai co try catch vi ko kiem soat dc
    try {
        let response = await fetch(apiInsertNewServant, {
            // fetch option
            method: 'POST',
            headers: {
                //json
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            // body phai chuyen sang string khi gui di
            body: JSON.stringify(params)
        });
        // lay du lieu hien tra ve tu server
        let responseJson = await response.json();
        return responseJson.result; 
    } catch (error) {
        console.error(`Error is : ${error}`);
    }

}

async function updateAServant(params) {
    console.log("Fail 3");
    try {
        let response = await fetch(apiUpdateAServant, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',                
            },
            body: JSON.stringify(params)
        }); 
        let responseJson = await response.json();
        console.log(responseJson.result);                
        return responseJson.result; 
    } catch (error) {
        console.error(`Error is : ${error}`);
    }
}
export {getServantFromServer};
export {insertNewServantFromServer};
export {updateAServant};