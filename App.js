import React, { Component } from 'react';
import {View, Text, StyleSheet, TextInput,TouchableOpacity,Image,Platform} from 'react-native';
import styled from "styled-components/native"; // Version can be specified in package.json
import Carousel from 'react-native-snap-carousel'; // Version can be specified in package.json
import HeaderCustom from './src/supportFiles/codeFiles/headerCustom';
import HeaderLeft from './src/supportFiles/codeFiles/headerLeft';

import { createStackNavigator } from 'react-navigation';
import { Dimensions } from 'react-native';



import CardDeckNew from './src/supportFiles/codeFiles/CardDeckNew';
//import CardDeck from "./src/supportFiles/codeFiles/cardDeck";
// For not showing warning in the bottom
console.disableYellowBox = true;

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
            numberValue: "01"
        }
        this.state = {
            errors: []
        }
        this.props = props;
        this._carousel = {};
        this.init();
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

    handleSnapToItem(index) {
        
        // if (index>= 0 && index<= 5) {

        this.setState({numberValue: String(index + 1)});
        // }
    }

    moveToNextView(index){
        
        this.props.navigation.navigate('Details')
        if (index===1) {
            this.props.navigation.navigate('Details')
        } else {
            
        }
    }
    _renderItem = ({item, index}) => {
        let imageTitle;
        let imageBottom;

        if (index === 1) {
            imageTitle = <Image source={require('./camera.png')} style={stylesImage.imageCamera}/>
            imageBottom = <Image source={require('./arrownext.png')} style={stylesImage.imageBottomArrow}/>

        } else if (index === 2) {
            imageTitle = <Image source={require('./verbs.png')} style={stylesImage.imageVerb}/>
            imageBottom = <Image source={require('./lockSmall.png')} style={stylesImage.imageBottomLock}/>

        } else {
            imageTitle = <Image source={require('./smiley.png')} style={stylesImage.imageTop}/>
            imageBottom = <Image source={require('./lockSmall.png')} style={stylesImage.imageBottomLock}/>

        }

        return (

            <View style={styles.card}>
                <CurrentVideoTO  activeOpacity={1} onPress={() => {
                    
                    this._carousel.snapToItem(index);

                    this.setState({numberValue: String(index + 1)});

                }}>


                    <CurrentVideoImage source={item.thumbnail} resizeMode={'cover'}>
                        <View >

                            <View style={styles.container}>{imageTitle}</View>
                            <TextInput marginTop={'5%'} editable={false} style={[styleText.textCardTitle,{textAlign:'center'}]}>{item.title}</TextInput>
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
                    </CurrentVideoImage>



                </CurrentVideoTO>

                {/*<NextVideoImage source={{ uri: this.state.currentVideo.nextVideoId }}/>*/}

            </View>
        );

    }


    render = () => {

          let temp;
        if (this.state.numberValue >= 0) {
            temp = "0" + String(this.state.numberValue)
        } else {
            temp = "01"
        }
        return (
            <View style={{flex: 1}}>

           <HeaderCustom />
            
                <CarouselBackgroundView style={styles.content}>
                <TextInput editable={false} style={styleText.textTopNumber} value={temp}/>
                    <Carousel
                        ref={(c) => {
                            this._carousel = c;
                        }}
                        data={this.state.videos}
                        renderItem={this._renderItem.bind(this)}
                        onSnapToItem={this.handleSnapToItem.bind(this)}
                        sliderWidth={deviceWidth}
                        itemWidth={310} //256
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
        left:140,
    },
    content:{
        flex: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    card:{
        width: 320,
        height: 470,
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
    }
});

const styleText = StyleSheet.create({
  textTopNumber: {
    top: Platform.OS === 'ios' ? '4%' : '-10%',
    left: '11.5%',
    color: 'gray',
    fontWeight: '500',
    fontSize: 35,
position: 'absolute',
   
   
  },
  textCardTitle: {

    color: 'white',
    fontWeight: '500',
    fontSize: 23,
    height: Platform.OS === 'ios' ? 30 : 50,
   // backgroundColor: 'yellow'
    
  },
  textCardDetail: {
    
    color: 'white',
    fontWeight: '300',
    fontSize: 20,
   // backgroundColor: 'green',
    height: Platform.OS === 'ios' ? 85 : 90,
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