

import React,{Component} from 'react';
import {View,Text,StyleSheet,Platform} from 'react-native';
import {Icon, Header, Body, Title} from 'native-base';
import {TabNavigator} from 'react-navigation';
import HomeTab from './AppTabNavigator/HomeTab'
import LikeTab from './AppTabNavigator/LikeTab'
import SearchTab from './AppTabNavigator/SearchTab'
import ProfileTab from './AppTabNavigator/ProfileTab'
import AddMediaTab from './AppTabNavigator/AddMediaTab'

class MainScreen extends Component{
    static navigationOptions = {
      header:null
    }
    render(){
        return(
           <AppTabNavigator />   
        )
    }
}
export default MainScreen 

const AppTabNavigator=TabNavigator({
    HomeTab:{
        screen:HomeTab
    },
    SeachTab:{
        screen:SearchTab
    },
    AddMediaTab:{
        screen:AddMediaTab
    },
    LikeTab:{
        screen:LikeTab
    },
    ProfileTab:{
        screen:ProfileTab
    },

}, {
    animationEnabled: true,
    swipeEnabled: true,
    tabBarPosition: "bottom",
    tabBarOptions: {
        style: {
            ...Platform.select({
                android: {
                    backgroundColor: 'white',
                }
            }),
            
        },
        activeTintColor: '#000',
        inactiveTintColor: '#d1cece',
        showLabel: false,
        showIcon: true,
        pressColor:'black',
       
    }
})
const styles=StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})