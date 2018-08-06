



import React,{Component } from 'react'
import{View,Text,StyleSheet,Image,Dimensions} from 'react-native'
import {Icon,TabBar,Container,Content,Right,Left,Button,Body,Header} from 'native-base'
import EntypoIcon from 'react-native-vector-icons/Entypo'
import CardComponent from '../CardComponent'
var {width,height}=Dimensions.get('window')
var images=[
    require('../../images/imagePortrait.jpg'),
    require('../../images/imagePortrait1.jpg'),
    require('../../images/imagePortrait2.jpg'),
    require('../../images/imagePortrait3.jpg'),
    require('../../images/imagePortrait4.jpg'),
    require('../../images/imagePortrait5.jpg'),
    require('../../images/imagePortrait6.jpg'),
    require('../../images/imagePortrait7.jpg'),
    require('../../images/imagePortrait8.jpg'),
    require('../../images/imagePortrait9.jpg'),
    require('../../images/imagePortrait10.jpg'),
]
class ProfileTab extends Component{
    constructor(props){
        super(props);
        this.state={
            activeIndex:0
        }
    }
    segmentClicked=(index)=>{
        this.setState({
            activeIndex:index
        })
    }
    static navigationOptions = {

        tabBarIcon: ({ tintColor }) => (
            <Icon name="md-person" style={{ color: tintColor }} />
        )
    }
    renderSectionOne=()=>{
        return images.map((images,index)=>{
            return(
                <View key={index} style={[{width:(width)/3},{height:(height)/3},
                      {marginBottom: 2},index%3!=0?{paddingLeft:2}:{paddingLeft:0}
                ]}>
                    <Image style={{flex:1,width:undefined,height:undefined}}
                    source={images}
                    />
                </View>
            )
        })
    }
    renderSection=()=>{
        if(this.state.activeIndex==0){
            return(
                <View style={{flexDirection:'row',flexWrap:'wrap'}}>
                   {this.renderSectionOne()}
                </View>
            )
        }
        else if(this.state.activeIndex==1){
            return(
                <View>
                <CardComponent imageSource="1" likes="101 likes"/>
                <CardComponent imageSource="2" likes="201 likes"/>
                <CardComponent imageSource="3" likes="123 likes"/>
                <CardComponent imageSource="4" likes="5 likes"/>
                <CardComponent imageSource="5" likes="10 likes"/>
                </View>
            )
        }
    }
    render(){
        return(
           <Container style={styles.container}>
               <Header style={{backgroundColor:'white',borderBottomWidth:1,borderBottomColor:'grey'}}>
               <Text style={styles.header}>hieuudang</Text>
             <Left>
            <Icon name="md-arrow-dropdown" style={{marginLeft: 10,fontSize:20}}></Icon>
             </Left>
               <Right style={{alignItems:'center'}}>
               <Image source={require('../../icons/icon-time-back.png')} style={{
                   color:'black',height:22,width:22,marginRight:15}}></Image>
                <Image source={require('../../icons/icon-person-add.png')} style={{
                   height:35,width:35,marginRight:13}}></Image>
                <Icon name='md-more' style={{paddingRight:5,color:'black'}}></Icon>
                </Right>
               
           </Header>
           <Content>
               <View style={{paddingTop:10}}>
                    <View style={{flexDirection:'row'}}>

                        <View style={{flex:1,alignItems:'center'}}>
                            <Image source={require('../../images/imagePortrait7.jpg')}
                                   style={{width:75,height:75,borderRadius: 37.5}}/>
                        </View>

                        <View style={{flex:3}}>
                                
                            <View style={{flexDirection: 'row',justifyContent:'space-around'}}>
                                <View style={{alignItems:'center',}}>
                                <Text style={{fontWeight:'900',fontSize:24}} >22</Text>
                                <Text style={styles.custom}>post</Text>
                                </View>
                                <View style={{alignItems:'center'}}>
                                <Text style={{fontWeight:'900',fontSize:24}} >99</Text>
                                <Text style={styles.custom}>follower</Text>
                                </View>
                                <View style={{alignItems:'center'}}>
                                <Text style={{fontWeight:'900',fontSize:24}}>93</Text>
                                <Text style={styles.custom}>following</Text>
                                </View>  
                            </View>

                            <View style={{flexDirection:'row'}}>
                                <Button bordered dark
                                        style={{flex:3,marginLeft:10,
                                        justifyContent:'center',height:30}}>
                                <Text>Edit Profile</Text>
                                </Button>
                                <Button bordered dark style={{flex:1,height:30,
                                        marginRight:10,marginLeft:5,justifyContent:'center'}} >
                                <Icon name='settings'/>
                                </Button>
                        </View>
                       
                        </View>
                    </View>
                    <View style={{paddingVertical:10,paddingHorizontal:10}}>
                        <Text style={{fontWeight:'bold'}}>Hieu_Trung22</Text>
                        <Text>Ăn không ở không :)))</Text>
                        <Text style={{color:'#0d47a1'}}>https://www.facebook.com/dangtrung.hieu.9277</Text>
                    </View>

                    <View >
                        <View style={{flexDirection:'row',justifyContent:'space-around',
                                borderTopWidth:1,borderTopColor:'eae5e5'}}>
                            <Button transparent
                                    onPress={()=>this.segmentClicked(0)}
                                    active={this.state.activeIndex==0}>
                                <Icon name='md-apps'
                                      style={[this.state.activeIndex==0?{}:{color:'grey'}]}/>
                            </Button>

                            <Button transparent
                                    onPress={()=>this.segmentClicked(1)}
                                    active={this.state.activeIndex==1}>
                                <Icon name='md-list'
                                      style={[this.state.activeIndex==1?{}:{color:'grey'}]}/>
                            </Button>

                            <Button transparent
                                    onPress={()=>this.segmentClicked(2)}
                                    active={this.state.activeIndex==2}>
                                <Icon name='md-person'
                                      style={[this.state.activeIndex==2?{}:{color:'grey'}]}/>
                            </Button>

                            <Button transparent
                                    onPress={()=>this.segmentClicked(3)}
                                    active={this.state.activeIndex==3}>
                                <Icon name='md-bookmark'
                                      style={[this.state.activeIndex==3?{}:{color:'grey'}]}/>
                            </Button>
                        </View>

                        {this.renderSection()}
                    </View>
               </View>
           </Content>
           </Container>
        )
    }
}
export default ProfileTab
const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: 'white',

    },
    header:{
        paddingLeft: 10,
        fontSize:20,
        color:'black',
        paddingBottom: 12,
        paddingTop: 12,
    },
    custom:{
        fontSize:10,
        color:'grey',
        fontWeight:'900'
    }
})