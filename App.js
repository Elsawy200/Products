import *as React from 'react'
class App extends React.Component{

    async componentDidMount() {
        this.get_login_flag()

    }

    async  get_login_flag()
    {
        let data=await AsyncStorage.getItem('login')
        data=JSON.parse(data)
        console.log(data)
        if (data=='true')
        {
            this.props.navigation.navigate('login')
        }
        else if (data=='false')
        {
            this.props.navigation.navigate('product')
        }
    }
}


import {createAppContainer} from "react-navigation";

import {createStackNavigator} from "react-navigation-stack";

import {createSwitchNavigator} from 'react-navigation';


import Details from "./pages/details";
import Product from "./pages/product";
import {createMaterialBottomTabNavigator} from "react-navigation-material-bottom-tabs";
import Product2 from "./pages/product2";
import {Card} from "react-native-paper";
import Cart from "./pages/cart";
import Profile from "./pages/profile";
import {AsyncStorage, View} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import Producer from './pages/producer';
import Company from './pages/company';
import LogIN from './pages/login';
import SignuP from './pages/signup';
import Orders from "./pages/orders";

const Auth = createStackNavigator({


        login: {
            screen: LogIN,
        },

        signup: {
            screen: SignuP
        }

        // Details:{
        //  screen:Details
        // },

        // product2:{
        //     screen:Product2
        // },
        // Cart:{
        //     screen:Cart
        // },


    },
    {
        headerMode: 'none',
        initialRouteName: 'login'
    }
);

const Switch = createSwitchNavigator({
    product: {
        screen: Product
    },

    Details: {
        screen: Details,
    },

    product2: {
        screen: Product2
    },

    // Cart: {
    //     screen: Cart
    // },
    Producer: {
        screen: Producer
    },
    profile: {
        screen: Profile
    },

    orders: {
        screen: Orders
    }


})

const tab = createMaterialBottomTabNavigator({
        product: {
            screen: Product,
            navigationOptions: {
                tabBarLabel: 'Products',
                tabBarIcon: ({tintColor}) => (

                    <View>
                        <Icon name="shopping-cart" size={20} color={tintColor}/>
                    </View>
                )
            }
        },


        company: {
            screen: Company,
            navigationOptions: {
                tabBarLabel: 'Company',
                tabBarIcon: ({tintColor}) => (

                    <View>
                        <Icon name="building" size={20} color={tintColor}/>
                    </View>
                )
            }
        },


        Cart: {
            screen:Cart,
            navigationOptions: {
                tabBarLabel: "Cart",
                tabBarIcon: ({tintColor}) => (

                    <View>
                        <Icon name="credit-card" size={20} color={tintColor}/>
                    </View>
                )
            },

        },


        Profile: {
            screen: Profile,
            navigationOptions: {
                tabBarLabel: 'Profile',
                tabBarIcon: ({tintColor}) => (

                    <View>
                        <Icon name="user" size={20} color={tintColor}/>
                    </View>
                )
            }
        },

    },
    {
        activeColor: '#ec744a',
        inactiveColor: 'grey',

        barStyle: {
            backgroundColor: '#fff'
        }
    }
)



export default createAppContainer(

    createSwitchNavigator(
        {
            Auth:Auth,
            tab:tab,
            Switch:Switch,

        },
    )
)





