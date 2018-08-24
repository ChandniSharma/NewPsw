
 import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    ImageBackground, Animated,
    TextInput,
    Platform
} from 'react-native';
 import AudioPlayer from 'react-native-play-audio';
import { Dimensions } from 'react-native';
import Swiper from 'react-native-deck-swiper'
import CardFlip from 'react-native-card-flip';
import { PlaySound, StopSound, PlaySoundRepeat, PlaySoundMusicVolume } from 'react-native-play-sound';


let result = [];
let count = 0;
let renderCount=0;
let renderArray =[];


export default class CardDeckNew extends Component {
    
   
    static navigationOptions =
        {
            title: 'CardDeckNew',
            gesturesEnabled: false,
        };

    constructor(props){
        super(props);


            this.result = [],

            this.state = {
                flip: false,
                isSwipingBack:false,
                imageNameBackground : require('./Dog_background.png'),
               currentCardNumber: 0,
                cardCount : 1,
                question:'I saw a dog.',
                cardIndex: 0,
                allCards: [],
              displayedCards: [],
              arrayRemovedCards:[],
              numberValue:  0,
              isView: false,
              fadeAnim: new Animated.Value(0),
              errors: [],
              arrayImages: [
                  {   index: 1,
                      word: 'a',
                      sentence: 'I saw a dog.',
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


                ]
             }


        
    }

    componentWillMount(){
        this.pullUsers();
    }

    async pullUsers() {
        try {
            let resultKeyed = [];
            for (var i = 0; i < this.state.arrayImages.length; i++){
                resultKeyed.push(this.state.arrayImages[i]);
            }

            this.setState({
                allCards: resultKeyed.reverse(),
            });
        } catch (err) {
            alert(JSON.stringify(err));
        }
    }

    

    showViewPopup(card,index){
        console.log('showView popup: ',index,card,"\n",card.sentence);
        this['card' + index].flip();

        this.setState({
            isView:!this.state.isView,
            cardIndex: index,
            imageNameBackground :card.backgndImage,
            cardCount : card.index,
            question :card.sentence
        });

    }
    closePopup(card, index){
        this['card' + index].flip();

        this.setState({isView:!this.state.isView})
    }

    flipStart(){

    }

    swipeBack = (index) => {

        console.log("Swiping Back: ",this.state.isSwipingBack)
        if (!this.state.isSwipingBack) {

                this.swiper.swipeBack(() => {

                    this.setIsSwipingBack(index,false)
                })

        }
    };

    setIsSwipingBack = (index,isSwipingBack) => {

        this.setState(
            {
                currentCardNumber : this.state.currentCardNumber-1,
                cardIndex: index-1,
                isSwipingBack: isSwipingBack,
                imageNameBackground : renderArray[index-1].backgndImage,
                cardCount : renderArray[index-1].index,
                question :renderArray[index-1].sentence
            }
        )
    };


    setIsSwiping = (index,isSwipingBack) => {

        console.log("Index: ",index)
        this.setState(
            {
                isSwipingBack: isSwipingBack,
                currentCardNumber : index+1,
                cardIndex: index+1,
                imageNameBackground : renderArray[index+1].backgndImage,
                cardCount : renderArray[index+1].index,
                question :renderArray[index+1].sentence
            }
        )
    };

    swipeCard = (index)=>{
        if (!this.state.isSwipingBack) {

            this.swiper.swipeCard(() => {

                this.setIsSwiping(index,false)
            })

        }
    };

    playCardSound(){

    }

    renderCard = (card, index) => {
     console.log("Device width ",deviceWidth, "\n", "DeviceHeight",deviceHeight);

        // Disable right swipe on first card//

        return (
            <CardFlip style={styles.card1} key={index}  ref={ (card) => this['card' + index] = card }>
                {/* //<Text style={styles.label}>{card.word}</Text> */}
                {/* <TouchableOpacity
                    style={[{bottom:'17%', alignItems:'center',position:'absolute',zIndex:10}]}
                  onPress={() => {this.showViewPopup(card,index)}}> 
                    <Image source={require('./question.png')} style={styles.imageQuestionMark}/>
                </TouchableOpacity> */}

            
      <TouchableOpacity style={[{flexDirection: 'column', position:'absolute',bottom:'17%', alignSelf: 'center',top:'10%',justifyContent: 'space-between',}]} onPress={() => this.showViewPopup(card,index)} >
      <Text style={styles.label}>{card.word}</Text> 
      <Image source={require('./question.png')} style={styles.imageQuestionMark}/>
      </TouchableOpacity>

      
      {/* //</CardFlip><Animated.View style={{width:"100%",height:"100%",alignItems:'center', backgroundColor:'rgba(219,219,219,0.9)'}}> */}
      <Animated.View style={{width:"100%",height:"100%",alignItems:'center', backgroundColor:'transparent',top:'-25%', zIndex:30}}>

          <View style={styles.card}>
              <ImageBackground style={{height:'90%',width:'100%'}}
                     source={this.state.imageNameBackground}>
                       <TouchableOpacity style={[styles.button,{marginTop:20}]}  onPress={() => this.closePopup(card,index)}>
                  <Image style={styles.imageCross} source={require('./cross.png')} />
              </TouchableOpacity>

              </ImageBackground>

              <Text
                  style={styles.label1}>{this.state.question}</Text>
         </View>

          {/* <TouchableOpacity style={{alignSelf:'center',top:30}}>
              <Image source={require('./audio_off.png')} style={{tintColor:'black',height:20,width:20}}/>
          </TouchableOpacity> */}

       {/* //   <TextInput editable={false} style={{alignSelf: 'center',bottom:'2%',position:'absolute'}} value={temp}/> */}
      </Animated.View> 
            </CardFlip>
        )
    };

    render() {
        const isView = this.state.isView;

        
        // For showing number below to the card.

        let temp;
        if (this.state.cardCount >= 0) {
            temp = String(this.state.cardCount)+' of 220';
        } else {
            temp = '1' +' of 220';
        }

        if(renderCount===0){
            renderArray = this.state.arrayImages;
            renderCount++;
        }
        // For disabling right swipe first card 
       

        console.log("CurrentcardNumber Yeh wala: ",this.state.currentCardNumber);

            let swiperStack;

            if (this.state.currentCardNumber !== 0 && this.state.currentCardNumber+1 <12) {

              swiperStack =  <Swiper
                ref={swiper => {
                    this.swiper = swiper
                }}
                //onSwiped={this.onSwiped}
                cards={renderArray}
                cardIndex={this.state.cardIndex}
                cardVerticalMargin={80}
                renderCard={this.renderCard}
                onSwipedLeft={this.swipeCard}
                onSwipedRight={this.swipeBack}
                stackSize={4}
                backgroundColor={'transparent'}
                stackSeparation={stackSepration}
                disableTopSwipe={true}
                disableBottomSwipe={true}
                disableRightSwipe={false}
                disableLeftSwipe={false}
                swipeAnimationDuration={100}
            />
            } else {
                // this is for last card
                if(this.state.currentCardNumber+1 >=11){

                    swiperStack =  <Swiper
                    ref={swiper => {
                        this.swiper = swiper
                    }}
                    //onSwiped={this.onSwiped}
                    cards={renderArray}
                    cardIndex={this.state.cardIndex}
                    cardVerticalMargin={80}
                    renderCard={this.renderCard}
                    onSwipedLeft={this.swipeCard}
                    onSwipedRight={this.swipeBack}
                    stackSize={4}
                    backgroundColor={'transparent'}
                    stackSeparation={stackSepration}
                    disableTopSwipe={true}
                    disableBottomSwipe={true}
                    disableRightSwipe={false}
                    disableLeftSwipe={true}
                    swipeAnimationDuration={100}

                />
                }else{
                    swiperStack =  <Swiper
                    ref={swiper => {
                        this.swiper = swiper
                    }}
                    //onSwiped={this.onSwiped}
                    cards={renderArray}
                    cardIndex={this.state.cardIndex}
                    cardVerticalMargin={80}
                    renderCard={this.renderCard}
                    onSwipedLeft={this.swipeCard}
                    onSwipedRight={this.swipeBack}
                    stackSize={4}
                    backgroundColor={'transparent'}
                    stackSeparation={stackSepration}
                    disableTopSwipe={true}
                    disableBottomSwipe={true}
                    disableRightSwipe={true}
                    disableLeftSwipe={false}
                    swipeAnimationDuration={100}
                    />
                }


            }
            return(
                <ImageBackground style={{width:"100%",height:"100%"}} blurRadius={15} source={this.state.imageNameBackground}>
            
                    
                        <ImageBackground style={{width:"100%",height:"100%", backgroundColor:'rgba(219,219,219,0.5)'}} >
                        {!isView?
                            <TouchableOpacity style={[styles.buttonBack]}  onPress={() => this.props.navigation.navigate('Home')}>
                                <Image  style={styles.imageLeft} source={require('./Icon_Home.png')} />
                            </TouchableOpacity> :<TouchableOpacity activeOpacity={0} style={[styles.buttonBack]}/>
                        }
    
                        <Text style={{textAlign: 'center', color:'white', marginTop: '10%', position:'absolute',fontSize: 15,left:"42%"}}>sightwords</Text>
    
                        <View style={{width:"100%",height:"100%",justifyContent:'center',alignItems:'center'}}>

    
                            {swiperStack}

    
                        </View>

                        <TouchableOpacity style={{alignSelf:'center',height:20,width:20, position:'absolute',bottom:'15%'}} onPress={() => PlaySound('cardslidesound')}>
                                <Image source={require('./audio_off.png')}  style={styles.imageSpeaker}/>
                            </TouchableOpacity>

                        <TextInput editable={false} style={{textAlign: 'center',bottom:'2%',position:'absolute',alignSelf:'center'}} value={temp}/>
    
                            
    
                    </ImageBackground>
                       
                
                </ImageBackground>
    
            );
    
    }
}
const {height, width} = Dimensions.get('window'); 
const deviceHeight = height;
let deviceWidth  = width;

let stackSepration;
if (deviceHeight > 736 ) {
    stackSepration = -25;
} else {
    stackSepration = -15;
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: 'transparent',
    },

    content:{
       //DR bottom:100,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
       /// backgroundColor: 'transparent',
       backgroundColor: 'green',
    },
    flipCardSize: {
        width: '100%',
        height: '100%',
        
      },
    card:{
        overflow:'hidden',
        marginTop:'10%',
        width: deviceWidth-20,
        height: (deviceHeight*3)/4,
        borderRadius: 12,
        backgroundColor:"#ffffff",
        shadowColor: 'rgba(0,0,0,0.5)',
        shadowOffset: {
            width: 0,
            height: 1
        },
        shadowOpacity:0.5,
    },
    card1:{
        
        alignSelf:'center',
        top:"-15%",
        width: (deviceWidth-82),
        height: (deviceHeight*2.4)/4,
        borderRadius: 12,
        backgroundColor:"#ffffff",
       // backgroundColor:"pink",

        shadowColor: 'rgba(0,0,0,0.8)',
        shadowOffset: {
            width: 0,
            height: 1
        },
        shadowOpacity:0.8,
    },
    // card1:{
    //     alignItems:'center',
    //     justifyContent:"center",
    //     alignSelf:'center',
    //     top:"-5%",
    //     width: (deviceWidth-82),
    //     height: (deviceHeight*2.4)/4,
    //     borderRadius: 12,
    //     //backgroundColor:"#ffffff",
    //     backgroundColor:"pink",

    //     shadowColor: 'rgba(0,0,0,0.8)',
    //     shadowOffset: {
    //         width: 0,
    //         height: 1
    //     },
    //     shadowOpacity:0.8,
    // },
    label: {
        fontFamily:"Jua-Regular",
       //top:'2%',
        lineHeight: 200,
        width:'100%',
        //alignSelf:'center',
         textAlign: 'center',
        fontSize: 70,
        color: '#4a90e2',
       backgroundColor: 'transparent',
       // backgroundColor: 'white',
    },

    // label: {
    //     fontFamily:"Jua-Regular",
    //     marginTop:'10%',
    //     lineHeight: 200,
    //     width:160,
    //     bottom: '20%',
    //     textAlign: 'center',
    //     fontSize: 70,
    //     color: '#4a90e2',
    //    // backgroundColor: 'transparent',
    //     backgroundColor: 'white',
    // },
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

        buttonBack: {
      alignSelf: 'flex-start',
      zIndex:80,
      marginTop: '15%',
      marginBottom: '10%',
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
            width: 30,
            height: 30,
        },
        imageBulb:{
            width: 32,
            height: 32,
        },
        imageQuestionMark:{
            width: 48,
            height: 48,
            bottom: '2%',
            alignSelf: 'center'
        },
        imageSpeaker:{
            width: 30,
            height: 30,
            
            alignSelf: 'center'
        },
        imageCross:{
            width: 32,
            height: 32,
        },
        label1: {
            height:"auto",
            fontSize:25,
            textAlign:'center',
            width:'100%',
            fontFamily:"Jua-Regular",
            color: '#000000',
            backgroundColor: 'transparent',
           
        },
});

 {/*<CardStack
                            cardList={this.state.allCards}
                            renderCard={this.renderCard.bind(this)}
                            cardHeight={flattenStyle(styles.card).height}
                            cardWidth={flattenStyle(styles.card).width}
                            cardRotation={20}
                            cardOpacity={1.0}
                            onSwipeRight={this.handleAddToCard}
                            onSwipeLeft={this.handleRemove}
                            leftSwipeThreshold={-150}
                            rightSwipeThreshold={150}
                            // onSwipeUp={this.handleAddToCard}
                            // onSwipeDown={this.handleRemove}
                            // upSwipeThreshold={-150}
                            // downSwipeThreshold={150}
                            alignItems='center'
                        />*/}
