


import React,{Component } from 'react'
import{View,Text,StyleSheet,Image} from 'react-native'
import {Card,CardItem,Thumbnail,Body,Left,Right,Button,Icon} from 'native-base'


class CardComponent extends Component{
   
    render(){
        const images={
            "1":require('../images/imagePortrait.jpg'),
            "2":require('../images/imagePortrait1.jpg'),
            "3":require('../images/imagePortrait2.jpg'),
            "4":require('../images/imagePortrait3.jpg'),
            "5":require('../images/imagePortrait4.jpg'),

        }
        return(
            <Card>
                <CardItem>
                    <Left>
                        <Thumbnail source={require('../images/imagePortrait7.jpg')}/>
                        <Body>
                            <Text style={{color:'black'}}>hieuudang</Text>
                        </Body>
                    </Left>
                </CardItem>
                <CardItem>
                    <Image source={images[this.props.imageSource]} style={{height:200,width:null,flex:1}}/>
                </CardItem>
                <CardItem>
                    <Left>
                        <Button transparent>
                        <Image source={require('../icons/icon-heart.png')} style={{
                        height:25,width:25}
                        }/>
                        </Button>
                        <Button transparent>
                        <Image source={require('../icons/icon-chat.png')} style={{
                        height:25,width:25}}/>
                        </Button>
                        <Button transparent>
                        <Image source={require('../icons/icon-send.png')} style={{
                        height:25,width:25}}/>
                        </Button>
                    </Left>
                </CardItem>
                     <Text style={{marginLeft:18,height:20,fontSize:16,color:'black',marginBottom:2}}>{this.props.likes}</Text>
                     
                        <CardItem style={{marginLeft:2}}>
                            <Body>
                                <Text>
                                    <Text style={{color:'black',fontWeight:'bold'}}>hieuudang </Text>
                                    {this.props.status}
                                </Text>
                            </Body>
                        </CardItem>
            </Card>

            

            
        )
    }
}
export default CardComponent
const styles=StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})