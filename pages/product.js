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


export default class Product extends React.Component {

    constructor(props) {


        super(props)
        this.state = {
            input: '',
            Items: [
                {
                    img: require("../images/Adidas.jpg"),
                    name: 'Adidas',
                    flag: true,
                    arr: [
                        {
                            img: require("../images/Adidas.jpg"),
                            name: 'adidas',
                            prc: '120',
                            flag: true,
                            counter: 0,
                            category_id: 1,
                            product_id: 1
                        }
                    ]

                },
                {
                    img: require("../images/nike.jpg"),
                    name: 'Nike',
                    flag: true,
                    arr: [
                        {
                            img: require("../images/sto3.png"),
                            name: 'nike',
                            flag: true,
                            counter: 0,
                            id: 2,
                            prc: '150',
                            category_id: 2,
                            product_id: 1
                        }
                    ]
                },
                {
                    img: require("../images/new-balance.jpg"),
                    name: 'New balance',
                    flag: true,
                    arr: [
                        {
                            img: require("../images/sto.png"),
                            name: "newbalance",
                            flag: true,
                            counter: 0,
                            id: 3,
                            prc: '200',
                            category_id: 3,
                            product_id: 1
                        }
                    ]
                },
                {
                    img: require("../images/rebok.png"),
                    name: 'Reebok',
                    flag: true,
                    arr: [
                        {
                            img: require("../images/sto3.png"),
                            name: 'Reebok',
                            flag: true,
                            counter: 0,
                            id: 4,
                            prc: '400',
                            category_id: 4,
                            product_id: 1
                        }
                    ]

                },
                {
                    img: require("../images/under-armor.png"),
                    name: 'UNDER ARMOUR',
                    flag: true,
                    arr: [
                        {
                            img: require("../images/sto.png"),
                            name: 'Under armour',
                            flag: true,
                            counter: 0,
                            id: 5,
                            prc: 800,
                            category_id: 5,
                            product_id: 1
                        }
                    ]
                },
                {
                    img: require("../images/fila.png"),
                    name: 'Fila',
                    flag: true,
                    arr: [
                        {
                            id: 6,
                            img: require("../images/sto3.png"),
                            name: 'fila',
                            flag: true,
                            counter: 0,
                            prc: 250,
                            category_id: 6,
                            product_id: 1
                        }
                    ]
                },

            ],
            name: '',
            email: '',
            link: 'https://elsawy2002.000webhostapp.com/project/check_id.php',
            user_id: this.props.navigation.getParam('id'),

        }

    }

    search(val) {
        let items = this.state.Items
        for (let i = 0; i < items.length; i++) {
            if (items[i].name.toLowerCase().includes(val.toLowerCase())) {

                items[i].flag = true
            } else {
                items[i].flag = false
            }

            this.setState({Items: items})
        }
    }


    async get_save_id() {
        let data = await AsyncStorage.getItem('id')

        data = JSON.parse(data)

        this.setState({user_id: data})
        console.log(this.state.user_id)

    }


    async set_name() {
        await AsyncStorage.setItem('name', JSON.stringify(this.state.name))
    }


    async set_email() {
        await AsyncStorage.setItem('email', JSON.stringify(this.state.email))
    }


    componentDidMount() {
        this.get_save_id()
        this.get_all_data()
        // this.get_name()
        console.log(this.state.user_id)
    }

    get_all_data() {
        let dataa = {
            user_id: this.state.user_id
        }
        axios.post(this.state.link, dataa).then(res => {
            if (res.status == 200) {
                console.log(res.data);

                this.setState({
                    email: res.data.user_email,
                    name: res.data.user_first_name + ' ' + res.data.user_last_name
                })
                this.set_name()
                this.set_email()
            }
        })

    }




    render() {


        return (
            <>

                <StatusBar backgroundColor={'grey'}/>

                <View style={{width: width, backgroundColor: '#fff'}}>
                    <Text style={{
                        fontSize: 20,
                        marginTop: height * 0.01,
                        marginLeft: width * 0.02,
                        color: '#F16529'

                    }}>Hello {this.state.name}</Text>
                </View>


                <View style={style.tit}>

                    <Text style={style.tittxt}>
                        Products
                    </Text>

                    <View style={style.bellicon}>

                        <TouchableOpacity style={{
                            width: width * 0.06,
                            height: height * 0.03,
                            backgroundColor: '#fff'
                        }}>
                            <View style={{
                                backgroundColor: '#f00',
                                width: 6,
                                height: 6,
                                borderRadius: 30,
                                marginLeft: width * 0.04,
                                // marginTop:height*0.01
                            }}>
                            </View>
                            <Icon
                                name="bell" size={15} style={{
                                marginLeft: width * 0.017,
                            }} color={'#000'}/>
                        </TouchableOpacity>

                    </View>
                </View>

                <View style={style.search}>
                    <Icon style={style.icon_search} name="search"/>
                    <TextInput
                        value={this.state.input}
                        onChangeText={(val) => {
                            this.setState({input: val})
                            this.search(val)
                        }}
                        style={{
                            fontSize: 15,
                            width: width * 0.9,
                            height: height * 0.045,
                        }}
                        placeholder="search"
                    />
                </View>


                <FlatList
                    data={this.state.Items}
                    contentContainerStyle={{
                        flexDirection: 'row',
                        flexWrap: 'wrap',

                    }}
                    renderItem={({item, index}) => (
                        <>
                            {item.flag ?
                                (
                                    <TouchableOpacity
                                        onPress={() => {
                                            this.props.navigation.navigate("product2", {
                                                products: item.arr,
                                                id:this.state.user_id
                                            })
                                        }}
                                        activeOpacity={0.7} style={style.list_button}>
                                        <Image style={style.img} source={item.img}/>
                                        <Text style={style.name}>{item.name}</Text>
                                    </TouchableOpacity>

                                ) :
                                null
                            }

                        </>
                    )}
                />


            </>
        )
    }
}


const style = StyleSheet.create({

    tit: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        width: width,
        height: height * 0.07,
        justifyContent: 'space-between',
    },
    tittxt: {
        fontSize: 34,
        fontWeight: 'bold',
        margin: height * 0.01,
        color: '#000'
    },

    bellicon: {
        marginTop: height * 0.02,
        marginRight: width * 0.03,

    },
    search: {
        marginTop: height * 0.01,
        width: width * 0.9,
        height: height * 0.045,
        borderRadius: 12,
        alignSelf: 'center',
        backgroundColor: '#C6C5CA',
        fontSize: 18,
        flexDirection: 'row',
        elevation: 5
    },
    icon_search: {
        fontSize: 15,
        marginTop: height * 0.01,
        marginLeft: width * 0.02
    },

    list_button:
        {
            width: width * 0.44,
            height: height * 0.28,
            backgroundColor: '#fff',
            borderRadius: 13,
            marginLeft: width * 0.04,
            marginTop: height * 0.02
        },
    img: {
        width: 185,
        height: 185,
        borderRadius: 13,
        marginTop: height * 0.03
    },
    name: {
        fontSize: 17,
        fontWeight: 'bold',
        color: '#000',
        textAlign: 'center'
    }


})


