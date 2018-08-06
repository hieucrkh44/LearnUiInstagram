


import React,{Component } from 'react'
import{View,Text,StyleSheet} from 'react-native'
import {Icon,TabBar} from 'native-base'
class SeachTab extends Component{
    static navigationOptions = {

        tabBarIcon: ({ tintColor }) => (
            <Icon name="md-search" style={{ color: tintColor }} />
        )
    }
    render(){
        return(
            <View style={styles.container}>
                <Text>
                    SeachTab
                </Text>
            </View>
        )
    }
}
export default SeachTab
const styles=StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})