




import React,{Component} from 'react';
import {TextInput,View,Text,StyleSheet} from 'react-native';
import {StackNavigator} from 'react-navigation';
import MainScreen from './compoents/MainScreen';
export default class App extends Component{
    render(){
        return(
            <AppStackNavigator/>
        )
    }
}

const AppStackNavigator=StackNavigator({
    Main:{
        screen:MainScreen
    }
})

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
})

