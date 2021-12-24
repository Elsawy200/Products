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
import Search from 'react-native-search-box';
import axios from "axios";

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;


export default class Details extends React.Component {

    constructor(props) {

        super(props)
        this.state = {

            name: this.props.navigation.getParam('name'),
            prc: this.props.navigation.getParam('prc'),
            img: this.props.navigation.getParam('img'),
            counter: this.props.navigation.getParam('counter'),
            category_id: this.props.navigation.getParam('category_counter'),
            product_id: this.props.navigation.getParam('product_counter'),
            user_id: this.props.navigation.getParam('user_id'),
            details:this.props.navigation.getParam('details'),
            Items: [],
        }


    }

    componentDidMount() {
        this.get_products_data()
        this.get_last_prc()
    }


    plus() {
        this.setState({counter: this.state.counter + 1})
        this.Set_data()
        this.set_last_prc()
    }

    min() {
        this.setState({counter: this.state.counter - 1})
        this.Set_data()
        this.set_last_prc()

    }

    async Set_data() {
        await AsyncStorage.setItem('counter', JSON.stringify(this.state.counter))
    }


    post_products_data() {
        let dataa = {
            name: this.state.name,
            prc: this.state.prc,
            img: this.state.img,
            counter: this.state.counter,
            category_id: this.state.category_id,
            product_id: this.state.product_id,
            user_id: this.state.user_id
        }
        axios.post('', dataa).then(res => {
            if (res.status == 200) {
                console.log(res.data);
            }
        })
    }

    async set_push() {


        await AsyncStorage.setItem('obj', JSON.stringify(this.state.Items))

    }

    get_products_data() {
        let dataa = {
            user_id: this.state.user_id
        }
        axios.post('', dataa).then(res => {
            if (res.status == 200) {

                this.setState({Items: res.data})
                this.set_push()
                console.log(this.state.Items)
            }
        })
    }



    async set_last_prc()
    {
        let new_prc=this.state.prc*this.state.counter
        await  AsyncStorage.setItem('last_prc',JSON.stringify(new_prc))
    }

    async get_last_prc()
    {
        let data=await AsyncStorage.getItem('last_prc')
        data=JSON.parse(data)
        console.log(data)
    }


    render() {


        return (
            <>

                <StatusBar backgroundColor="grey"/>


                <Image style={style.img} source={this.state.img}/>

                <View style={style.container}>
                    <View style={style.txtcontainer}>
                        <Text style={style.txt}>{this.state.name}</Text>
                        <Text style={style.txtprc}>{this.state.prc} $</Text>

                    </View>


                    <View style={{
                        flexDirection: 'row'
                    }}>
                        <View style={style.rate}>

                            <View style={{
                                flexDirection: 'row',

                            }}>
                                <Icon style={{
                                    marginTop: height * 0.01,
                                    marginLeft: width * 0.01,
                                    fontSize: 20,
                                    color: '#ec744a'
                                }}
                                      name="star"/>

                                <Text style={{
                                    fontSize: 18,
                                    color: '#000',
                                    textAlign: "center",
                                    marginLeft: width * 0.13
                                }}>
                                    4.9</Text>

                            </View>

                            <View style={{
                                flexDirection: 'column'
                            }}>
                                <Text style={{
                                    fontSize: 14,
                                    color: "grey",
                                    textAlign: "center",
                                    marginLeft: width * 0.03
                                }}

                                >Rating</Text>
                            </View>

                        </View>

                        <View style={style.rate}>

                            <View style={{
                                flexDirection: 'row',

                            }}>
                                <Icon style={{
                                    marginTop: height * 0.01,
                                    marginLeft: width * 0.01,
                                    fontSize: 20,
                                    color: '#ec744a'
                                }}
                                      name="paper-plane"/>

                                <Text style={{
                                    fontSize: 18,
                                    color: '#000',
                                    textAlign: "center",
                                    marginLeft: width * 0.13
                                }}>
                                    4.4 Km</Text>

                            </View>

                            <View style={{
                                flexDirection: 'column'
                            }}>
                                <Text style={{
                                    fontSize: 14,
                                    color: "grey",
                                    textAlign: "center",
                                    marginLeft: width * 0.03
                                }}

                                >Distance</Text>
                            </View>

                        </View>
                    </View>


                    <View style={style.viewdiscription}>
                        <Text style={style.dis_text}>
                            adidas Men's Racer TR21 Running Shoe
                        </Text>
                    </View>

                    <View style={{
                        flexDirection: 'row'
                    }}>
                        <View style={style.count_view}>

                            <View style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                            }}>


                                <TouchableOpacity disabled={this.state.counter == 0 ? true : null} onPress={() => {
                                    this.min()
                                }}

                                                  activeOpacity={0.7}>

                                    <Text style={style.minus}>-</Text>
                                </TouchableOpacity>
                                <Text style={{
                                    fontSize: 25,
                                    marginTop: height * 0.003,
                                    color: "#000"
                                }}>
                                    {this.state.counter}
                                </Text>
                                <TouchableOpacity onPress={() => {
                                    this.plus()
                                }} activeOpacity={0.7}>

                                    <Text style={style.plus}>+</Text>
                                </TouchableOpacity>

                            </View>
                        </View>

                        <TouchableOpacity
                            onPress={() => {

                                this.Set_data()
                                this.post_products_data()
                                this.props.navigation.navigate('Cart')
                                this.set_last_prc()
                            }}

                            activeOpacity={0.7} style={style.card}>
                            <Text style={{
                                fontSize: 18,
                                textAlign: 'center',
                                marginTop: height * 0.007,
                                color: '#000'
                            }}>
                                Add to Cart</Text>
                        </TouchableOpacity>
                    </View>

                </View>


            </>
        )
    }
}

const style = StyleSheet.create({
    img: {
        width: width,
        height: height * 0.5,

    },
    container: {
        backgroundColor: '#fff',
        width: width,
        height: height,

    },
    txtcontainer: {
        backgroundColor: '#fff',
        width: width,
        height: height * 0.07,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    txt: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#000',
        margin: height * 0.01
    },
    txtprc: {
        fontSize: 26,
        marginRight: width * 0.04,
        color: '#000',
        margin: height * 0.01
    },
    viewdiscription: {

        width: width,
        height: height * 0.15,
        marginTop: height * 0.01,
        backgroundColor: '#fff'

    },
    dis_text: {
        marginTop: height * 0.05,
        fontSize: 20,
        textAlign:'center',
        color: '#000 '
    },
    count_view: {
        width: width * 0.4,
        height: height * 0.05,
        backgroundColor: "#d4dfdb",
        borderRadius: 15,
        marginTop: height * 0.01,
        marginLeft: width * 0.06
    },
    plus: {
        fontSize: 25,
        marginRight: width * 0.04,
        color: '#ec744a'

    },
    minus: {
        fontSize: 25,
        marginLeft: width * 0.04
    },
    card: {
        width: width * 0.4,
        height: height * 0.05,
        backgroundColor: "#ec744a",
        borderRadius: 15,
        marginTop: height * 0.01,
        marginLeft: width * 0.06
    },
    rate: {
        width: width * 0.4,
        height: height * 0.06,
        backgroundColor: "#fff",
        borderRadius: 15,
        marginLeft: width * 0.06,
        elevation: 2,


    }
})



