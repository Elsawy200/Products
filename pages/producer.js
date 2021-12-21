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
    BackHandler
}
    from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import Iconn from 'react-native-vector-icons/Ionicons';
import { Fumi } from 'react-native-textinput-effects';

import Search from 'react-native-search-box';
const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;


export default class Producer extends React.Component {

    constructor(props) {


        super(props)
        this.state = {

            name: 'Change Pofile photo',


        }

    }



    backAction = () => {

       
        Alert.alert("Hold on!", "Are you sure you want to go back?", [
          {
            text: "Cancel",
            onPress: () => null,
            style: "cancel"
          },
          { text: "YES", onPress: () => this.props.navigation.navigate('profile') }
        ]);
        return true;
      };
    
      componentDidMount() {
        this.backHandler = BackHandler.addEventListener(
          "hardwareBackPress",
          this.backAction
        );
      }
    
      componentWillUnmount() {
        this.backHandler.remove();
     
      }



    render() {





        return (
            <>

                <StatusBar backgroundColor="grey" />

                <View style={style.label_con}>
                    <TouchableOpacity>
                        <Icon style={style.icon_left} name="angle-left" />
                    </TouchableOpacity>
                    <Text style={style.txt_label}>New Producer</Text>
                </View>


                <View style={style.img}>
                    <Icon size={60} name="image" style={{
                        alignSelf: 'center',
                        padding: height * 0.022,
                        color: 'grey'
                    }} />
                    <View style={style.smallcir}>
                        <Iconn style={{
                            marginLeft: width * 0.0019
                        }}
                            name='add'
                            color='#fff'
                            size={17}
                        />
                    </View>
                </View>


                <Text style={style.name}>{this.state.name}</Text>

                <Fumi style={{
                    marginTop: height * 0.05
                }}
                    label={'Company Name'}
                    iconClass={Icon}
                    iconName={'user'}
                    iconColor={'#f95a25'}
                    iconSize={20}
                    iconWidth={40}
                    inputPadding={16}

                />

                <Fumi
                    label={'Address'}
                    iconClass={Icon}
                    iconName={'home'}
                    iconColor={'#f95a25'}
                    iconSize={20}
                    iconWidth={40}
                    inputPadding={16}

                />

                <Fumi
                    label={"Description"}
                    iconClass={Icon}
                    iconName={'info'}
                    iconColor={'#f95a25'}
                    iconSize={20}
                    iconWidth={40}
                    inputPadding={16}

                />

                <View style={style.last}>
                    <Icon size={55} name="image" style={{
                        alignSelf: 'center',
                        padding: height * 0.022,
                        color: '#3c6ee6'
                    }} />
                    <Text style={style.name2}>Click to upload farm's Image</Text>
                </View>


                <TouchableOpacity
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
    img: {

        width: 120,
        height: 120,
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
        color: '#ec744a',
    },
    last: {
        width: width * 0.9,
        height: height * 0.16,
        backgroundColor: '#fff',
        alignSelf: 'center',
        marginTop: height * 0.04,
        borderColor: 'grey',
        borderWidth: 1,
        borderRadius: 12

    },
    name2: {
        textAlign: 'center',
        fontSize: 15,
        fontWeight: 'bold',
        color: '#1961c3',
    },
    last_Con: {
        width: width * 0.7,
        height: height * 0.06,
        backgroundColor: '#ec744a',
        borderRadius: 12,
        alignSelf: 'center',
        marginTop: height * 0.06


    }
})