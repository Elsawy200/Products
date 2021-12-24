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
    StatusBar,
    SafeAreaView,
    AsyncStorage,
    ActivityIndicator
}

    from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import Iconn from 'react-native-vector-icons/Ionicons';
import {Fumi} from 'react-native-textinput-effects';
import LinearGradient from 'react-native-linear-gradient';
import Search from 'react-native-search-box';
import CheckBox from 'react-native-check-box';
import {LoginManager} from 'react-native-fbsdk';
import axios from "axios";
import {useState} from "react";

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;


const loginWithFacebook = () => {
    LoginManager.logInWithPermissions(["public_profile", "email"]).then(function (result) {
        if (result.isCancelled) {
            console.log("==> Login cancelled");
        } else {
            console.log("==> Login success with permissions: " + result.grantedPermissions.toString());
        }
    }, function (error) {
        console.log("==> Login fail with error: " + error);
    });
}

export default class LogIN extends React.Component {

    constructor(props) {


        super(props)
        this.state = {

            name: 'Company name',
            img: require("../images/sto.png"),
            flag: true,
            link: '',
            user_email: '',
            user_password: '',
            color_input: true,
            user_name: '',
            user_id: "",
            indicator_flag: true,
            login_flag: 'true'

        }

    }

    fun() {
        let dataa = {
            user_email: this.state.user_email, user_password: this.state.user_password,
        }

        axios.post(this.state.link, dataa).then(res => {
            if (res.status == 200) {
                console.log(res.data)
                this.setState({indicator_flag: true})
            }

            if (res.data == "Please Write Email and Password") {
                this.setState({color_input: false})
                alert(res.data)
            } else if (res.data == "wrong email or password") {
                this.setState({color_input: false})

                alert(res.data)
            } else {
                this.setState({user_id: res.data, login_flag: 'false'})
                console.log(this.state.user_id)
                this.set_save_id()
                this.set_login_falg()
                this.props.navigation.navigate('product', {
                    id: this.state.user_id,
                })

            }
        })

    }


    async set_save_id() {
        await AsyncStorage.setItem('id', JSON.stringify(this.state.user_id))
    }

    async set_login_falg() {
        await AsyncStorage.setItem('login', JSON.stringify(this.state.login_flag))
    }


    async componentDidMount() {
        this.get_login_flag()
    }

    async get_login_flag() {
        let data = await AsyncStorage.getItem('login')
        data = JSON.parse(data)
    }

    render() {


        return (<>


                <StatusBar translucent={true} backgroundColor={'transparent'}/>

                <View style={style.container}>
                    <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['orange', '#ec744a', '#c43b05']}
                                    style={style.linearGradient}>
                        <Text style={style.log_txt}>Login</Text>
                        <View style={style.view_inp}>
                            <Text style={{
                                color: '#fff', marginLeft: width * 0.01
                            }}>Email</Text>
                            <View style={{
                                width: width * 0.8,
                                height: height * 0.05,
                                backgroundColor: '#fff',
                                alignSelf: 'center',
                                marginTop: height * 0.003,
                                borderRadius: 11,
                                borderWidth: this.state.color_input ? null : 2,
                                borderColor: this.state.color_input ? null : '#f00'
                            }}>

                                <TextInput
                                    value={this.state.user_email}
                                    onChangeText={(val) => {
                                        this.setState({user_email: val});
                                    }}
                                    textContentType="emailAddress"
                                    style={{
                                        fontSize: 15, color: '#000',
                                    }}
                                    placeholder="Email"
                                />
                            </View>
                        </View>


                        <View style={style.view_inp2}>
                            <Text style={{
                                color: '#fff', marginLeft: width * 0.01
                            }}>password</Text>
                            <View style={{
                                width: width * 0.8,
                                height: height * 0.05,
                                backgroundColor: '#fff',
                                alignSelf: 'center',
                                marginTop: height * 0.003,
                                borderRadius: 11,
                                flexDirection: 'row',
                                borderWidth: this.state.color_input ? null : 2,
                                borderColor: this.state.color_input ? null : '#f00'
                            }}>
                                <TextInput
                                    value={this.state.user_password}
                                    textContentType="password"
                                    onChangeText={(val) => {
                                        this.setState({user_password: val})
                                    }}
                                    style={{
                                        fontSize: 15, color: '#000', width: width * 0.7
                                    }}
                                    placeholder="password"
                                    secureTextEntry={this.state.flag ? true : false}
                                />

                                <View>
                                    <TouchableOpacity onPress={() => {
                                        if (this.state.flag == true) {
                                            this.setState({flag: false})
                                        } else if (this.state.flag == false) {
                                            this.setState({flag: true})
                                        }
                                    }}
                                                      activeOpacity={0.7}>
                                        <Icon style={{
                                            fontSize: 15, marginLeft: width * 0.032, marginTop: height * 0.014
                                        }} name={this.state.flag ? "eye-slash" : "eye"}/>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>


                        <CheckBox
                            style={style.checkbox}
                            onClick={() => {
                                this.setState({
                                    isChecked: !this.state.isChecked
                                })
                            }}
                            isChecked={this.state.isChecked}
                            rightText="Remind me"
                            uncheckedCheckBoxColor="#fff"
                            checkBoxColor="#1961c3"
                        />

                        <View style={{
                            flexDirection: 'row'
                        }}>
                            <TouchableOpacity

                                onPress={() => {
                                    this.fun();
                                    this.set_save_id()
                                    this.setState({indicator_flag: false})

                                }}

                                activeOpacity={0.7} style={style.log_view}>
                                <Text style={{
                                    fontSize: 15,
                                    color: '#fff',
                                    textAlign: 'center',
                                    marginTop: height * 0.01,
                                    fontWeight: 'bold'
                                }}>
                                    {this.state.indicator_flag ? 'login' :
                                        <ActivityIndicator size={23} color={"orange"}/>}

                                </Text>
                            </TouchableOpacity>


                            <View style={{
                                marginLeft: width * 0.2, marginTop: height * 0.03
                            }}>
                                <TouchableOpacity activeOpacity={0.7}>
                                    <Text style={{
                                        fontWeight: 'bold', color: '#fff'
                                    }}>
                                        Forgot password?
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </LinearGradient>

                </View>

                <View style={style.containe_line}>
                    <View style={style.grey_line}>
                    </View>
                    <Text style={style.txt_line}>or connect with</Text>
                    <View style={style.grey_line2}>
                    </View>
                </View>


                <View style={style.social}>
                    <TouchableOpacity
                        onPress={() => {
                            loginWithFacebook()
                        }}
                        activeOpacity={0.7} style={style.face}>
                        <Icon style={style.face_icon} name="facebook"/>
                        <Text style={style.facebook_txt}
                        >Facebook</Text>
                    </TouchableOpacity>


                    <TouchableOpacity activeOpacity={0.7} style={style.twiter}>
                        <Icon style={style.face_icon} name="twitter"/>
                        <Text style={style.twitter_txt}
                        >Twitter</Text>
                    </TouchableOpacity>
                </View>

                <View style={{
                    flexDirection: 'row',
                }}>
                    <Text style={style.dont_account}
                    >Don't have account?</Text>
                    <View>


                        <TouchableOpacity
                            onPress={() => {
                                this.props.navigation.navigate('signup')
                            }}
                            activeOpacity={0.7}>
                            <Text style={style.signup_txt}>Sign up</Text>
                        </TouchableOpacity>
                    </View>
                </View>


            </>)
    }
}

const style = StyleSheet.create({
    container: {
        width: width, height: height * 0.7, borderBottomLeftRadius: 20
    },

    linearGradient: {
        flex: 1, borderBottomLeftRadius: 30, borderBottomRightRadius: 30,
    }, log_txt: {
        textAlign: 'center', marginTop: height * 0.15, color: "#fff", fontWeight: "bold", fontSize: 24
    },

    txt_email: {
        marginLeft: width * 0.1, marginTop: height * 0.01
    }, view_inp: {
        width: width * 0.8, height: height * 0.08, alignSelf: 'center', marginTop: height * 0.04, borderRadius: 11

    },

    view_inp2: {
        width: width * 0.8, height: height * 0.08, alignSelf: 'center', marginTop: height * 0.02, borderRadius: 11
    },


    container3: {
        flex: 1, alignItems: "center", justifyContent: "center",
    }, checkboxContainer: {
        flexDirection: "row", marginBottom: 20,
    }, checkbox: {
        marginTop: height * 0.01, marginLeft: width * 0.1, width: width * 0.3,
    }, label: {
        margin: 8,
    },

    log_view: {
        width: width * 0.35,
        height: height * 0.05,
        backgroundColor: '#F16529',
        marginLeft: width * 0.1,
        marginTop: height * 0.02,
        borderRadius: 15,
    }, grey_line: {
        width: width * 0.3, height: height * 0.02, marginLeft: width * 0.02, borderBottomWidth: 0.7, borderColor: "grey"
    }, grey_line2: {
        width: width * 0.3, height: height * 0.02, marginLeft: width * 0.01, borderBottomWidth: 0.7, borderColor: "grey"
    }, containe_line: {
        flexDirection: "row", height: height * 0.03, width: width * 0.9, marginTop: height * 0.05, alignSelf: 'center'
    }, txt_line: {

        marginLeft: width * 0.01, color: 'grey', textAlign: 'center', fontSize: 13,
    },

    social: {
        width: width, height: height * 0.08, marginTop: height * 0.01, flexDirection: 'row'

    }, face: {
        width: width * 0.45,
        height: height * 0.05,
        backgroundColor: '#3B5998',
        marginLeft: width * 0.03,
        marginTop: height * 0.013,
        borderRadius: 15,
        flexDirection: 'row'
    }, face_icon: {
        fontSize: 22, marginTop: height * 0.012, marginLeft: width * 0.04, color: '#fff'
    }, twiter: {
        width: width * 0.45,
        height: height * 0.05,
        backgroundColor: '#1DA1F2',
        marginLeft: width * 0.03,
        marginTop: height * 0.013,
        borderRadius: 15,
        flexDirection: 'row'
    }, twitter_txt: {
        fontSize: 15, color: '#fff', marginTop: height * 0.012, marginLeft: width * 0.08,
    },

    dont_account: {
        fontSize: 15, marginLeft: width * 0.25, marginTop: height * 0.02
    }, signup_txt: {
        fontSize: 15, marginLeft: width * 0.03, marginTop: height * 0.02, color: '#ec744a'
    }, facebook_txt: {
        fontSize: 15, color: '#fff', marginTop: height * 0.012, marginLeft: width * 0.08,
    }


})
