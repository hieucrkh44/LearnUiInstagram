


import React,{Component} from 'react'
import {ViewPagerAndroid,View,StyleSheet,Text} from 'react-native'

export default class ViewPageExample extends Component{
    render(){
        return(
            <ViewPagerAndroid 
                style={{flex:1}}
                initialPage={0}//number page star
            >
            <View style={{backgroundColor:'#ee7a55'}}>
            <Text style={styles.container}>Screen1</Text>
            </View>
            <View style={{backgroundColor:'#e9db37'}}>
            <Text style={styles.container}>Screen2</Text>
            </View>
            <View style={{backgroundColor:'#f47373'}}>
            <Text style={styles.container}>Screen3</Text>
            </View>
               
            </ViewPagerAndroid>
        )
    }
}
const styles=StyleSheet.create({
    container:{
        fontSize: 16,
        fontWeight:'bold',
        padding: 15,
        color:'white',
        textAlign:'center',
        alignItems: 'center',
    }
})