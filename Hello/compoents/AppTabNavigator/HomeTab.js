



import React,{Component } from 'react'
import{View,Text,StyleSheet,ScrollView} from 'react-native'
import {Icon,TabBar, Container, Content,Thumbnail, Header, Body, Title, Left, Right} from 'native-base'
import CardComponent from '../CardComponent'
class HomeTab extends Component{
    
    static navigationOptions = {

        tabBarIcon: ({ tintColor }) => (
            <Icon name="md-home" style={{ color: tintColor }} />
        )
    }
    render(){
        return(
           <Container style={styles.container}>
           <Header style={{backgroundColor:'white',borderBottomWidth:1,borderBottomColor:'grey'}}>
               <Left><Icon name="md-camera" style={{paddingLeft: 10,}}></Icon></Left>
               <Text style={styles.header}>Instagram</Text>
               <Right><Icon name="md-send" style={{paddingRight: 10,}}></Icon></Right>
           </Header>
               <Content>
                   <View style={{height:100,borderBottomWidth:1,borderBottomColor:'white'}}>
                       <View style={{flex:1,flexDirection:'row',justifyContent:'space-between',
                       alignItems:'center',paddingHorizontal:7}}>
                        <Text style={{fontWeight:'bold'}}>Stories</Text>

                       <View style={{flexDirection:'row',alignItems:'center'}}>
                        <Icon name="md-play" style={{fontSize: 14,}}></Icon>
                        <Text style={{fontWeight:'bold'}}>Watch All</Text>
                       </View>
                       </View>

                       <View style={{flex:3}}>
                        <ScrollView
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={{
                            alignItems:'center',
                            paddingStart:5,
                            paddingEnd:5,
                        }}
                        >
                        <Thumbnail 
                        style={{marginHorizontal: 5,borderColor:'grey',borderWidth:2}}
                        source={require('../../images/imagePortrait.jpg')}
                        />
                        <Thumbnail 
                        style={{marginHorizontal: 5,borderColor:'grey',borderWidth:2}}
                        source={require('../../images/imagePortrait1.jpg')}
                        />
                        <Thumbnail 
                        style={{marginHorizontal: 5,borderColor:'grey',borderWidth:2}}
                        source={require('../../images/imagePortrait2.jpg')}
                        />
                        <Thumbnail 
                        style={{marginHorizontal: 5,borderColor:'grey',borderWidth:2}}
                        source={require('../../images/imagePortrait3.jpg')}
                        />
                        <Thumbnail 
                        style={{marginHorizontal: 5,borderColor:'grey',borderWidth:2}}
                        source={require('../../images/imagePortrait4.jpg')}
                        />
                        <Thumbnail 
                        style={{marginHorizontal: 5,borderColor:'grey',borderWidth:2}}
                        source={require('../../images/imagePortrait5.jpg')}
                        />
                        <Thumbnail 
                        style={{marginHorizontal: 5,borderColor:'grey',borderWidth:2}}
                        source={require('../../images/imagePortrait6.jpg')}
                        />
                        <Thumbnail 
                        style={{marginHorizontal: 5,borderColor:'grey',borderWidth:2}}
                        source={require('../../images/imagePortrait7.jpg')}
                        />
                        <Thumbnail 
                        style={{marginHorizontal: 5,borderColor:'grey',borderWidth:2}}
                        source={require('../../images/imagePortrait8.jpg')}
                        />
                        <Thumbnail 
                        style={{marginHorizontal: 5,borderColor:'grey',borderWidth:2}}
                        source={require('../../images/imagePortrait9.jpg')}
                        />
                        <Thumbnail 
                        style={{marginHorizontal: 5,borderColor:'grey',borderWidth:2}}
                        source={require('../../images/imagePortrait10.jpg')}
                        />
                       
                        </ScrollView>
                        </View>
                   </View>
                   <CardComponent imageSource="1" likes="101 likes" status="Nice"/>
                   <CardComponent imageSource="2" likes="201 likes" status="I love you "/>
                   <CardComponent imageSource="3" likes="123 likes" status="Oh Year"/>
                   <CardComponent imageSource="4" likes="5 likes"   status="Hey guy"/>
                   <CardComponent imageSource="5" likes="10 likes"  status="Look at me !"/>
               </Content>
           </Container>
        )
    }
}
export default HomeTab
const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: 'white',

    },
    header:{
        flex: 1,
        marginBottom: 5,
        marginLeft: 80,
        marginRight: 30,
        marginTop: 15,
        fontSize:20,
        color:'black'
        
    }
})