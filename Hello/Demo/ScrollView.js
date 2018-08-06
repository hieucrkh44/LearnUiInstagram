

import React,{Component} from 'react'
import {ScrollView,View,Dimensions,Text} from 'react-native'

export default class aHorizontalScrollView extends Component{
    render(){
        let screenWidth=Dimensions.get('window').width;
        let screenHeight=Dimensions.get('window').height;
        return(
            <ScrollView
            horizontal={true}
            pagingEnabled={true}
            showsHorizontalScrollIndicator={true}
            scrollEventThrottle={10}
            >
            <View style={{
                backgroundColor:'#5f9ea0',
                flex:1,
                width:screenWidth,
                marginTop:20,
                justifyContent:'center',
                alignItems:'center'
            }}>
            <Text style={{
                fontSize:20,
                padding:15,
                color:'white',
                textAlign:'center'
            }}>
                Screen 1
            </Text>
            </View>
            <View style={{
                backgroundColor:'#dce775',
                flex:1,
                width:screenWidth,
                marginTop:20,
                justifyContent:'center',
                alignItems:'center'
            }}>
            <Text style={{
                fontSize:20,
                padding:15,
                color:'white',
                textAlign:'center'
            }}>
                Screen 2
            </Text>
            </View>
            <View style={{
                backgroundColor:'#ff8a65',
                flex:1,
                width:screenWidth,
                marginTop:20,
                justifyContent:'center',
                alignItems:'center'
            }}>
            <Text style={{
                fontSize:20,
                padding:15,
                color:'white',
                textAlign:'center'
            }}>
                Screen 3
            </Text>
            </View>
            </ScrollView>
        )
    }
}