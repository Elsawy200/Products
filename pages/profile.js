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
import Icon from 'react-native-vector-icons/Ionicons';
import Iconn from 'react-native-vector-icons/FontAwesome';
import Search from 'react-native-search-box';
import axios from "axios";

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;


export default class Profile extends React.Component {

    constructor(props) {

        super(props)
        this.state = {

            email: '',
            link: '',
            name:'',

        }
    }

    async get_name()
    {
        let data=await  AsyncStorage.getItem('name')
        data=JSON.parse(data)
        console.log(data)
        this.setState({name:data})
    }

    async get_email()
    {
        let data=await  AsyncStorage.getItem('email')
        data=JSON.parse(data)
        console.log(data)
        this.setState({email:data})
    }


    componentDidMount() {
        this.get_name()
        this.get_email()
    }

    render() {


        return (
            <>

                <StatusBar backgroundColor="grey"/>


                <Text style={style.label}>My Account</Text>


                <View style={style.img}>
                    <Iconn size={70} name="user" style={{
                        alignSelf: 'center',
                        padding: height * 0.022,
                        color: '#ec744a'
                    }}/>
                    <View style={style.smallcir}>
                        <Icon style={{
                            marginLeft: width * 0.0019
                        }}
                              name='add'
                              color='#fff'
                              size={17}
                        />
                    </View>
                </View>


                <Text style={style.name}>{this.state.name}</Text>


                <Text style={{
                    textAlign: 'center',
                    marginTop: height * 0.01
                }}>{this.state.email}</Text>


                <TouchableOpacity activeOpacity={0.7} style={style.container}>
                    <View style={style.view_con}>
                        <Iconn name="shopping-cart" style={{
                            marginLeft: width * 0.03,
                            marginTop: height * 0.01
                        }} size={23}/>
                        <Text style={style.order}>My Orders</Text>
                    </View>
                    <View style={style.view_left_icon}>
                        <Iconn style={style.icon} name="angle-right"/>
                    </View>

                </TouchableOpacity>


                <TouchableOpacity activeOpacity={0.7} style={style.container2}>
                    <View style={style.view_con}>
                        <Iconn name="user" style={{
                            marginLeft: width * 0.03,
                            marginTop: height * 0.01
                        }} size={23}/>
                        <Text style={style.order}>Account Details</Text>
                    </View>
                    <View style={style.view_left_icon}>
                        <Iconn style={style.icon} name="angle-right"/>
                    </View>
                </TouchableOpacity>


                <TouchableOpacity activeOpacity={0.7} style={style.container2}>
                    <View style={style.view_con}>
                        <Iconn name="lock" style={{
                            marginLeft: width * 0.03,
                            marginTop: height * 0.01
                        }} size={23}/>
                        <Text style={style.order}>Change password</Text>
                    </View>
                    <View style={style.view_left_icon}>
                        <Iconn style={style.icon} name="angle-right"/>
                    </View>
                </TouchableOpacity>


                <TouchableOpacity activeOpacity={0.7} style={style.container2}>
                    <View style={style.view_con}>
                        <Iconn name="home" style={{
                            marginLeft: width * 0.03,
                            marginTop: height * 0.01
                        }} size={23}/>
                        <Text style={style.order}>My Address list</Text>
                    </View>
                    <View style={style.view_left_icon}>
                        <Iconn style={style.icon} name="angle-right"/>
                    </View>
                </TouchableOpacity>


                <TouchableOpacity activeOpacity={0.7} style={style.container2}>
                    <View style={style.view_con}>
                        <Iconn name="credit-card" style={{
                            marginLeft: width * 0.03,
                            marginTop: height * 0.01
                        }} size={23}/>
                        <Text style={style.order}>Payment method</Text>
                    </View>
                    <View style={style.view_left_icon}>
                        <Iconn style={style.icon} name="angle-right"/>
                    </View>
                </TouchableOpacity>


                <TouchableOpacity

                    onPress={() => {
                        this.props.navigation.navigate("Producer")
                    }}

                    activeOpacity={0.7} style={style.last_Con}>
                    <Text style={{
                        textAlign: 'center',
                        color: '#000',
                        fontWeight: 'bold',
                        fontSize: 20,
                        marginTop: height * 0.01

                    }}>Become a producer</Text>
                </TouchableOpacity>
            </>
        )
    }
}

const style = StyleSheet.create({

    label: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#000',
        textAlign: 'center',
        marginTop: height * 0.03,

    },
    img: {

        width: 120,
        height: 130,
        backgroundColor: '#fff',
        borderRadius: 30,
        alignSelf: 'center',
        elevation: 1,
        marginTop: height * 0.04
    },
    smallcir: {

        width: 17,
        height: 17,
        backgroundColor: '#1961c3',
        // marginTop: height * 0.111,
        marginLeft: width * 0.1,
        alignSelf: 'flex-end',
        borderRadius: 20,
        // borderWidth: 3,
        //  borderColor: '#000',
    },
    name: {
        textAlign: 'center',
        marginTop: height * 0.01,
        fontSize: 15,
        fontWeight: 'bold',
        color: '#000',

    },
    container: {
        width: width,
        height: height * 0.05,
        marginTop: height * 0.04,
        backgroundColor: '#fff',
        flexDirection: 'row'
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
    view_left_icon: {
        width: width * 0.05,
        height: height * 0.05,
        backgroundColor: '#fff',
        marginLeft: width * 0.03
    },
    last_Con: {
        width: width * 0.7,
        height: height * 0.06,
        backgroundColor: '#ec744a',
        borderRadius: 12,
        alignSelf: 'center',
        marginTop: height * 0.08


    }
})
