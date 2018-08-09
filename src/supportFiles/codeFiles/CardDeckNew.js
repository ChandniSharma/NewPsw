import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    ImageBackground, Animated,
    TextInput
} from 'react-native';

import CardStack, { Card } from 'react-native-card-stack-swiper';
//import imagesCardDeckNew from 'imagesCardDeckNew';
import CardFlip from 'react-native-card-flip';

export default class CardDeckNew extends React.Component {
    
   
    static navigationOptions =
        {
            title: 'CardDeckNew',
        };

    constructor(props){
        super();
       
        this.state = {
            numberValue:  0
        }
        this.state = {
            isView: false,
        }
        this.state = {
         
            imageNameBackground: './back1.png',
        }
        
       this.state = {
            fadeAnim: new Animated.Value(0),  // Initial value for opacity: 0
          }
     
        this.state = {
            errors: []
        }

        // Add card image and background image
    

     /* this.state = {
            arrayImages: [
                {
                    backgndImage: require('./back1.png'),
                    frontImage: require('./back1.png')
                },
                {
                    backgndImage: require('./back2.png'),
                    frontImage: require('./back2.png')
                },
                {
                    backgndImage: require('./back3.png'),
                    frontImage: require('./back3.png')
                },
                {
                    backgndImage: require('./back4.png'),
                    frontImage: require('./back4.png')
                },
                {
                    backgndImage: require('./back5.png'),
                    frontImage: require('./back5.png')
                },
                {
                    backgndImage: require('./back6.png'),
                    frontImage: require('./back6.png')
                },
            ],

      }; */
    

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
    
counter(indexArrayImage){
    
        this.setState({
            numberValue : indexArrayImage
        });
   
}


onClickBulb(indexArrayImage){
     this.setState({isView:!this.state.isView});
     let temp = ''+indexArrayImage;
     this.setState({numberValue:temp});

     console.log('Chandni  indexArrayImage'+indexArrayImage+'number value  '+' '+this.state.numberValue);

    ///* background img try 
    var imageName1 = './back1.png';
        var imageName2 = './back2.png';
        var imageName3 = './back3.png';
     
    
    if (indexArrayImage === 0) {
        this.setState({imageNameBackground:'./back1.png'});
    } else {
        this.setState({imageNameBackground:'./back2.png'});

    }
   // console.log('Chandni Imge name bckgnd '+' '+this.state.imageNameBackground);
    
}

onCardSwipedRight(indexArrayImage){

    
    let temp = ''+(indexArrayImage+1);
    this.setState({numberValue:temp});

    console.log('Chandni  on swipe right'+indexArrayImage+'number value  '+' '+this.state.numberValue);


    
}

onCardSwipedLeft(indexArrayImage){

    let temp = ''+(indexArrayImage-1);
    this.setState({numberValue:temp});

    console.log('Chandni  on swipe left '+indexArrayImage+'number value  '+' '+this.state.numberValue);

}

    render() {
        const isView = this.state.isView;
        var imageName1 = './back1.png';
        // For showing number below to the card.
        let temp;
        if (this.state.numberValue >= 0) {
            temp = String(this.state.numberValue)+' of 220';
        } else {
            temp = '1' +' of 220';
        }
       
        console.log('number value '+temp)
        return (
        
        
            <ImageBackground style={{ backgroundColor:'transparent', flex: 1,flexDirection:'column',alignItems:'center',justifyContent:'space-between'}} source={require(imageName1)}>
             
            {!isView ?
                    <TouchableOpacity style={[styles.buttonBack]}  onPress={() => this.props.navigation.navigate('Home')}>
                    <Image  style={styles.imageLeft} source={require('./arrowRight.png')} />
                </TouchableOpacity>:null}

               {!isView ? <Text style={{textAlign: 'center', color:'white', marginTop: '5%', position:'absolute',fontSize: 20}}>sightwords</Text>:null}
                {/* <Text style={{textAlign: 'center', color:'pink',backgroundColor:'red', marginTop: 50}}>sightwords</Text> */}

               
{!isView ?
                <CardStack
                 style={{ alignItems: 'center', justifyContent: 'center', backgroundColor:'transparent',flex: 0.4,bottom:'5%'}}
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
                
                    <Card style={[styles.card6]} onswipedRight={() => 
                        console.log('RightSwipe')
                   }>
                    <ImageBackground style={{ width: 270, height: 370, borderRadius: 25 }} source={require('./whitecard.png')} >
                    <Text style={styles.label}>a</Text>
                    <TouchableOpacity
                                              style={[{bottom:'5%', alignItems:'center',position:'relative'}]}
                                              onPress={() =>this.onCardSwipedLeft(10)}>
                                <Image source={require('./question.png')} style={styles.imageQuestionMark}/>
                            </TouchableOpacity>
                      </ImageBackground>
                    </Card>
                    
                    <Card style={[styles.card5]}>
                    <ImageBackground style={{ width: 275, height: 385, borderRadius: 25 }} source={require('./whitecard.png')} >
                    <Text style={styles.label}>the</Text>
                    <TouchableOpacity
                                              style={[styles.container,{marginTop:2}]}
                                              onPress={() => this.onClickBulb(2)}>
                                <Image source={require('./question.png')} style={styles.imageQuestionMark}/>
                            </TouchableOpacity>
                    </ImageBackground>
                    </Card>
                    <Card style={[styles.card4]}>
                    <ImageBackground style={{ width: 280, height: 400, borderRadius: 35 }} source={require('./whitecard.png')} >
                    <Text style={styles.label}>come</Text>
                    <TouchableOpacity
                                              style={[styles.container,{marginTop:2}]}
                                              onPress={() => this.onClickBulb(3)}>
                                <Image source={require('./question.png')} style={styles.imageQuestionMark}/>
                            </TouchableOpacity>
                    </ImageBackground>
                    </Card>
                    <Card style={[styles.card3]}>
                    <ImageBackground style={{ width: 285, height: 415, borderRadius: 35 }} source={require('./whitecard.png')} >
                    <Text style={styles.label}>on</Text>
                    <TouchableOpacity
                                              style={[styles.container,{marginTop:2}]}
                                              onPress={() => this.onClickBulb(4)}>
                                <Image source={require('./question.png')} style={styles.imageQuestionMark}/>
                            </TouchableOpacity>
                    </ImageBackground>
                    </Card>
                    <Card style={[styles.card2]}>
                    <ImageBackground style={{ width: 290, height: 430, borderRadius: 45 }} source={require('./whitecard.png')} >
                    <Text style={styles.label}>see</Text>
                    <TouchableOpacity
                                              style={[styles.container,{marginTop:2}]}
                                              onPress={() => this.onClickBulb(5)}>
                                <Image source={require('./question.png')} style={styles.imageQuestionMark}/>
                            </TouchableOpacity>
                    </ImageBackground>
                    </Card>
                    <Card style={[styles.card1]}>
                    <ImageBackground style={{ width: 295, height: 445, borderRadius: 45 }} source={require('./whitecard.png')} >
                    <Text style={styles.label}>go</Text>
                    <TouchableOpacity
                                              style={[styles.container,{marginTop:2}]}
                                              onPress={() => this.onClickBulb(6)}>
                                <Image source={require('./question.png')} style={styles.imageQuestionMark}/>
                            </TouchableOpacity>
                    </ImageBackground>
                    </Card>

                </CardStack> : null} 
                 <TouchableOpacity style={[{width:30,height:20,paddingTop:'15%'}]}
                                              onPress={() =>this.onClickBulb(7)}>
                                <Image source={require('./audio_off.png')} style={{height:30, width:20}}/>
                            </TouchableOpacity>
                 
                 <TextInput editable={false} style={{textAlign: 'center',bottom:'2%',position:'absolute'}} value={temp}/>
    <View>
            {isView ?
                <Animated.View style={{width:"100%",height:"100%"}}>
                <View style={styles.viewPopupBckgnd}>
                   <ImageBackground style={{width:"100%",height:"100%",justifyContent:'center',alignItems:'center'}} source={require('./back5.png')}>
                       <View style={styles.card}>
                    <ImageBackground style={{height:'85%',width:'100%',borderRadius:20}}
                           source={require('./Dog5.png')}>
                             <TouchableOpacity style={[styles.button,{marginTop:20}]}  onPress={() => this.setState({isView:!this.state.isView})}>
                        <Image style={styles.imageCross} source={require('./cross.png')} />
                    </TouchableOpacity>

                    </ImageBackground>
                        <Text
                            style={styles.label1}>{"This is place where we show text according to the sentence"}</Text>
                    </View>
                   </ImageBackground>
                </View>
                </Animated.View>   : null}
            </View>
            

            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'red',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: 'transparent',
    },
    viewPopupBckgnd: {
        height:'100%',
        width: '100%',
        backgroundColor: '#00000088'
    },
    content:{
       //DR bottom:100,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
       /// backgroundColor: 'transparent',
       backgroundColor: 'green',
    },
    card:{
        width: 320,
        height: 500,
        borderRadius: 20,
        backgroundColor:"#ffffff",
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
        marginTop:'0%',
        lineHeight: 300,
        textAlign: 'center',
        fontSize: 60,
        fontFamily: 'System',
        color: '#4a90e2',
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
            width: 32,
            height: 32,
        },
        imageQuestionMark:{
            width: 48,
            height: 48,
            bottom: 30,
        },
        imageCross:{
            width: 32,
            height: 32,
        },
        label1: {
            textAlign: 'center',
            fontSize: 20,
            fontFamily: 'System',
            color: '#000000',
            backgroundColor: 'white',
           
        },
});