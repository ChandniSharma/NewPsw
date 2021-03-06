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

export default class CardDeckNew extends React.Component {
    
   
    static navigationOptions =
        {
            title: 'CardDeckNew',
        };

    constructor(props){
        super();
       
        this.state = {
            numberValue:  0,
            
        }
        this.cardCount = 1 ,
       
      this.imageNameBackground = require('./Dog_background.png'),

     
        this.state = {
            isView: false,
        }
        
        
       this.state = {
            fadeAnim: new Animated.Value(0),  // Initial value for opacity: 0
          }
     
        this.state = {
            errors: []
        }
        
        // Add card image and background image
      this.arrayWords = [
          'a','ran','come','up','see','was','the','jump','on','ten','go','two'
      ],

      this.arrayImages = [
                {
                    index:1,
                    title:'a',
                    sentence: 'The zebra ran away.',
                    backgndImage: require('./Dog_background.png'),
                    frontImage: require('./Dog_background.png')
                },
                {
                    index: 2,
                    word: 'ran',
                    sentence: 'The zebra ran away.',
                    backgndImage: require('./Zebra_background.png'),
                    frontImage: require('./Zebra_background.png')
                },
                {
                    index: 3,
                    word: 'come',
                    sentence: 'Please come and see the rainbow.',
                    backgndImage: require('./Rainbow_background.png'),
                    frontImage: require('./Rainbow_background.png')
                },
                {
                    index: 4,
                    word: 'up',
                    sentence: 'The tiger woke up.',
                    backgndImage: require('./Tiger_yawning_background_bw.png'),
                    frontImage: require('./Tiger_yawning_background_bw.png')
                },
                {
                    index: 5,
                    word: 'see',
                    sentence: 'I can see the boat.',
                    backgndImage: require('./Boat_background.png'),
                    frontImage: require('./Boat_background.png')
                },
                {
                    index: 6,
                    word: 'was',
                    sentence: 'The tiger was sleeping.',
                    backgndImage: require('./Tiger_sleeping_background.png'),
                    frontImage: require('./Tiger_sleeping_background.png')
                },
               
                {
                    index: 7,
                    word: 'the',
                    sentence: 'I can catch the ball.',
                    backgndImage: require('./Beachball_background.png'),
                    frontImage: require('./Beachball_background.png')
                },
                {
                    index: 8,
                    word: 'jump',
                    sentence: 'The leopard can jump very high.',
                    backgndImage: require('./Leopard_background.png'),
                    frontImage: require('./Leopard_background.png')
                },
                {
                    index: 9,
                    word: 'on',
                    sentence: 'I sat on the bike.',
                    backgndImage: require('./Bicycle_background.png'),
                    frontImage: require('./Bicycle_background.png')
                },
                {
                    index: 10,
                    word: 'ten',
                    sentence: 'I saw ten kangaroos.',
                    backgndImage: require('./Kangaroos_background.png'),
                    frontImage: require('./Kangaroos_background.png')
                },
                
                {
                    index: 11,
                    word: 'go',
                    sentence: 'Lets go fishing.',
                    backgndImage: require('./Fishing_background.png'),
                    frontImage: require('./Fishing_background.png')
                },
                {
                    index: 12,
                    word: 'two',
                    sentence: 'There were two tigers at the zoo.',
                    backgndImage: require('./Tigercubs_background.png'),
                    frontImage: require('./Tigercubs_background.png')
                },
              
            ],

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

  forChildRightSwipeAction(){
    console.log('Child right swipe ');
  }

    onClickBulb(indexArrayImage){
         this.setState({isView:!this.state.isView});
         let temp = ''+indexArrayImage;
         this.setState({numberValue:temp});

         console.log('Chandni  indexArrayImage'+indexArrayImage+'number value  '+' '+this.state.numberValue);

       // console.log('Chandni Imge name bckgnd '+' '+this.state.imageNameBackground);

    }

    onCardSwipedRight(){

        console.log('Card Count initial Right '+this.cardCount);

        this.imageNameBackground = this.arrayImages[this.cardCount].backgndImage;
        if (this.cardCount>0) {
            this.cardCount = this.cardCount-1;
            let temp = ''+(this.cardCount);
            this.setState({numberValue:temp});

        }
         console.log('Chandni  on swipe right'+this.cardCount+'number value  '+' '+this.state.numberValue);
    }

    onCardSwipedLeft(){

         console.log('Card Count initial '+this.cardCount);
         this.imageNameBackground = this.arrayImages[this.cardCount].backgndImage;

         this.cardCount = this.cardCount+1;
         let temp = ''+(this.cardCount);
         this.setState({numberValue:temp});
        console.log('Chandni  on swipe left '+this.cardCount+'number value  '+' '+this.state.numberValue+'Image name is '+this.imageNameBackground);

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
       
        console.log('number value '+temp, this.imageNameBackground)
        return (
            <ImageBackground style={{width:"100%",height:"100%", backgroundColor:'#40000000'}} source={this.imageNameBackground}>
        
                {!isView?<ImageBackground style={{width:"100%",height:"100%", backgroundColor:'#00000088'}} source={this.imageNameBackground}>


                    <TouchableOpacity style={[styles.buttonBack]}  onPress={() => this.props.navigation.navigate('Home')}>
                        <Image  style={styles.imageLeft} source={require('./arrowRight.png')} />
                    </TouchableOpacity>

                    <Text style={{textAlign: 'center', color:'white', marginTop: '10%', position:'absolute',fontSize: 15,left:"42%"}}>sightwords</Text>
                    {/* <Text style={{textAlign: 'center', color:'pink',backgroundColor:'red', marginTop: 50}}>sightwords</Text> */}

                    <View style={{width:"100%",height:"50%",justifyContent:'center',alignItems:'center'}}>

                    <CardStack
                        style={{ alignItems: 'center', justifyContent: 'center', backgroundColor:'transparent',flex: 0.4,bottom:'5%'}}
                        ref={swiper => {
                            this.swiper = swiper
                        }}
                        disableTopSwipe = {true}

                        disableBottomSwipe = {true}
                        // onSwiped={() => this.swiper._goBack()}
                        onSwipedLeft={() =>
                            this.onCardSwipedLeft()}
                        onSwipedTop={() => console.log('onSwipedTop')}
                        onSwipedBottom={() => console.log('onSwipedBottom')}

                    >

                        <Card style={[styles.card6]} onSwipedRight={()=>this.onCardSwipedRight()}>
                            <ImageBackground style={{ width: 270, height: 370, borderRadius: 25 }} source={require('./whitecard.png')} >
                                <Text style={styles.label}>{this.arrayWords[0]}</Text>
                                <TouchableOpacity
                                    style={[{bottom:'5%', alignItems:'center',position:'relative'}]}
                                    onPress={() =>this.onClickBulb(1)}>
                                    <Image source={require('./question.png')} style={styles.imageQuestionMark}/>
                                </TouchableOpacity>
                            </ImageBackground>
                        </Card>

                        <Card style={[styles.card5]} onSwipedRight={()=>this.onCardSwipedRight()}>
                            <ImageBackground style={{ width: 275, height: 385, borderRadius: 25 }} source={require('./whitecard.png')} >
                                <Text style={styles.label}>the</Text>
                                <TouchableOpacity
                                    style={[styles.container,{marginTop:2}]}
                                    onPress={() => this.onClickBulb(2)}>
                                    <Image source={require('./question.png')} style={styles.imageQuestionMark}/>
                                </TouchableOpacity>
                            </ImageBackground>
                        </Card>
                        <Card style={[styles.card4]} onSwipedRight={()=>this.onCardSwipedRight()}>
                            <ImageBackground style={{ width: 280, height: 400, borderRadius: 35 }} source={require('./whitecard.png')} >
                                <Text style={styles.label}>come</Text>
                                <TouchableOpacity
                                    style={[styles.container,{marginTop:2}]}
                                    onPress={() => this.onClickBulb(3)}>
                                    <Image source={require('./question.png')} style={styles.imageQuestionMark}/>
                                </TouchableOpacity>
                            </ImageBackground>
                        </Card>
                        <Card style={[styles.card3]} onSwipedRight={()=>this.onCardSwipedRight()}>
                            <ImageBackground style={{ width: 285, height: 415, borderRadius: 35 }} source={require('./whitecard.png')} >
                                <Text style={styles.label}>on</Text>
                                <TouchableOpacity
                                    style={[styles.container,{marginTop:2}]}
                                    onPress={() => this.onClickBulb(4)}>
                                    <Image source={require('./question.png')} style={styles.imageQuestionMark}/>
                                </TouchableOpacity>
                            </ImageBackground>
                        </Card>
                        <Card style={[styles.card2]} onSwipedRight={()=>this.onCardSwipedRight()}>
                            <ImageBackground style={{ width: 290, height: 430, borderRadius: 45 }} source={require('./whitecard.png')} >
                                <Text style={styles.label}>see</Text>
                                <TouchableOpacity
                                    style={[styles.container,{marginTop:2}]}
                                    onPress={() => this.onClickBulb(5)}>
                                    <Image source={require('./question.png')} style={styles.imageQuestionMark}/>
                                </TouchableOpacity>
                            </ImageBackground>
                        </Card>
                        <Card style={[styles.card1]} onSwipedRight={()=>this.onCardSwipedRight()}>
                            <ImageBackground style={{ width: 295, height: 445, borderRadius: 45 }} source={require('./whitecard.png')} >
                                <Text style={styles.label}>go</Text>
                                <TouchableOpacity
                                    style={[styles.container,{marginTop:2}]}
                                    onPress={() => this.onClickBulb(6)}>
                                    <Image source={require('./question.png')} style={styles.imageQuestionMark}/>
                                </TouchableOpacity>
                            </ImageBackground>
                        </Card>

                    </CardStack>



                    </View>

                    <TouchableOpacity style={{bottom:"-20%",left:"45%"}}>
                        <Image source={require('./audio_off.png')} style={{height:30, width:20}}/>
                    </TouchableOpacity>

                    <TextInput editable={false} style={{textAlign: 'center',bottom:'2%',position:'absolute',left:"42%"}} value={temp}/>



                </ImageBackground>:null}
            {isView ?
                <Animated.View style={{width:"100%",height:"100%"}}>
                <View style={styles.viewPopupBckgnd}>
                   <ImageBackground style={{width:"100%",height:"100%", backgroundColor:'#90000000',justifyContent:'center',alignItems:'center'}}>
                       <View style={styles.card}>
                    <ImageBackground style={{height:'85%',width:'100%',borderRadius:20}}
                           source={this.imageNameBackground}>
                             <TouchableOpacity style={[styles.button,{marginTop:20}]}  onPress={() => this.setState({isView:!this.state.isView})}>
                        <Image style={styles.imageCross} source={require('./cross.png')} />
                    </TouchableOpacity>

                    </ImageBackground>
                        <Text
                            style={styles.label1}>{"I saw "}<Text style={[styles.label1,{color: '#4a90e2'}]}>{"a"}</Text> {" dog"}</Text>
                    </View>
                   </ImageBackground>
                </View>
                </Animated.View>   : null}
            
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
            top:"10%",
            textAlign: 'center',
            fontSize: 30,
            fontFamily: 'System',
            color: '#000000',
            backgroundColor: 'white',
           
        },
});