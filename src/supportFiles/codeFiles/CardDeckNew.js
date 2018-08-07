import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    ImageBackground, Animated
} from 'react-native';

import CardStack, { Card } from 'react-native-card-stack-swiper';
import CardFlip from 'react-native-card-flip';

export default class CardDeckNew extends React.Component {

    static navigationOptions =
        {
            title: 'CardDeckNew',
        };

    constructor(props){
        super();
        this.state = {
            numberValue: '01'
        }
        this.state = {
            isView: false,
        }
       this.state = {
            fadeAnim: new Animated.Value(0),  // Initial value for opacity: 0
          }
        this.state = {
            videos: [
                {
                    id: "WpIAc9by5iU",
                    thumbnail: require('../../img/whitecard.png'),
                    title: "a",
                    slideNumber: "1"

                }, {
                    id: "sNPnbI1arSE",
                    thumbnail: require('../../img/whitecard.png'),
                    title: "the",
                    slideNumber: "2"
                }, {
                    id: "VOgFZfRVaww",
                    thumbnail: require('../../img/whitecard.png'),
                    title: "come",
                    slideNumber: "3"

                },
                {
                    id: "VOgFZfRVawp",
                    thumbnail: require('../../img/whitecard.png'),
                    title: "on",
                    slideNumber: "4"

                },
                {
                    id: "VOgFZfRVawq",
                    thumbnail: `require('./whitecard.png')`,
                    title: "see",
                    slideNumber: "5"

                },
                {
                    id: "VOgFZfRVaw3",
                    thumbnail: require('../../img/whitecard.png'),
                    title: "go",
                    slideNumber: "6"

                },
            ],

        };
        this.state = {
            errors: []
        }
        this.props = props;
    }

flipCurrentView( card,){
    this.card.flip()
    this.setState({isView:!this.state.isView});
    
}

getInitialState() {
    return { absoluteChangeX: new Animated.Value(0) };
  }

fadeAnimationStart() {
    this.setState({isView:!this.state.isView})
    Animated.timing(                  // Animate over time
      this.state.fadeAnim,            // The animated value to drive
      {
        toValue: 1,                   // Animate to opacity: 1 (opaque)
        duration: 10000,              // Make it take a while
      }
    ).start();                        // Starts the animation
  }
  fadeAnimationStop() {
    this.setState({isView:!this.state.isView})
    this.getInitialState();                        // Starts the animation
  }
    handleLeftForLastCard(){
        console.log('Left Swipe')

    }
    render() {
        const isView = this.state.isView;
        
        
        return (
            
            <View style={{flex:1}}>
            {!isView ?
                    <TouchableOpacity style={[styles.buttonBack]}  onPress={() => this.props.navigation.navigate('Home')}>
                    <Image  style={styles.imageLeft} source={require('./arrowRight.png')} />
                </TouchableOpacity>:null}

                <CardStack
                    style={styles.content}
                    ref={swiper => {
                        this.swiper = swiper
                    }}
                    disableTopSwipe = {true}
                    disableBottomSwipe = {true}
                    // onSwiped={() => this.swiper._goBack()}
                    onSwipedLeft={() => console.log('onSwipedLeft')}
                    onswipedRight={() => 
                        console.log('RightSwipe')
                   }
                    onSwipedTop={() => console.log('onSwipedTop')}
                    onSwipedBottom={() => console.log('onSwipedBottom')}

                >
                
                    <Card style={[styles.card6]}>
                    <ImageBackground style={{ width: 270, height: 370, borderRadius: 25 }} source={require('./whitecard.png')} >
                    <Text style={styles.label}>a</Text>
                    <TouchableOpacity
                                              style={[styles.container,{marginTop:2}]}
                                              onPress={() =>  this.setState({isView:!this.state.isView})}>
                                <Image source={require('./bulb.png')} style={styles.imageBulb}/>
                            </TouchableOpacity>
                      </ImageBackground>
                    </Card>
                    
                    <Card style={[styles.card5]}>
                    <ImageBackground style={{ width: 275, height: 385, borderRadius: 25 }} source={require('./whitecard.png')} >
                    <Text style={styles.label}>the</Text>
                    <TouchableOpacity
                                              style={[styles.container,{marginTop:2}]}
                                              onPress={() => this.setState({isView:!this.state.isView})}>
                                <Image source={require('./bulb.png')} style={styles.imageBulb}/>
                            </TouchableOpacity>
                    </ImageBackground>
                    </Card>
                    <Card style={[styles.card4]}>
                    <ImageBackground style={{ width: 280, height: 400, borderRadius: 25 }} source={require('./whitecard.png')} >
                    <Text style={styles.label}>come</Text>
                    <TouchableOpacity
                                              style={[styles.container,{marginTop:2}]}
                                              onPress={() => this.setState({isView:!this.state.isView})}>
                                <Image source={require('./bulb.png')} style={styles.imageBulb}/>
                            </TouchableOpacity>
                    </ImageBackground>
                    </Card>
                    <Card style={[styles.card3]}>
                    <ImageBackground style={{ width: 285, height: 415, borderRadius: 25 }} source={require('./whitecard.png')} >
                    <Text style={styles.label}>on</Text>
                    <TouchableOpacity
                                              style={[styles.container,{marginTop:2}]}
                                              onPress={() => this.setState({isView:!this.state.isView})}>
                                <Image source={require('./bulb.png')} style={styles.imageBulb}/>
                            </TouchableOpacity>
                    </ImageBackground>
                    </Card>
                    <Card style={[styles.card2]}>
                    <ImageBackground style={{ width: 290, height: 430, borderRadius: 25 }} source={require('./whitecard.png')} >
                    <Text style={styles.label}>see</Text>
                    <TouchableOpacity
                                              style={[styles.container,{marginTop:2}]}
                                              onPress={() => this.setState({isView:!this.state.isView})}>
                                <Image source={require('./bulb.png')} style={styles.imageBulb}/>
                            </TouchableOpacity>
                    </ImageBackground>
                    </Card>
                    <Card style={[styles.card1]}>
                    <ImageBackground style={{ width: 295, height: 445, borderRadius: 25 }} source={require('./whitecard.png')} >
                    <Text style={styles.label}>go</Text>
                    <TouchableOpacity
                                              style={[styles.container,{marginTop:2}]}
                                              onPress={() => this.setState({isView:!this.state.isView})}>
                                <Image source={require('./bulb.png')} style={styles.imageBulb}/>
                            </TouchableOpacity>
                    </ImageBackground>
                    </Card>

                </CardStack>

    <View>
            {isView ? <Animated.View style={{width:"100%",height:"100%"}}>
                    
                   <View style={styles.viewPopupBckgnd}>
                    <ImageBackground style={{height:'80%',width:'100%',shadowColor:"#123456",shadowOpacity:0.5,zIndex:2,borderRadius:10}}
                           source={require('./Dog5.png')}>
                             <TouchableOpacity style={[styles.button,{marginTop:20}]}  onPress={() => this.setState({isView:!this.state.isView})}>
                        <Image style={styles.imageCross} source={require('./cross.png')} />
                    </TouchableOpacity>

                            </ImageBackground>
                           <Text
                            style={styles.label1}>{"This is place where we show text according to the sentence"}</Text>

                    {/* <ImageBackground style={{height:'40%',width:'100%',marginTop:10}} source={require('./whitecard.png')}>
                        <Text
                            style={styles.label1}>{"This is place where we show text according to the sentence"}</Text>
                    </ImageBackground> */}
                    </View>
                </Animated.View>   : null}
            </View>
            

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: 'transparent',
    },
    viewPopupBckgnd: {
        flex: 1,
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'column',
        backgroundColor: '#f2f2f2',
    },
    content:{
        bottom:100,
        flex: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    card:{
        width: 320,
        height: 550,
        backgroundColor: 'pink',
        borderRadius: 5,
        shadowColor: 'rgba(0,0,0,0.5)',
        shadowOffset: {
            width: 0,
            height: 1
        },
        shadowOpacity:0.5,
    },
    card1: {

        width: 295,
        height: 445,
        marginTop:100,
        borderRadius: 20,
        shadowColor: 'rgba(0,0,0,0.5)',
        shadowOffset: {
            width: 0,
            height: 1
        },
        shadowOpacity:0.5,
    },
    card2: {

        width: 290, height: 430,
        marginTop:120,
        borderRadius: 15,
        shadowColor: 'rgba(0,0,0,0.5)',
        shadowOffset: {
            width: 0,
            height: 1
        },
        shadowOpacity:0.5,
    },
    card3: {

        width: 285, height: 415,
        marginTop:140,
        borderRadius: 10,
        shadowColor: 'rgba(0,0,0,0.5)',
        shadowOffset: {
            width: 0,
            height: 1
        },
        shadowOpacity:0.5,
    },
    card4: {

        width: 280, height: 400,
        marginTop:160,
        borderRadius: 5,
        shadowColor: 'rgba(0,0,0,0.5)',
        shadowOffset: {
            width: 0,
            height: 1
        },
        shadowOpacity:0.5,
    },
    card5: {

        width: 275, height: 385,
        marginTop:180,
        borderRadius: 5,
        shadowColor: 'rgba(0,0,0,0.5)',
        shadowOffset: {
            width: 0,
            height: 1
        },
        shadowOpacity:0.5,
    },
    card6: {

        width: 270, height: 370,
        marginTop:200,
        borderRadius: 5,
        shadowColor: 'rgba(0,0,0,0.5)',
        shadowOffset: {
            width: 0,
            height: 1
        },
        shadowOpacity:0.5,
    },

    label: {
        lineHeight: 300,
        textAlign: 'center',
        fontSize: 60,
        fontFamily: 'System',
        color: '#000000',
        backgroundColor: 'transparent',
       // backgroundColor: 'green',
    },
    footer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    buttonContainer:{
        width:220,
        flexDirection:'row',
        justifyContent: 'space-between',
    },
    button:{
        alignSelf: 'flex-end',
      marginTop: '10%',
      right:'5%',
      position: 'relative', // add if dont work with above
      justifyContent: 'center',
      alignItems: 'center',
    },
    orange:{
        width:55,
        height:55,
        borderWidth:6,
        borderColor:'rgb(246,190,66)',
        borderWidth:4,
        borderRadius:55,
        marginTop:-15
    },
    green:{
        width:75,
        height:75,
        backgroundColor:'#fff',
        borderRadius:75,
        borderWidth:6,
        borderColor:'#01df8a',
    },
    red:{
        width:75,
        height:75,
        backgroundColor:'#fff',
        borderRadius:75,
        borderWidth:6,
        borderColor:'#fd267d',
    },
        buttonBack: {

      alignSelf: 'flex-start',
      zIndex:50,
      marginTop: '10%',
      left:'5%',
      position: 'relative', // add if dont work with above
      justifyContent: 'center',
      alignItems: 'center',
            // zIndex:50,
            // marginTop:'5%',
            // marginLeft:'2%',
            // position:'relative',
          },
    
        imageLeft:{
            width: 50,
            height: 50,
        },
        imageBulb:{
            width: 26,
            height: 36,
        },
        imageCross:{
            width: 32,
            height: 32,
        },
        label1: {
            lineHeight:50,
            textAlign: 'center',
            fontSize: 20,
            fontFamily: 'System',
            color: '#000000',
            backgroundColor: 'white',
            marginLeft:10,
            marginRight:10,
            
           
        },
});