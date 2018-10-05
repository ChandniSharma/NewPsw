
import React, { Component } from 'react';
import {
    View, Text, StyleSheet, TextInput, TouchableOpacity, Image, Platform, ImageBackground,StatusBar,TouchableWithoutFeedback
} from 'react-native';
import * as Animatable from 'react-native-animatable';

import styled from "styled-components/native"; // Version can be specified in package.json
import Carousel from 'react-native-snap-carousel'; // Version can be specified in package.json
import HeaderCustom from './src/supportFiles/codeFiles/headerCustom';


import { createStackNavigator } from 'react-navigation';
import { Dimensions } from 'react-native';

import CardDeckNew from './src/supportFiles/codeFiles/CardDeckNew';
import {
    Animated,
    Easing
} from 'react-native';


console.disableYellowBox = true;

const transitionConfig = () => {
    return {
        transitionSpec: {
            duration: 850,
            easing: Easing.inOut(Easing.poly(4)),
            timing: Animated.timing,
            useNativeDriver: true,
        },
        screenInterpolator: sceneProps => {
            const { position, layout, scene, index, scenes } = sceneProps
      
            const thisSceneIndex = scene.index
            const height = layout.initHeight
            const width = layout.initWidth
      

            // We can access our navigation params on the scene's 'route' property
            var thisSceneParams = scene.route.params || {}
      
            console.log('thisSceneIndex ', thisSceneIndex, 'Params', thisSceneParams);


            const translateX = position.interpolate({
              inputRange: [thisSceneIndex - 1, thisSceneIndex, thisSceneIndex + 1],
              outputRange: [width, 0, 0]
            })
      
            const translateY = position.interpolate({
              inputRange: [thisSceneIndex - 1, thisSceneIndex, thisSceneIndex + 1],
              outputRange: [height, 0, 0]
            })
      
            const opacity = position.interpolate({
              inputRange: [thisSceneIndex - 1, thisSceneIndex - 0.5, thisSceneIndex],
              outputRange: [0, 1, 1],
            })
      
            const scale = position.interpolate({
              inputRange: [thisSceneIndex - 1, thisSceneIndex, thisSceneIndex + 1],
              outputRange: [1, 1, 4]
            })
      
            const slideFromRight = { transform: [{ translateX }] }
            const scaleWithOpacity = { opacity, transform: [{ scaleX: scale }, { scaleY: scale }] }
            const slideInFromBottom = { transform: [{ translateY }] }
      
            // if (thisSceneParams.plain) return slideFromRight
            // else if (index < 5) return slideInFromBottom
            // else return scaleWithOpacity

            return scaleWithOpacity
          },
    }}

class ThumbnailCarousel extends Component {

    
    static navigationOptions =
        {
            title: 'Home',
        };

    FunctionToOpenSecondActivity = () => {
        this.props.navigation.navigate('CardDeckNew');
    }

    constructor(props) {
        super();
        this.state = {
            numberValue: "1"
        }
        this.state = {
            errors: []
        }
        this.props = props;
        this._carousel = {};
     
        this.textAnimated;
         this.textCombineValue;
        this.init();
    }

    componentWillMount(){
        StatusBar.setHidden(true);
    }

    init() {
        this.state = {
            videos: [
                {
                    id: "WpIAc9by5iU",
                    thumbnail: require('./greenview.png'),
                    detail: "Create your own group of words.",
                    icon: require('./smiley.png'),
                    title: "my words",
                    iconToMoveNextView: require('./lockSmall.png')
                },
                {
                    id: "WpIAc9by5iU",
                    thumbnail: require('./blue.png'),
                    detail: "These are the most common words found in children's books",
                    icon: require('./camera.png'),
                    title: "sight words",
                    iconToMoveNextView: require('./arrownext.png')

                },
                {
                    id: "WpIAc9by5iU",
                    thumbnail: require('./orange.png'),
                    detail: "These words are used to describe an action",
                    icon: require('./verbs.png'),
                    title: "verbs",
                    iconToMoveNextView: require('./lockSmall.png')

                },
                {
                    id: "VOgFZfRVaww",
                    thumbnail: require('./yellow.png'),
                    detail: "Create your own group of words.",
                    icon: require('./smiley.png'),
                    title: "nouns",
                    iconToMoveNextView: require('./lockSmall.png')
                },
                {
                    id: "sNPnbI1arSE",
                    thumbnail: require('./purple.png'),
                    detail: "Create your own group of words.",
                    icon: require('./smiley.png'),
                    title: "phonics",
                    iconToMoveNextView: require('./lockSmall.png')
                },
            ],

        };

        

    }


    fadeInUp = () => this.view.fadeInUp(300).then(endState => console.log(endState.finished ? 'bounce finished' : 'bounce cancelled'));

     


    handleViewRef = ref => this.view = ref;

    handleSnapToItem(index) {
       this.setState({numberValue: String(index + 1)});
    //    let temp;
    //    if (this.state.numberValue >= 0) {
    //        temp = "0" + String(this.state.numberValue)
    //    } else {
    //        temp = "01"
    //    }
      
      // this.textAnimated = <Animatable.Text animation="fadeInUp" style={styleText.textTopNumber}> {this.textCombineValue} </Animatable.Text>

        this.fadeInUp()
        this.setState({numberValue: String(index + 1)});
        // }
    }
    
    goForward = () => {
        const { navigation } = this.props
        const screenNumber = navigation.state.params ? navigation.state.params.screenNumber : 0
        const params = { screenNumber: screenNumber + 1 }

        console.log('screenNumber ', screenNumber, 'Params', params);

        if (Math.random() > .75) params.plain = true // Include a 'plain' param 25% of the time 
        navigation.navigate('Details', params)
        //this.props.navigation.navigate('Details')
      }

    moveToNextView(index){
        
        if (index===1) {
           this.goForward();
           // this.props.navigation.navigate('Details')
        } else {
            console.log('we will move user to lock features');
        }
// By navigation animation



    }
    _renderItem = ({item, index}) => {
        let imageTitle;
        let imageBottom;
        let titleText;

        if (index === 1) {
            imageTitle = <Image source={require('./camera.png')} style={stylesImage.imageCamera}/>
            imageBottom = <Image source={require('./arrownext.png')} style={stylesImage.imageBottomArrow}/>
            titleText =  <TextInput marginTop={'5%'} editable={false} style={[styleText.textSightWordTitle,{textAlign:'center'}]}>{item.title}</TextInput>


        } else if (index === 2) {
            imageTitle = <Image source={require('./verbs.png')} style={stylesImage.imageVerb}/>
            imageBottom = <Image source={require('./lockSmall.png')} style={stylesImage.imageBottomLock}/>
            titleText =  <TextInput marginTop={'5%'} editable={false} style={[styleText.textCardTitle,{textAlign:'center'}]}>{item.title}</TextInput>

        } else {
            imageTitle = <Image source={require('./smiley.png')} style={stylesImage.imageTop}/>
            imageBottom = <Image source={require('./lockSmall.png')} style={stylesImage.imageBottomLock}/>
            titleText =  <TextInput marginTop={'5%'} editable={false} style={[styleText.textCardTitle,{textAlign:'center'}]}>{item.title}</TextInput>

        }

        return (

            <View style={styles.card}>
                <CurrentVideoTO  activeOpacity={1} onPress={() => {
                    
                    this._carousel.snapToItem(index);

                    this.setState({numberValue: String(index + 1)});

                }}>
                    <ImageBackground style={[styles.card]} source={item.thumbnail} resizeMode={'cover'}>
                        <View >

                            <View style={styles.container}>{imageTitle}</View>
                            {titleText}
                            {/* <TextInput marginTop={'5%'} editable={false} style={[styleText.textCardTitle,{textAlign:'center'}]}>{item.title}</TextInput> */}
                            <TextInput multiline={true}
                                       editable={false}
                                       numberOfLines={3}
                                       marginTop={'25%'}
                                       marginBottom={'25%'}
                                       style={[styleText.textCardDetail,{textAlign:'center'}]}
                                       marginLeft={'15%'}
                                       marginRight={'15%'}
                            >{item.detail}
                            </TextInput>
                            <TouchableOpacity
                                              style={styles.container}
                                              onPress={() => this.moveToNextView(index)}>
                                {imageBottom}
                            </TouchableOpacity>
                        </View>
                    </ImageBackground>

                </CurrentVideoTO>

                {/*<NextVideoImage source={{ uri: this.state.currentVideo.nextVideoId }}/>*/}

            </View>
        );

    }
    handleTextRef = ref => this.text = ref;

    render = () => {

          
        if (this.state.numberValue >= 0) {
            temp = String(this.state.numberValue)
        } else {
            temp = "1"
        }
        return (
            <View style={{flex: 1}}>

                <HeaderCustom />

                <View style={styleText.textTopNumber}>
                    <TextInput editable={false} style={{
                        color: 'gray',
                        fontWeight: '400',
                        fontSize: 35,
                        
                          }} value={"0"}/>
                    <Animatable.View ref={this.handleViewRef}>
                        <TextInput editable={false} style={{
                            color: 'gray',
                            fontWeight: '400',
                            fontSize: 35,
                            left:'-15%',
                            }} value={temp}/>
                    </Animatable.View>
                </View>
            
                <CarouselBackgroundView style={styles.content}>


                    <Carousel
                        ref={(c) => {
                            this._carousel = c;
                        }}
                        data={this.state.videos}
                        renderItem={this._renderItem.bind(this)}
                        onSnapToItem={this.handleSnapToItem.bind(this)}
                        sliderWidth={deviceWidth}
                        autoplay={false}
                        itemWidth={itemWidth} //256
                        layout={'default'}
                        firstItem={0}
                    />
                </CarouselBackgroundView>
            </View>

        );
    }
}

const RootStack = createStackNavigator(
  {
    Home: ThumbnailCarousel,
    Details: CardDeckNew,
  },
  {
    initialRouteName: 'Home',
    headerMode: 'none',
    transitionConfig,
  },
  
);
// For navigation
export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}


const {height, width} = Dimensions.get('window'); 
const deviceHeight = height;
let deviceWidth  = width;

let itemWidth;
console.log("device width : ",deviceWidth)
if (deviceHeight > 736 && Platform.OS === 'ios' ) {
    itemWidth = deviceWidth-120;
} else {
    itemWidth = deviceWidth-80;
}


// ios greater than 6 5.5 inch
const CurrentVideoImage = styled.ImageBackground`
        width: 310;
        height: auto;
        borderRadius: 30;
        shadowColor: 'rgba(0,0,0,0.5)';
        shadowOffset: {
            width: 0,
            height: 1
        };
        shadowOpacity:0.5;
`;



const CurrentVideoTO = styled.TouchableOpacity`;
`
const CarouselBackgroundView = styled.View`
justify-content: center;
flex-direction: row;
  height: 100%;
  width: 100%;
  
`;

const styles = StyleSheet.create({
    container: {
        bottom:10,
        alignSelf: 'center'
       // left:"43%",
    },
    content:{
        flex: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    card:{
        width: itemWidth,
        height: (deviceHeight*3)/4,
        borderRadius: 10,
        shadowColor: 'rgba(0,0,0,0.5)',
        shadowOffset: {
            width: 0,
            height: 1
        },
        shadowOpacity:0.5,
    },
   

    label: {
        lineHeight: 400,
        textAlign: 'center',
        fontSize: 55,
        fontFamily: 'System',
        color: '#ffffff',
        backgroundColor: 'transparent',
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
        shadowColor: 'rgba(0,0,0,0.3)',
        shadowOffset: {
            width: 0,
            height: 1
        },
        shadowOpacity:0.5,
        backgroundColor:'#fff',
        alignItems:'center',
        justifyContent:'center',
        zIndex: 0,
    },
    orange:{
        width:55,
        height:55,
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
    }
});

const styleText = StyleSheet.create({
  textTopNumber: {
      top: Platform.OS === 'ios' ? '9%' : '7%',
      left:'11.5%',
      flexDirection: "row",
      position: 'absolute',

     //backgroundColor: 'pink',
   justifyContent:'flex-start'

  },
  textSightWordTitle: {

    color: 'white',
    fontWeight: '500',
    fontSize: 23,
    height: Platform.OS === 'ios' ? 30 : 50,

  
  },
  
  textCardTitle: {

    color: 'white',
    fontWeight: '500',
    fontSize: 23,
    height: Platform.OS === 'ios' ? 30 : 50,
   
    
  },
  textCardDetail: {
    fontFamily:"Comic Sans MS",
    color: 'white',
    fontWeight: '300',
    fontSize: 20,
   // backgroundColor: 'green',
    height: 92,
  //  alignItems:'center'

  },
  viewProp: {
      flex: 5,
      alignItems: 'center',
      justifyContent: 'center',
    
     },
});
const stylesButton = StyleSheet.create({
 
  buttonBottom: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 45,
    height: 45,
   
  },
  
});
const stylesImage = StyleSheet.create({
  imageTop:{
    marginTop: '15%',
    width: 40,
    height: 40,
  },
  imageCamera:{
    marginTop: '15%',
    width: 44,
    height: 39,
  },
  imageVerb:{
      
    marginTop: '15%',
    width: 70,
    height: 39,
   
  },
  imageBottomLock:{
    marginTop: Platform.OS === 'ios' ? '9%' : '0.5%',
    width: 30,
    height:39,
  },
  imageBottomArrow:{
    marginTop: Platform.OS === 'ios' ? '9%' : '0.5%',
    width: 50,
    height:50,
  }

});
