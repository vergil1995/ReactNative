import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  Alert,
  TouchableHighlight,
  RefreshControl
} from 'react-native';
import flatListData from '../flatlist/dataflat';
import Swipeout from 'react-native-swipeout';
import AddModal from './addmodal';
import EditModal from './editmodal';
import {getServantFromServer} from '../networking/server';
//export = public, Component = tag in HTML
export default class NetworkFlat extends Component {
    constructor(props){
        super(props);
        this.state = {
            // luu lai key cua obj muon xoa
            deleteRowKey: null,
            refreshing: false,
            // luu vao state
            servantsFromServer: []
        };
        // de tro vao ItemFlat chu ko phai Button
        this._onPressButton = this._onPressButton.bind(this);
    }
    componentDidMount(){
        // khi com vua dc khoi tao vua dc render lan dau
        this.refreshDataFromServer();
    }
    refreshDataFromServer = () => {
        // show cai xoay xoay
        this.setState({ refreshing: true });
        // Promise khi nao co kqua thi chui vao day
        getServantFromServer().then((servants) => {
            
            this.setState({ servantsFromServer: servants });
            // co du lieu ko show nua
            this.setState({ refreshing: false });
        }).catch((error) => {
            console.log("Failed");
            this.setState({ servantsFromServer: [] });
            this.setState({ refreshing: false });
        });
    }
    // thay doi State laf refresh
    refreshFlatList = (deletedKey)=>{
        this.setState((prevState)=>{
            return{
                deleteRowKey: deletedKey
            };
        });
        this.refs.flatList.scrollToEnd();
    };
    onRefresh = () => {
        this.refreshDataFromServer();
    }
    _onPressButton = () => {
        //Alert.alert("Button is pressed");
        // ko dinh nghia thi this se tro vao Button
        this.refs.addModal.showAddModal();
    }
    render(){
        return(
            
                <View style={styles.styleview}>
                    <View
                        style={{backgroundColor: 'tomato', height: 64,
                                flexDirection:'row', justifyContent:'flex-end', alignItems:'center'}}>
                        <TouchableHighlight
                            style={{marginRight: 10}}
                            underlayColor='tomato'
                            onPress = {this._onPressButton}>
                            <Image
                                style={{width:35, height: 35}}
                                source={require('../images/Add.png')}
                            ></Image>
                        </TouchableHighlight>
                    </View>
                    <FlatList
                        ref={"flatList"}
                    // danh sach doi tuong vao flat list
                        //data={flatListData}
                        data = {this.state.servantsFromServer}
                    // cac component ra 1 file or class rieng biet
                        renderItem={({item, index})=>{
                            //console.log(`Item = ${JSON.stringify(item)}, index = ${index}`);
                            // tự định nghĩa
                            return (<FlatListItem
                                        item={item}
                                        index={index}
                                        parentFlatList={this}
                                    ></FlatListItem>);
                        }}
                        keyExtractor={(item,index) => item.name}
                        refreshControl={
                            <RefreshControl
                                refreshing = {this.state.refreshing}
                                onRefresh = {this.onRefresh}
                            />
                        }
                    >
                    </FlatList>
                    <AddModal ref={'addModal'} parentFlatList={this}></AddModal>
                    <EditModal ref={'editModal'} parentFlatList={this}></EditModal>
                </View>  
        );
    }
}
// từng hàng trong danh sách
class FlatListItem extends Component {
    constructor(props){
        super(props);
        this.state = {
            // luu lai key cua obj muon xoa
            activeRowKey: null,
            numberOfRefresh: 0,
            // khi co su thay doi state thay doi, render dc goi lai
            item: {}
        };
    }
     // thay doi State laf refresh
     refreshFlatListItem = (changedItem) => {
        // khi thay doi thi Flatlist Item dc render lai
        console.log(`changedItem = ${JSON.stringify(changedItem)}`);
        this.setState({item: changedItem});
        console.log(`item = ${JSON.stringify(this.state.item)}`);
    }
    render(){
        // settings cho swipeout khi thong so nhieu
        const swipeSettings = {
            autoClose: true,
            onOpen: (secId, rowId, direction)=>{
                //set Key trong flat list muon xoa
                this.setState({activeRowKey: this.props.item.key});
            },
            onClose: (secId, rowId, direction)=>{
                // ko xoa thi activeRowKey lai = null
                if(this.state.activeRowKey != null){
                    this.setState({activeRowKey: null});
                }
            },
            right: [
                {
                    //
                    onPress: ()=>{
                        //alert("Update");
                        //this.props.parentFlatList.refs.editModal.showEditModal(flatListData[this.props.index], this);
                        // item la noi luu thay doi uu tien lay state neu thay doi
                        //console.log(`this.state.item = ${JSON.stringify(this.state.item)}`);
                        //prop = netFlatList gui sang
                        let selectedItem = this.state.item.name ? this.state.item : this.props.item;
                        console.log(`this.state.flatlistItem_main = ${this}`);
                        this.props.parentFlatList.refs.editModal.showEditModal(selectedItem, this);
                    },
                    text: 'Edit', type: 'primary' 
                },
                {
                    onPress: ()=>{
                        // key cua hang muon xoa
                        const deletingRow = this.state.activeRowKey;
                        Alert.alert(
                            'Alert',
                            'Are you want to delete ???',
                            [
                                {text: 'No', onPress: () => console.log('No'), style: 'cancel'},
                                {text: 'Yes', onPress: () => {        
                                flatListData.splice(this.props.index, 1); 
                                //Refresh FlatList ! 
                                this.props.parentFlatList.refreshFlatList(deletingRow);
                              }},
                            ],
                            // bam ra ngoai thi tut alert xuong
                            {cancelable: true}
                        );
                    },
                    text: 'Delete', type: 'delete' 
                }
            ],
            // rowID = index cua FlatListItem
            rowId: this.props.index,
            sectionId: 1
        };
        return(
            <Swipeout {...swipeSettings}>
                <View   style={{flex:1,
                        flexDirection:'column'
                    }}>
                    <View style={{flex:1,
                            //backgroundColor: this.props.index % 2 == 0 ? 'mediumseagreen': 'tomato',
                            backgroundColor: 'mediumseagreen',
                            flexDirection:'row'
                            }}>
                        <Image 
                            source={{uri:'http://' + this.props.item.imageUrl}}
                            style={{width:100, height:100, margin:5 }}
                        ></Image>
                        <View style={{flex:1, flexDirection:'column'}}>
                            <Text style={styles.styletext}>{this.state.item.class ? this.state.item.class : this.props.item.class}</Text>
                            <Text style={styles.styletext}>{this.state.item.name ? this.state.item.name : this.props.item.name}</Text>
                        </View>  
                    </View>
                            
                    <View style={{height:1,
                                backgroundColor: 'white'}}>

                    </View> 
                </View>    
            </Swipeout>   
        );
    }

}


const styles = StyleSheet.create({
    styleview: {
        flex: 1, 
        marginTop: Platform.OS === 'ios' ? 34 : 0
        
    },
    styletext: {
        color: 'white', 
        padding: 10,
        fontSize: 16
        
    }
    
});
