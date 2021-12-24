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
const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

export default class Product2 extends React.Component {

    constructor(props) {

        super(props)
        this.state = {
                 input:'',

            Items:this.props.navigation.getParam("products"),
            user_id:this.props.navigation.getParam('id')
        }

    }


    search(val)
    {
      let items=this.state.Items
      for (let i = 0; i < items.length; i++) {
        if (items[i].name.toLowerCase().includes(val.toLowerCase())) {

            items[i].flag = true
        }
        else {
            items[i].flag = false
        }
this.setState({Items:items})
      }
    }

    render() {

        return (
            <>

                <StatusBar backgroundColor={'grey'} />
                <View style={style.tit}>

                    <Text style={style.tittxt}>
                        Products
                    </Text>

                    <View style={style.bellicon}>
                        <TouchableOpacity >
                            <Icon
                                name="bell" size={15} color={'#000'} />
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={style.search}>
                    <Icon
                     style={style.icon_search} name="search" />

                    <TextInput
                      value={this.state.input}
                      onChangeText={(val)=>{

                      this.setState({input:val})
                      this.search(val)

                    }} style={{
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

                    renderItem={({ item, index }) => (
                        <>


                                   {item.flag ?
                                    (

                                      <>
                                <TouchableOpacity
                                onPress={() => {
                                    this.props.navigation.navigate("Details",{

                                        img:item.img,
                                        counter:item.counter,
                                        name:item.name,
                                        prc:item.prc,
                                        category_counter:item.category_id,
                                        product_counter:item.product_id,
                                        user_id:this.state.user_id,
                                        details:item.details

                                    })

                                }}
                                activeOpacity={0.7} style={style.list_button}>
                                <Image style={style.img} source={item.img} />

                            </TouchableOpacity>
                            <Text style={style.product_name}>{item.name}</Text>
                                        </>
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
        marginTop: height * 0.01
    },
    tittxt: {
        fontSize: 34,
        fontWeight: 'bold',
        margin: height * 0.01,
        color: '#000'
    },

    bellicon: {
        marginTop: height * 0.03,
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

        backgroundColor: '#fff',
        borderRadius: 13,
        marginLeft: width * 0.04,
        marginTop: height * 0.02,
        alignSelf: 'center',
    },
    img: {
        width: width * 0.44,
        height: height * 0.2,
        borderRadius: 13,
        alignSelf: 'center'
    },

    product_name: {
        fontSize: 17,
        color: '#000',
        marginLeft: width * 0.06,
        marginTop: height * 0.01
    }


})


