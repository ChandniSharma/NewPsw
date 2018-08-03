import React, { Component } from 'react';
import {View, Text, StyleSheet, TextInput,TouchableOpacity,Image,Platform} from 'react-native';
import styled from "styled-components/native"; // Version can be specified in package.json
import Carousel from 'react-native-snap-carousel'; // Version can be specified in package.json
import HeaderCustom from './src/supportFiles/codeFiles/headerCustom';
import HeaderLeft from './src/supportFiles/codeFiles/headerLeft';

import { createStackNavigator } from 'react-navigation';
import { Dimensions } from 'react-native';



import CardDeckNew from './src/supportFiles/codeFiles/CardDeckNew';

class ThumbnailCarousel extends Component {

    static navigationOptions =
        {
            title: 'Home',
        };

    FunctionToOpenSecondActivity = () => {
        this.props.navigation.navigate('CardDeck');

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
        console.log("snapped to ", index)
        // if (index>= 0 && index<= 5) {

        this.setState({numberValue: String(index + 1)});
        // }
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

            <View style={{flex:1}}>
                <View  style={{marginTop:20}}activeOpacity={1} onPress={() => {
                    console.log("clicked to index", index)
                    this._carousel.snapToItem(index);

                    this.setState({numberValue: String(index + 1)});

                }}>
                    <CurrentVideoImage source={item.thumbnail} resizeMode={'cover'}>
                        <View style={styleText.viewProp}>

                            {imageTitle}
                            <TextInput marginTop={'5%'} style={styleText.textCardTitle}>{item.title}</TextInput>
                            <TextInput multiline={true}
                                       editable={false}
                                       numberOfLines={3}
                                       marginTop={'25%'}
                                       marginBottom={'25%'}
                                       style={styleText.textCardDetail}
                                       marginLeft={'15%'}
                                       marginRight={'15%'}
                            >{item.detail}</TextInput>
                            <TouchableOpacity marginTop={'35%'}
                                              onPress={() => this.props.navigation.navigate('Details')}>
                                {imageBottom}
                            </TouchableOpacity>
                        </View>
                    </CurrentVideoImage>
                </View>

                {/*<NextVideoImage source={{ uri: this.state.currentVideo.nextVideoId }}/>*/}

            </View>
        );

    }


    render = () => {

        console.log("videos: updating")


        let temp;
        if (this.state.numberValue >= 0) {
            temp = "0" + String(this.state.numberValue)
        } else {
            temp = "01"
        }
        return (

            <View style={{flex: 1}}>


                <TextInput style={styleText.textTopNumber} value={temp}/>

                {console.log(" ************* value is" + this.state.numberValue + "")}
                <CarouselBackgroundView>
                    <Carousel
                        ref={(c) => {
                            this._carousel = c;
                        }}
                        data={this.state.videos}
                        renderItem={this._renderItem.bind(this)}
                        onSnapToItem={this.handleSnapToItem.bind(this)}
                        sliderWidth={390}
                        itemWidth={290} //256
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

console.log("aspect ratio is"+deviceHeight+"Value");

const VideoTitleText = styled.Text`
 color: white;
  justify-content: center;
`

const CurrentVideoImage_iPhone6 = styled.ImageBackground`
  
width: 290; 
   height: 500;
`;

const ThumbnailBackgroundView_iPhone6 = styled.View` 
  width: 290; 
  height: 500;
  
`;
// ios greater than 6 5.5 inch
const CurrentVideoImage = styled.ImageBackground`

        width: 320;
        height: 470;
        borderRadius: 5;
        shadowColor: 'rgba(0,0,0,0.5)';
        shadowOffset: {
            width: 0,
            height: 1
        };
        shadowOpacity:0.5;
`;

const ThumbnailBackgroundView = styled.View`
  width: 350; 
  
  height: 550;
  border-radius: 20;
`;

// For android
const CurrentVideoImage_Android = styled.ImageBackground`

   width: 300; 
   height: 550;
   border-radius: 20;
`;

const ThumbnailBackgroundView_Android = styled.View`
  width: 300; 
  
  height: 550;
  border-radius: 20;
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
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#f2f2f2',
    },
    content:{
        flex: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    card:{
        width: 320,
        height: 470,
        borderRadius: 5,
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
    alignSelf: 'flex-start',
    color: 'gray',
    fontWeight: '500',
    fontSize: 27,
    
    marginLeft:'5%',
    marginBottom: '0.5%',
    position: 'relative',
   
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
    height: Platform.OS === 'ios' ? 75 : 90,
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
    marginTop: '9%',
    width: 30,
    height:39,
  },
  imageBottomArrow:{
    marginTop: '9%',
    width: 50,
    height:50,
  }

});