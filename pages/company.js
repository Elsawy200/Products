import *as React from 'react'
import {
    StyleSheet,
    Text,
    Image,
    ImageBackground,
    TextInput,
    View,
    TouchableOpacity,
    TouchableHighlight,
    Alert,
    ScrollView,
    Button,
    EventSubscriptionVendor,
    Modal,
    Dimensions,
    FlatList,
    PermissionsAndroid,
    AsyncStorage,
    StatusBar,
    SafeAreaView,
}
    from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import Iconn from 'react-native-vector-icons/Ionicons';
import { Fumi } from 'react-native-textinput-effects';

import Search from 'react-native-search-box';
const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;


export default class Company extends React.Component {

    constructor(props) {


        super(props)
        this.state = {

            name: 'Company name',
            img:require("../images/sto.png")


        }

    }



    render() {



        return (
            <>

                <StatusBar backgroundColor="grey" />

                <View style={style.label_con}>
                    <TouchableOpacity>
                        <Icon style={style.icon_left} name="angle-left" />
                    </TouchableOpacity>
                    <Text style={style.txt_label}>My Company</Text>
                </View>


                <View style={style.view_img}>
                   <Image  style={style.img} source={this.state.img}/>
                  
                </View>
                
                <Text style={style.name}>{this.state.name}</Text>

                <View style={style.location}>
                  <Icon  style={{
                      marginTop:height*0.004,
                      marginLeft:width*0.02
                  }} name="map-marker"/>
                  <Text style={style.txt_loc}>Cairo Egypt</Text>
                </View>


                <TouchableOpacity activeOpacity={0.7} style={style.container2}>
                    <View style={style.view_con}>
                        <Icon name="info" style={{
                            marginLeft: width * 0.03,
                            marginTop: height * 0.01
                        }} size={23} />
                        <Text style={style.order}>Edit Company Info</Text>
                    </View>
                    <View style={style.view_left_icon}>
                        <Icon style={style.icon} name="angle-right" />
                    </View>
                </TouchableOpacity>




                <TouchableOpacity activeOpacity={0.7} style={style.container2}>
                    <View style={style.view_con}>
                        <Icon name="product-hunt" style={{
                            marginLeft: width * 0.02,
                            marginTop: height * 0.01
                        }} size={23} />
                        <Text style={style.order}>Products</Text>
                    </View>
                    <View style={style.view_left_icon}>
                        <Icon style={style.icon} name="angle-right" />
                    </View>
                </TouchableOpacity>



                <TouchableOpacity activeOpacity={0.7} style={style.container2}>
                    <View style={style.view_con}>
                        <Icon name="shopping-cart" style={{
                            marginLeft: width * 0.03,
                            marginTop: height * 0.01
                        }} size={23} />
                        <Text style={style.order}>Company Orders</Text>
                    </View>
                    <View style={style.view_left_icon}>
                        <Icon style={style.icon} name="angle-right" />
                    </View>
                </TouchableOpacity>


            </>
        )
    }
}

const style=StyleSheet.create({
    label_con: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        width: width,
        height: height * 0.05,
        marginTop: height * 0.01,
    },

    icon_left: {
        fontSize: 30,
        color: '#000',
        fontWeight: 'bold',
        margin: height * 0.01,
    },

    txt_label: {
        fontSize: 21,
        fontWeight: 'bold',
        color: "#000",
        textAlign: 'center',
        marginLeft: width * 0.27,
        marginTop: height * 0.01
    },

    view_img: {

        width: 100,
        height: 100,
        backgroundColor: '#fff',
        borderRadius: 30,
        alignSelf: 'center',
        elevation: 1,
        marginTop: height * 0.04
    },
    
    img:{
        width:80,
        height:80,
        borderRadius:40,
        alignSelf:'center',
        marginTop:height*0.01
    },

    name: {
        textAlign: 'center',
        marginTop: height * 0.02,
        fontSize: 22,
        fontWeight: 'bold',
        color: '#000',
    },

    location:{
        flexDirection:'row',
        alignSelf:'center',
       width:width*0.6,
       height:height*0.05,
       marginLeft:width*0.3,
       marginTop:height*0.01
    },
    txt_loc:{
        color:'#000',
        textAlign:"center",
        marginLeft:width*0.04
    },

    view_left_icon: {
        width: width * 0.05,
        height: height * 0.05,
        backgroundColor: '#fff',
        marginLeft: width * 0.03
    },

    order: {
        fontSize: 17,
        // fontWeight:'bold',
        color: '#000',
        marginLeft: width * 0.04,
        marginTop: height * 0.01,
    },

    icon: {
        fontSize: 20,
        color: 'grey',
        //  marginLeft: width * 0.,
        marginTop: height * 0.015,
        alignSelf: "center"
    },

    container2: {
        width: width,
        height: height * 0.05,
        marginTop: height * 0.01,
        backgroundColor: '#fff',
        flexDirection: 'row'
    },
    view_con: {
        width: width * 0.88,
        height: height * 0.05,
        backgroundColor: '#fff',
        flexDirection: 'row'
    },



})