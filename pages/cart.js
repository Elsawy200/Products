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
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import Search from 'react-native-search-box';
import axios from "axios";
import {NavigationEvents} from "react-navigation";


const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;


export default class Cart extends React.Component {

    constructor(props) {


        super(props)
        this.state = {
            user_id: '', Items: [], prc: ''

        }


    }

    async get_save_id() {
        let data = await AsyncStorage.getItem('id')

        data = JSON.parse(data)

        this.setState({user_id: data})
        console.log(this.state.user_id)

    }

    async get_push() {
        let items = this.state.Items
        let data = await AsyncStorage.getItem('obj')

        if (data) {
            data = JSON.parse(data)

            this.setState({Items: data})

            console.log(this.state.Items);
        } else {
            this.setState({flag: false})
            console.log("error")
        }


    }

    componentDidMount() {

        this.get_push()
        console.log(this.state.user_id)
        this.get_save_id()
        //this.get_counter()
        this.get_last_prc()
    }


    plus() {
        this.setState({counter: this.state.counter + 1})
    }

    min() {
        this.setState({counter: this.state.counter - 1})

    }


    async get_last_prc() {
        let data = await AsyncStorage.getItem('last_prc')
        data = JSON.parse(data)
        console.log(data)
        this.setState({prc: data})
    }

    async get_counter() {
        let data = await AsyncStorage.setItem('counter')
        data = JSON.parse(data)
        console.log(data)
    }


    render() {


        return (<>

                <StatusBar backgroundColor={'grey'}/>


                <ScrollView>


                    <View style={{
                        flex: 1
                    }}>

                        <Text style={style.label}>Order Details</Text>

                        <Text style={{
                            marginLeft: width * 0.03, fontSize: 17, color: 'grey', fontWeight: 'bold'

                        }}
                        >Order item</Text>

                        <ScrollView>
                            <View>
                                <FlatList
                                    data={this.state.Items}
                                    contentContainerStyle={{}}
                                    renderItem={({item, index}) => (<>

                                            <View style={style.container}>
                                                <Image style={style.img} source={item.product_image}/>

                                                <View style={{
                                                    flexDirection: 'column', backgroundColor: '#f', width: width * 0.4,

                                                }}>
                                                    <Text style={style.brand_text}>{item.product_name}</Text>

                                                    <Text style={style.txtcon}>by<Text
                                                        style={style.txtcon2}>bestquality</Text></Text>
                                                    <Text style={style.prc}>{item.product_price}$</Text>
                                                    <Text style={{
                                                        fontSize: 20, marginTop: height * 0.003, color: "#000"
                                                    }}>
                                                        {item.counter}
                                                    </Text>
                                                </View>
                                            </View>


                                        </>)}
                                />

                            </View>
                        </ScrollView>


                        <View style={style.address}>
                            <Text style={style.labeladdress}>Delivery address</Text>
                            <Text style={style.txtaddress}>Tanta</Text>
                        </View>

                        <View style={style.address}>
                            <Text style={style.labeladdress}>Payment method</Text>


                            <Text style={style.txtaddress}>Master Card</Text>
                            {/* <Icon name="credit-card"/> */}
                        </View>


                    </View>

                </ScrollView>


                <TouchableOpacity

                    onPress={() => {

                    }}

                    activeOpacity={0.7} style={style.card}>
                    <Text style={{
                        textAlign: 'center', color: '#000', fontWeight: 'bold', fontSize: 20, marginTop: height * 0.01

                    }}>Order for {this.state.prc} LE</Text>
                </TouchableOpacity>


            </>)
    }
}


const style = StyleSheet.create({
    label: {
        fontSize: 22, fontWeight: 'bold', color: '#000', textAlign: 'center', padding: height * 0.02
    }, img: {
        width: 65, height: 65, borderRadius: 40, margin: height * 0.02,

    }, brand_text: {
        fontSize: 17, fontWeight: 'bold', color: '#000', marginTop: height * 0.03,

    }, container: {
        flexDirection: 'row',

        height: height * 0.14, //backgroundColor:'#f00',
        //borderBottomWidth:1,
        borderColor: 'grey'
    }, txtcon: {

        fontSize: 14, fontWeight: 'bold', color: '#000',
    }, txtcon2: {
        fontSize: 14, fontWeight: 'bold', color: '#ec744a'
    }, prc: {
        fontWeight: 'bold', color: '#000',

    }, count_view: {
        width: width * 0.3,
        height: height * 0.04,
        backgroundColor: "#d4dfdb",
        borderRadius: 15,
        marginTop: height * 0.05,
        marginLeft: width * 0.01,
        justifyContent: 'space-between',
        flexDirection: 'row'

    },

    plus: {
        fontSize: 25, marginRight: width * 0.04, color: '#ec744a'

    }, minus: {
        fontSize: 25, marginLeft: width * 0.04
    }, address: {
        width: width, height: height * 0.075, // backgroundColor:'#f00',
        //  marginTop: height * 0.02,

        flexDirection: 'column'


    }, labeladdress: {
        color: 'grey', fontSize: 15, marginTop: height * 0.02, marginLeft: width * 0.04
    }, txtaddress: {
        color: '#000', fontWeight: 'bold', fontSize: 17, marginLeft: width * 0.04,

    }, card: {
        width: width * 0.7,
        height: height * 0.06,
        backgroundColor: '#ec744a',
        borderRadius: 12,
        alignSelf: 'center',
        marginTop: height * 0.05

    }

})

