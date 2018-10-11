


import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    ImageBackground,
    TextInput,
    Platform,
    StatusBar,
    TouchableWithoutFeedback,
    Animated


} from 'react-native';

import RNSiriWaveView from 'react-native-siri-wave-view';
import * as Animatable from 'react-native-animatable';



import { Dimensions } from 'react-native';
import Swiper from 'react-native-deck-swiper'
import CardFlip from 'react-native-card-flip';

import SoundPlayer from 'react-native-sound-player'

let result = [];
let count = 0;
let renderCount = 0;
let renderArray = [];
let DURATION = 10000;


export default class CardDeckNew extends Component {


    static navigationOptions =
        {
            title: 'CardDeckNew',
            gesturesEnabled: false,
        };

    constructor(props) {
        super(props);

        this.result = [],

            this.state = {
                flip: false,
                isSwipingBack: false,
                imageNameBackground: require('./Dog_background.png'),
                currentCardNumber: 0,
                cardCount: 1,
                audio: 'a_sound',
                sentenceAudio:'a_sentence',
                alpha: "a",
                question1: 'I saw',
                question2: "dog.",
                cardIndex: 0,
                allCards: [],
                displayedCards: [],
                arrayRemovedCards: [],
                numberValue: 0,
                isBack:false,
                isAudio:false,
                isView: false,
                fadeAnim: new Animated.Value(0),
                errors: [],
                xPosition: 0,
                arrayImages: [
                    {
                        index: 1,
                        word: 'a',
                        sentence1: 'I saw',
                        sentence2: 'dog.',
                        backgndImage: require('./Dog_background.png'),
                        frontImage: require('./Dog_background.png'),
                        audio: 'a_sound',
                        sentenceAudio:'a_sentence',
                    },
                    {
                        index: 2,
                        word: 'ran',
                        sentence1: 'The zebra',
                        sentence2: 'away.',
                        backgndImage: require('./Zebra_background.png'),
                        frontImage: require('./Zebra_background.png'),
                        sentenceAudio:'ran_sentence',
                        audio: 'ran'
                    },
                    {
                        index: 3,
                        word: 'come',
                        sentence1: 'Please',
                        sentence2: 'and see the rainbow.',
                        backgndImage: require('./Rainbow_background.png'),
                        frontImage: require('./Rainbow_background.png'),
                        sentenceAudio:'come_sentence',
                        audio: 'come'
                    },
                    {
                        index: 4,
                        word: 'up',
                        sentence1: 'The tiger woke',
                        sentence2: '.',
                        backgndImage: require('./up_color.png'),
                        frontImage: require('./up_color.png'),
                        sentenceAudio:'up_sentence',
                        audio: 'up'
                    },
                    {
                        index: 5,
                        word: 'see',
                        sentence1: 'I can',
                        sentence2: 'the boat.',
                        backgndImage: require('./Boat_background.png'),
                        frontImage: require('./Boat_background.png'),
                        sentenceAudio:'see_sentence',
                        audio: 'see'
                    },
                    {
                        index: 6,
                        word: 'was',
                        sentence1: 'The tiger',
                        sentence2: 'sleeping.',
                        backgndImage: require('./Tiger_sleeping_background.png'),
                        frontImage: require('./Tiger_sleeping_background.png'),
                        sentenceAudio:'was_sentence',
                        audio: 'was'
                    },

                    {
                        index: 7,
                        word: 'the',
                        sentence1: 'I can catch',
                        sentence2: 'ball.',
                        backgndImage: require('./Beachball_background.png'),
                        frontImage: require('./Beachball_background.png'),
                        sentenceAudio:'the_sentence',
                        audio: 'the'
                    },
                    {
                        index: 8,
                        word: 'jump',
                        sentence1: 'The leopard can',
                        sentence2: 'very high.',
                        backgndImage: require('./Leopard_background.png'),
                        frontImage: require('./Leopard_background.png'),
                        sentenceAudio:'jump_sentence',
                        audio: 'jump'
                    },
                    {
                        index: 9,
                        word: 'on',
                        sentence1: 'I sat',
                        sentence2: 'the bike.',
                        backgndImage: require('./Bicycle_background.png'),
                        frontImage: require('./Bicycle_background.png'),
                        sentenceAudio:'on_sentence',
                        audio: 'on'
                    },
                    {
                        index: 10,
                        word: 'ten',
                        sentence1: 'I saw',
                        sentence2: 'kangaroos.',
                        backgndImage: require('./Kangaroos_background.png'),
                        frontImage: require('./Kangaroos_background.png'),
                        sentenceAudio:'ten_sentence',
                        audio: 'ten'
                    },

                    {
                        index: 11,
                        word: 'go',
                        sentence1: 'Lets',
                        sentence2: 'fishing.',
                        backgndImage: require('./Fishing_background.png'),
                        frontImage: require('./Fishing_background.png'),
                        sentenceAudio:'go_sentence',
                        audio: 'go'
                    },
                    {
                        index: 12,
                        word: 'two',
                        sentence1: 'There were',
                        sentence2: 'tigers at the zoo.',
                        backgndImage: require('./Tigercubs_background.png'),
                        frontImage: require('./Tigercubs_background.png'),
                        sentenceAudio:'two_sentence',
                        audio: 'two'
                    },


                ]
            }


            this.handlePressIn = this.handlePressIn.bind(this);
            this.handlePressOut = this.handlePressOut.bind(this);
            this.handlePressAudioOut = this.handlePressAudioOut.bind(this);
            this.handlePressAudioIn = this.handlePressAudioIn.bind(this);

    }

    componentWillMount() {
        StatusBar.setHidden(true);
        this.animatedValue = new Animated.Value(1);
        this.animatedAudioValue = new Animated.Value(1);
        this.animatedCardValue = new Animated.Value(1);

        this.pullUsers();
    }

    bounceInRight = () => this.view.bounceInRight(1500).then(endState => console.log(endState.finished ? 'bounce finished' : 'bounce cancelled'));

    bounceIn = () => this.refs.home.bounceIn(400).then(endState => console.log(endState.finished ? this.props.navigation.navigate('Home') : 'bounce cancelled'));

    fadeInUp = () => this.view.fadeInUp(300).then(endState => console.log(endState.finished ? 'bounce finished' : 'bounce cancelled'));

    pulse = () => this.view.pulse(300).then(endState => console.log(endState.finished ? 'bounce finished' : 'bounce cancelled'));

    handleViewRef = ref => this.view = ref;

    handleViewNumberRef = ref => this.view = ref;

    handlePressIn(){
        this.setState({
            isBack : true
        })
        Animated.spring(this.animatedValue,{
            toValue: 1.5
        }).start();
    }

    handlePressOut(){
        this.setState({
            isBack : false
        })
        Animated.spring(this.animatedValue,{
            toValue: 1,
            friction: 3,
            tension : 40
        }).start();
    }

    handlePressAudioIn(){
        this.setState({
            isAudio : true
        })
        Animated.spring(this.animatedAudioValue,{
            toValue: 1.5
        }).start();
    }

    handlePressAudioOut(){
        this.setState({
            isAudio : false
        })
        Animated.spring(this.animatedAudioValue,{
            toValue: 1,
            friction: 3,
            tension : 40
        }).start();
    }

    async pullUsers() {
        try {
            let resultKeyed = [];
            for (var i = 0; i < this.state.arrayImages.length; i++) {
                resultKeyed.push(this.state.arrayImages[i]);
            }

            this.setState({
                allCards: resultKeyed.reverse(),
            });
        } catch (err) {
            alert(JSON.stringify(err));
        }
    }

    showViewPopup(card, index) {

        this['card' + index].flip();

        this.setState({
            isView: !this.state.isView,
            cardIndex: index,
            imageNameBackground: card.backgndImage,
            cardCount: card.index,
            question: card.sentence
        });

    }
    closePopup(card, index) {
        this['card' + index].flip();

        this.setState({ isView: !this.state.isView })
    }

    swipeBack = (index) => {

        // Reset opacity
       
        this.playCardSound();

        if (!this.state.isSwipingBack) {

            this.swiper.swipeBack(() => {

                this.setIsSwipingBack(index, false)
            })

        }

    };

    setIsSwipingBack = (index, isSwipingBack) => {
       
        this.setState(
            {
                currentCardNumber: this.state.currentCardNumber - 1,
                cardIndex: index - 1,
                isSwipingBack: isSwipingBack,
                imageNameBackground: renderArray[index - 1].backgndImage,
                cardCount: renderArray[index - 1].index,
                question1: renderArray[index - 1].sentence1,
                question2: renderArray[index - 1].sentence2,
                alpha: renderArray[index - 1].word,
                audio: renderArray[index - 1].audio,
            }

        )


    };

    setCardback() {

        if (this.state.currentCardNumber > 0) {
            this.setState({
                currentCardNumber: this.state.currentCardNumber - 1,
                cardIndex: this.state.currentCardNumber - 1,
                imageNameBackground: renderArray[this.state.currentCardNumber - 1].backgndImage,
                cardCount: renderArray[this.state.currentCardNumber - 1].index,
                question1: renderArray[this.state.currentCardNumber - 1].sentence1,
                question2: renderArray[this.state.currentCardNumber - 1].sentence2,
                alpha: renderArray[this.state.currentCardNumber - 1].word,
                audio: renderArray[this.state.currentCardNumber - 1].audio,
                sentenceAudio: renderArray[this.state.currentCardNumber - 1].sentenceAudio,
            })
        }

        this.fadeInUp();

    }


    setIsSwiping = (index, isSwipingBack) => {

        console.log(" setIsSwiping Index: ", index)

        this.setState(
            {
                isSwipingBack: isSwipingBack,
                currentCardNumber: index + 1,
                cardIndex: index + 1,
                imageNameBackground: renderArray[index + 1].backgndImage,
                cardCount: renderArray[index + 1].index,
                question1: renderArray[index + 1].sentence1,
                question2: renderArray[index + 1].sentence2,
                alpha: renderArray[index + 1].word,
                audio: renderArray[index + 1].audio,
                sentenceAudio: renderArray[index + 1].sentenceAudio,
            }
        )

        this.fadeInUp();
    };

    swipeCard = (index) => {
         
        

        console.log(' Swipe card ',index);
        // Animated.spring(this.animatedCardValue,{
        //     toValue: 1,
        // }).start();

        this.playCardSound();
        if (!this.state.isSwipingBack) {

            this.swiper.swipeCard(() => {
               this.setIsSwiping(index, false)
            })

        }
    };

    playCardSound() {
        try {
            // play the file tone.mp3
            SoundPlayer.playSoundFile('cardslidesound_reduce', 'mp3')
            // or play from url
        } catch (e) {

        }
    }

    playWordSound() {
        this.setState({
            isAudio:true
        })
        try {

            SoundPlayer.playSoundFile((this.state.isView?this.state.sentenceAudio:this.state.audio), 'mp3')

            // or play from url
        } catch (e) {

        }
    }
    componentDidMount() {

        SoundPlayer.onFinishedPlaying((success) => { // success is true when the sound is played
            this.setState({
                isAudio:false
            })
        })
    }
    // unsubscribe when unmount
    componentWillUnmount() {
        SoundPlayer.unmount()
    }

    renderCard = (card, index) => {
  ////*****/ For opacity 
  let opacityOfCards,marginLeft;

  if (index === this.state.currentCardNumber) {
      opacityOfCards = 1;
      marginLeft= deviceWidth-(82);

  } else if (index === this.state.currentCardNumber+1) {
      opacityOfCards = 1;
      marginLeft = deviceWidth-(82+10);

  }else if(index === this.state.currentCardNumber+2){
      opacityOfCards = 0.6;
      marginLeft= deviceWidth-(82+20);

  }else if(index === this.state.currentCardNumber+3){
      opacityOfCards = 0.5;
      marginLeft= deviceWidth-(82+30);

  }else if(index === this.state.currentCardNumber+4) {
      opacityOfCards = 0.4;
      marginLeft= deviceWidth-(82+40);

  }


  console.log( 'Opacity of card ----->',opacityOfCards);
   // Reset opacity


        ///**** */
        const animatedCardStyle = {
            transform : [{scale: this.animatedCardValue}]
        };

        let { fadeAnim } = this.state;
        let { xPositionTemp } = this.state.xPosition  

        let sentenceStr = this.state.question1 + " "+" "+this.state.question2;
       let viewMargin;


      if(sentenceStr.length<15){
                viewMargin = '10%';
         }else
        if ( sentenceStr.length>18) {
            viewMargin = '19%'; 
        } else{
            viewMargin = '22%'; 
        }
        // For 4 th card remove full stop space//
        let textTemp
                    if (index === 3) {
                        textTemp = <Text
                                        style={[ styles.textSentence,
                                        {adjustsFontSizeToFit: true},
                                        {allowFontScaling: true},
                                        ]}>{this.state.question1 + " "}<Text style={{ color: '#4a90e2' }}>{this.state.alpha + ""}</Text>{this.state.question2}</Text>
                    } else {
                        textTemp = <Text
                                        style={[ styles.textSentence,
                                            {adjustsFontSizeToFit: true},
                                            {allowFontScaling: true},
                                            ]}>{this.state.question1 + " "}<Text style={{ color: '#4a90e2' }}>{this.state.alpha + " "}</Text>{this.state.question2}</Text>
                    }
                    
        return (
            <CardFlip duration={370} style={{ flex: 1, justifycounContent: 'center', alignItems: 'center' }} key={index} ref={(card) => this['card' + index] = card}>


                <View  style={[styles.card1,{opacity:opacityOfCards,width:marginLeft}]}>



                        <Text style={[styles.label,{ shadowColor: 'rgba(0,0,0,1)',
                            shadowOffset: {
                                width: 1,
                                height: 1 
                            },
                            shadowOpacity: 0.8,

                            shadowRadius: 1 }]}>{card.word}</Text>
                    <TouchableOpacity style={[{ flexDirection: 'column', position: 'absolute', bottom: '10%', alignSelf: 'center', justifyContent: 'space-between', }]} onPress={() => { this['card' + index].flip();
                        this.setState({ isView: true }) }} >
                        <Image source={require('./question.png')} style={styles.imageQuestionMark} />
                    </TouchableOpacity>

                </View>


                <View style={{ width: "100%", height: "100%", alignItems: 'center', top: '-31%' }}>

                    <View style={styles.card}>
                        <ImageBackground style={{ height: '80%', width: '100%', borderTopLeftRadius: 15, borderTopRightRadius: 15, overflow: "hidden", top: '-1%' }}
                            source={this.state.imageNameBackground}>

                            <TouchableOpacity style={[styles.button, { marginTop: 20 }]} onPress={() => { this['card' + index].flip(); this.setState({ isView: false }) }}>

                                <Image style={styles.imageCross} source={require('./close.png')} />
                            </TouchableOpacity>

                        </ImageBackground>

                        <View style={{height: '40%' , marginLeft: viewMargin, marginRight: viewMargin, justifyContent: 'center' , alignItems: 'center', bottom: '17%'}}>
                            {textTemp}
                        </View>
                    </View>
                </View>
            </CardFlip>
        )
    };

    render() {
        

        const animatedStyle = {
            transform : [{scale: this.animatedValue}]
        };
        const animatedAudioStyle = {
            transform : [{scale: this.animatedAudioValue}]
        };
        
        const isView = this.state.isView;
        const isAudio =this.state.isAudio;
        // For showing number 

        let temp;
        if (this.state.cardCount >= 0) {
            temp = ' | 220';
        } else {
            temp = ' | 220';
        }

        if (renderCount === 0) {
            renderArray = this.state.arrayImages;
            renderCount++;
        }

        console.log("CurrentcardNumber Yeh wala: ", this.state.currentCardNumber);

        let swiperStack;

        if (!isView) {

                    // this is for last card
                    if (this.state.currentCardNumber === 11) {

                        swiperStack = <Swiper
                            ref={swiper => {
                                this.swiper = swiper
                            }}
                            //onSwiped={this.onSwiped}
                            cards={renderArray}
                            cardIndex={this.state.cardIndex}
                            cardVerticalMargin={80}
                            renderCard={this.renderCard}
                            onSwipedLeft={this.swipeCard}
                            onSwipedRight={this.swipeCard}
                            stackSize={5}
                            backgroundColor={'transparent'}
                            stackSeparation={stackSepration}
                            disableTopSwipe={true}
                            disableBottomSwipe={true}
                            disableRightSwipe={true}
                            disableLeftSwipe={true}

                            // For preventing hang condition
                            swipeAnimationDuration={100}
                            stackAnimationFriction={2}
                            stackAnimationTension={20}
                            verticalThreshold={-400}
                            horizontalThreshold={-400}


                        />
                    } else{
                        swiperStack = <Swiper
                        ref={swiper => {
                            this.swiper = swiper
                        }}
                        //onSwiped={this.onSwiped}
                        cards={renderArray}
                        cardIndex={this.state.cardIndex}
                        cardVerticalMargin={80}
                        renderCard={this.renderCard}
                        onSwipedLeft={this.swipeCard}
                        onSwipedRight={this.swipeCard}
                        stackSize={5}

                        backgroundColor={'transparent'}
                        stackSeparation={stackSepration}
                        disableTopSwipe={true}
                        disableBottomSwipe={true}
                        disableRightSwipe={false}
                        disableLeftSwipe={false}
                        swipeAnimationDuration={100}


                    />
                    }
        } else {
            // For showing sentence view and disable all directions swipe.

            swiperStack = <Swiper
                ref={swiper => {
                    this.swiper = swiper
                }}
                //onSwiped={this.onSwiped}
                cards={renderArray}
                cardIndex={this.state.cardIndex}
                cardVerticalMargin={80}
                renderCard={this.renderCard}

                onSwipedLeft={this.swipeCard}
                onSwipedRight={this.swipeCard}

                stackSize={5}

                backgroundColor={'transparent'}
                stackSeparation={stackSepration}
                disableTopSwipe={true}
                disableBottomSwipe={true}

                disableRightSwipe={true}
                disableLeftSwipe={true}
                swipeAnimationDuration={130}

            />
        }

        let audioImage ;
        let speakerIcon;
        let siriWave;

        let audioView;

        if (isAudio) {
           audioView = <Animatable.View animation="flash" easing="ease-out" iterationCount={"infinite"} delay={2}>
                                <Image style={[{
                    width: 102,
                    height: 102,
                    alignSelf: 'center', justifyContent: 'center', alignItems: 'center',bottom:'-34.5%'
                }]} source={require('./audio_circle.png')}>
                </Image>
              </Animatable.View>
        } else {
            audioImage =
                <Image style={[{
                    width: 102,
                    height: 102,
                    alignSelf: 'center', justifyContent: 'center', alignItems: 'center',bottom:'-16.5%'
                }]} source={require('./audio_circle.png')}>
                </Image>
        }
        
        speakerIcon =  <Image source={require('./speaker.png')}   style={styles.imageSpeaker} />
        siriWave = <ImageBackground style={[{
            width: 70,
            height: 70,
            alignSelf: 'center', justifyContent: 'center', alignItems: 'center',bottom:'36%'
        }]}> 
        <RNSiriWaveView colors={["#0000FF", "#800080", "#ffffff"]}   secondaryWaveLineWidth= {15} primaryWaveLineWidth={10} type={1} width={75} height={105}  backgroundColor={'transparent'} density={5}  startAnimation={true} stopAnimation={this.state.stopAnimation} />
        </ImageBackground>


        return (
            <ImageBackground style={{ width: "100%", height: "100%" }} blurRadius={15} source={this.state.imageNameBackground}>

                <ImageBackground style={{ width: "100%", height: "100%", backgroundColor: 'rgba(219,219,219,0.5)' }}>

                    {!isView ?
                        <TouchableWithoutFeedback  onPress={() => {this.bounceIn()}}>
                            <Animatable.View ref={"home"} style={[styles.buttonBack]}>
                                    <Image style={styles.imageLeft} source={require('./Icon_Home.png')} />
                            </Animatable.View>
                        </TouchableWithoutFeedback>
                        :
                        <TouchableOpacity style={[styles.buttonBack]} onPress={() => {this.props.navigation.navigate('Home')}}>

                        </TouchableOpacity>}

                    <Text style={{ textAlign: 'center', color: 'white', marginTop: '5%', position: 'absolute', fontSize: 15, alignSelf: "center", fontFamily: "Montserrat-Regular"}}>sightwords</Text>


                    {!isView ?

                        <Animatable.View ref={this.handleViewNumberRef} style={{ marginTop: '5%', position: 'absolute', alignSelf: 'flex-end', right: '15%' }}>
                            <Text style={{ textAlign: 'center', fontSize: 15, color: '#ffffff', fontFamily: "Montserrat-Regular"}}>{String(this.state.cardCount)}</Text>
                        </Animatable.View>
                        :
                        <Text style={{ textAlign: 'center', marginTop: '5%', position: 'absolute', alignSelf: 'flex-end', fontSize: 15, color: '#ffffff', marginRight: '10%' }}></Text>}


                    {!isView ?


                        <Text style={{ textAlign: 'center',fontSize: 15, color: '#ffffff',fontFamily: "Montserrat-Regular" ,marginTop: '5%', position: 'absolute',
                            alignSelf: 'flex-end', marginRight: '10%' }}>{temp}</Text>

                        :
                        <Text style={{ textAlign: 'center', marginTop: '5%', position: 'absolute', alignSelf: 'flex-end', fontSize: 15, color: '#ffffff', marginRight: '10%' }}></Text>}


                    <View style={{ width: "100%", height: "100%", justifyContent: 'center', alignItems: 'center' }}>

                        {swiperStack}

                    </View>

                    {!isView?<ImageBackground style={{
                        left: '10%',
                        width: 70,
                        height: 70, position: 'absolute', bottom: '5%',
                        justifyContent: 'center', alignItems: 'center', shadowColor: 'rgba(0,0,0,1)',
                        shadowOffset: {
                            width: 0,
                            height: 1
                        },
                        shadowOpacity: 0.5,
                        shadowRadius: 1
                    }} source={require('./circleGray.png')} ref={"back"}>
                        <TouchableWithoutFeedback onPress={() => this.setCardback()}
                                                  onPressIn={this.handlePressIn}
                                                  onPressOut={this.handlePressOut}>

                            <Animated.View style={[{alignSelf: 'center', justifyContent: 'center', alignItems: 'center'},animatedStyle]}>
                                {!this.state.isBack?<ImageBackground  style={{
                                    width: 50,
                                    height: 50,
                                    alignSelf: 'center', justifyContent: 'center', alignItems: 'center'
                                }} source={require('./circleBtnOutside.png')} >

                                    <Image source={require('./back_button.png')}  style={styles.imageBackButton} />
                                </ImageBackground>:<ImageBackground  style={{
                                    width: 50,
                                    height: 50,
                                    alignSelf: 'center', justifyContent: 'center', alignItems: 'center'
                                }} source={require('./undo_red.png')}>
                                    <Image   style={styles.imageBackButton} />
                                </ImageBackground>}
                            </Animated.View>
                        </TouchableWithoutFeedback>
                    </ImageBackground>:null}

                        <ImageBackground style={{
                            width: 100,
                            height: 100,
                            position: 'absolute', bottom: '3%',
                            alignSelf:'center',
                             justifyContent: 'center', alignItems: 'center'
                        }} source={require('./circleGray.png')}  ref={"audio1"}>

                            <TouchableWithoutFeedback onPress={() => this.playWordSound()}>
                                <View style={[{alignSelf: 'center', justifyContent: 'center', alignItems: 'center'}]}>
                              
                              {isAudio?audioView:audioImage}  

                            

                                {isAudio?siriWave:speakerIcon}

                                </View>
                            </TouchableWithoutFeedback>
                        </ImageBackground>


                    

                </ImageBackground>

            </ImageBackground>

        );

    }
}

const { height, width } = Dimensions.get('window');
const deviceHeight = height;
let deviceWidth = width;

let stackSepration;
if (deviceHeight > 736) {
    stackSepration = -25;
} else {
    stackSepration = -20;
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent',
    },
textSentence:{
    height: 'auto',
    fontSize: 36,
    textAlign: 'center',
    width: '100%',
    fontFamily: "Comic Sans MS",
    color: '#535557',
    backgroundColor: 'transparent'
},
    content: {
        //DR bottom:100,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
         backgroundColor: 'transparent',
        //backgroundColor: 'green',
    },
    flipCardSize: {
        width: '100%',
        height: '100%',

    },

    card: {
        // overflow:'hidden',
        marginTop: '10%',
        width: deviceWidth - 20,
        height: (deviceHeight * 3) / 4,
        borderRadius: 12,
        backgroundColor: "#ffffff",
        shadowColor: 'rgba(0,0,0,1)',
        shadowOffset: {
            width: 2,
            height: 2
        },
        shadowOpacity: 0.8,
    },

    card1: {

        alignSelf: 'center',
        top: "-10%",
        width: (deviceWidth - 82),
        height: (deviceHeight * 2.4) / 4,
        borderRadius: 10,
        backgroundColor: "#ffffff",
        shadowColor: 'rgba(0,0,0,1)',
        shadowOffset: {
            width: 0,
            height: 1
        },
        shadowOpacity: 0.8,
    },

    label: {
        fontFamily: "Comic Sans MS",
        //top:'2%',
        lineHeight: 200,
        width: '100%',
        //alignSelf:'center',
        textAlign: 'center',
        fontSize: 88,
        color: '#4a90e2',
        backgroundColor: 'transparent',
        // backgroundColor: 'white',
    },

    footer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonContainer: {
        width: 220,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    button: {
        alignSelf: 'flex-end',
        marginTop: '10%',
        right: '5%',
        position: 'relative', // add if dont work with above
        justifyContent: 'center',
        alignItems: 'center',
    },

    buttonBack: {
        alignSelf: 'flex-start',
        zIndex: 80,
        marginTop: '7%',
        marginBottom: '10%',
        left: '5%',
        position: 'relative', // add if dont work with above
        justifyContent: 'center',
        alignItems: 'center',
        
    },

    imageLeft: {
        width: 22,
        height: 22,
    },
    imageBulb: {
        width: 32,
        height: 32,
    },
    imageQuestionMark: {
        width: 48,
        height: 48,
        bottom: '2%',
        alignSelf: 'center'
    },
    imageSpeaker: {
        width: 40,
        height: 40,
        alignSelf: 'center',
        bottom: '42%',
        right:'2%'
    },
    imageBackButton: {

        alignItems: 'center',
        width: 22,
        height: 19,

        alignSelf: 'center',
        tintColor: 'rgb(211,215,218)',
    },
    imageTickButton: {

        width: 20,
        height: 16,

        alignSelf: 'center',
        tintColor: 'rgb(211,215,218)',
    },
    imageCross: {
        width: 32,
        height: 32,
    },
    label1: {
        height: "auto",
        fontSize: 36,
        textAlign: 'center',
        width: '100%',
        fontFamily: "Comic Sans MS",
        color: '#535557',
        backgroundColor: 'transparent',
      //  adjustsFontSizeToFit: true,
    },
    rectangleLeft: {
        marginLeft: '24%',
        height: 40,
        width: 10,
        position: 'absolute',
        bottom: '10%',
        shadowColor: 'rgba(0,0,0,1)',
        shadowOffset: {
            width: 2,
            height: 2
        },
        shadowOpacity: 0.8,

        shadowRadius: 5

    }


});

