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
    ActivityIndicator

}

    from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import Iconn from 'react-native-vector-icons/FontAwesome';
import Search from 'react-native-search-box';
import LinearGradient from 'react-native-linear-gradient';
import CheckBox from 'react-native-check-box'

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

import axios from "axios";


export default class SignuP extends React.Component {

    constructor(props) {


        super(props)
        this.state = {

            baseUrl: '',
            user_first_name: '',
            user_last_name: '',
            user_email: '',
            user_password: '',
            user_repeat: '',

        }

    }

    validates = () => {

        let user_email = this.state.user_email;
        var error_count = 0

        if (!user_email.includes("@") || !user_email.includes(".")||!user_email.includes("gmail")||!user_email.includes("com")) {
            error_count++
        }

        let at_index = user_email.indexOf("@");
        let dot_index = user_email.lastIndexOf(".");

        if (at_index + 1 == dot_index || dot_index < at_index) {
            error_count++
        }

        if (user_email.trim().length < 5) {
            error_count++
        }

        if (error_count == 0) {

            console.log("can sign up")

            let data = {
                user_first_name: this.state.user_first_name,
                user_last_name: this.state.user_last_name,
                user_email: this.state.user_email,
                user_password: this.state.user_password,
                user_repeat: this.state.user_repeat,

            };
            axios.post(this.state.baseUrl, data).then(res => {
                if (res.status == 200) {
                    console.log(res.data);
                    alert(res.data);
                }
            })
        }
        else {
            console.log("you have an error")
        }
    }

    render() {


        return (
            <>

                <StatusBar translucent={true} backgroundColor="transparent"/>


                <ScrollView style={{
                    flex: 1,
                    backgroundColor: '#fff'
                }}
                >
                    <View style={style.container}>
                        <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}}
                                        colors={['orange', '#ec744a', '#c43b05']} style={style.linearGradient}>

                            <Text style={style.log_txt}>Creat Account</Text>

                        </LinearGradient>
                    </View>


                    <View style={{
                        flex: 1,
                        backgroundColor: '#fff'
                    }}>

                        <View style={style.view_inp}>
                            <Text style={{
                                color: '#000',
                                marginLeft: width * 0.01,
                                fontWeight: 'bold'
                            }}>First name</Text>
                            <View style={style.input}>
                                <TextInput
                                    value={this.state.user_first_name}
                                    onChangeText={(val) => {
                                        this.setState({user_first_name: val})
                                    }}
                                    style={{
                                        fontSize: 14,
                                        color: '#000',
                                        padding: height * 0.011
                                    }}
                                    placeholder="First name"
                                />
                            </View>
                        </View>


                        <View style={style.view_inp2}>
                            <Text style={{
                                color: '#000',
                                marginLeft: width * 0.01,
                                fontWeight: 'bold'
                            }}>Last name</Text>
                            <View style={style.input}>
                                <TextInput
                                    value={this.state.user_last_name}
                                    onChangeText={(val) => {
                                        this.setState({user_last_name: val})
                                    }}
                                    style={{
                                        fontSize: 14,
                                        color: '#000',
                                        padding: height * 0.011
                                    }}
                                    placeholder="Last name"
                                />
                            </View>
                        </View>


                        <View style={style.view_inp2}>
                            <Text style={{
                                color: '#000',
                                marginLeft: width * 0.01,
                                fontWeight: 'bold'
                            }}>Email</Text>
                            <View style={style.input}>
                                <TextInput
                                    value={this.state.user_email}
                                    textContentType="emailAddress"
                                    onChangeText={(val) => {
                                        this.setState({user_email: val})
                                    }}
                                    style={{
                                        fontSize: 14,
                                        color: '#000',
                                        padding: height * 0.011
                                    }}
                                    placeholder="Email"
                                />
                            </View>
                        </View>


                        <View style={style.view_inp2}>
                            <Text style={{
                                color: '#000',
                                marginLeft: width * 0.01,
                                fontWeight: 'bold'
                            }}>password</Text>
                            <View style={style.input}>
                                <TextInput
                                    textContentType="password"
                                    value={this.state.user_password}

                                    onChangeText={(val) => {
                                        this.setState({user_password: val})
                                    }}

                                    style={{
                                        fontSize: 14,
                                        color: '#000',
                                        padding: height * 0.011
                                    }}
                                    placeholder="password"
                                />
                            </View>

                        </View>


                        <View style={style.view_inp2}>
                            <Text style={{
                                color: '#000',
                                marginLeft: width * 0.01,
                                fontWeight: 'bold'
                            }}>Repeat password</Text>
                            <View style={style.input}>
                                <TextInput
                                    value={this.state.user_repeat}
                                    textContentType="password"

                                    onChangeText={(val) => {
                                        this.setState({user_repeat: val})
                                    }}

                                    style={{
                                        fontSize: 14,
                                        color: '#000',
                                        padding: height * 0.011
                                    }}
                                    placeholder="Repeat password"
                                />
                            </View>
                        </View>

                        <TouchableOpacity

                            onPress={() => {
                                this.validates();

                            }}

                            activeOpacity={0.7} style={style.sign_view}>
                            <Text style={{
                                fontSize: 15,
                                color: '#fff',
                                textAlign: 'center',
                                marginTop: height * 0.01,
                                fontWeight: 'bold'
                            }}>
                                Signup
                            </Text>
                        </TouchableOpacity>


                        <View style={{
                            flexDirection: 'row',
                            height: height * 0.05
                        }}>
                            <CheckBox
                                style={{
                                    marginTop: height * 0.02,
                                    marginLeft: width * 0.2,
                                    width: width * 0.28,


                                }}
                                onClick={() => {
                                    this.setState({
                                        isChecked: !this.state.isChecked
                                    })
                                }}
                                isChecked={this.state.isChecked}
                                rightText="I agree with"
                                uncheckedCheckBoxColor="#F16529"
                                checkBoxColor="#1961c3"
                            />
                            <Text style={{
                                marginTop: height * 0.02,
                                fontSize: 14,
                                fontWeight: 'bold',
                                color: '#F16529'
                            }}>Terms and Privacy</Text>
                        </View>
                    </View>


                    <View style={style.container2}>
                        <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}}
                                        colors={['orange', '#ec744a', '#c43b05']} style={style.linearGradient2}>

                            <View style={{
                                flexDirection: 'row',
                            }}>
                                <Text style={{
                                    fontSize: 15,
                                    marginLeft: width * 0.25,
                                    marginTop: height * 0.1

                                }}
                                >have an account?</Text>
                                <View>
                                    <TouchableOpacity

                                        onPress={() => {
                                            this.props.navigation.navigate('login')

                                        }}

                                        activeOpacity={0.7}>
                                        <Text style={{
                                            fontSize: 14,
                                            marginLeft: width * 0.03,
                                            marginTop: height * 0.1,
                                            color: '#fff'
                                        }}>Login</Text>
                                    </TouchableOpacity>
                                </View>

                            </View>
                        </LinearGradient>
                    </View>
                </ScrollView>


            </>
        )
    }
}

const style = StyleSheet.create({

    container: {
        width: width,
        height: height * 0.16,
    },

    linearGradient: {
        flex: 1,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20
    },

    log_txt: {
        textAlign: 'center',
        marginTop: height * 0.09,
        color: "#fff",
        fontWeight: "bold",
        fontSize: 23
    },

    view_inp: {
        width: width * 0.66,
        height: height * 0.08,
        alignSelf: 'center',
        marginTop: height * 0.06,
        borderRadius: 11,
    },

    input: {
        width: width * 0.66,
        height: height * 0.04,
        backgroundColor: '#c5c4cc',
        alignSelf: 'center',
        marginTop: height * 0.003,
        borderRadius: 11
    },

    view_inp2: {
        width: width * 0.66,
        height: height * 0.08,
        alignSelf: 'center',
        marginTop: height * 0.01,
        borderRadius: 11,
    },

    pass: {
        width: width * 0.66,
        height: height * 0.04,
        backgroundColor: '#c5c4cc',
        alignSelf: 'center',
        marginTop: height * 0.003,
        borderRadius: 11
    },

    sign_view: {
        width: width * 0.35,
        height: height * 0.05,
        backgroundColor: '#F16529',
        marginTop: height * 0.03,
        alignSelf: 'center',
        borderRadius: 15,
    },


    container2: {
        width: width,
        height: height * 0.16,
        marginTop: height * 0.01
    },

    linearGradient2: {
        flex: 1,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20
    },
})
