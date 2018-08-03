import React, { Component } from 'react';
import {View, Text, StyleSheet, TextInput,TouchableOpacity,Image} from 'react-native';
import styled from "styled-components/native"; // Version can be specified in package.json
import Carousel from 'react-native-snap-carousel'; // Version can be specified in package.json
import HeaderCustom from './src/supportFiles/codeFiles/headerCustom';
import HeaderLeft from './src/supportFiles/codeFiles/headerLeft';

import { createStackNavigator } from 'react-navigation';
import { Dimensions } from 'react-native';


import CardDeck from './src/supportFiles/codeFiles/cardDeck';

class ThumbnailCarousel extends Component {

  static navigationOptions =
 {
    title: 'Home',
 };
 
 FunctionToOpenSecondActivity = () =>
 {
    this.props.navigation.navigate('CardDeck');
    
 }
  constructor(props){
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

  init(){
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

  handleSnapToItem(index){
    console.log("snapped to ", index)
    this.setState({numberValue:String(index+1)});
  }

  _renderItem = ( {item, index} ) => {
    let imageTitle;
    let imageBottom;

    if(index === 1){
      imageTitle = <Image source={require('./camera.png')} style={stylesImage.imageTop} />
      imageBottom = <Image source={require('./arrownext.png')} style={stylesImage.imageBottomArrow} />

    }else
      if (index===2) {
      imageTitle = <Image source={require('./verbs.png')} style={stylesImage.imageVerb} />
      imageBottom = <Image source={require('./lockSmall.png')} style={stylesImage.imageBottomLock} />

       } else {
      imageTitle = <Image source={require('./smiley.png')} style={stylesImage.imageTop} />
      imageBottom = <Image source={require('./lockSmall.png')} style={stylesImage.imageBottomLock} />

    }


      return (
        <ThumbnailBackgroundView_iPhone6>
             <CurrentVideoTO onPress={ () => { 
                console.log("clicked to index", index)
                this._carousel.snapToItem(index);
                this.setState({numberValue:String(index+1)});
              }}>
            <CurrentVideoImage_iPhone6 source={item.thumbnail} resizeMode={'cover'}>
            <View style={styleText.viewProp}>
            
              {imageTitle}
              <TextInput style={styleText.textCardTitle}>{item.title}</TextInput>
              <TextInput  multiline = {true} 
                editable={false}
                numberOfLines = {3}
               style={styleText.textCardDetail}>{item.detail}</TextInput>
               <TouchableOpacity style={stylesButton.buttonBottom} onPress ={() => this.props.navigation.navigate('Details')}>
               {imageBottom}
             </TouchableOpacity>
            </View>
           </CurrentVideoImage_iPhone6>
          </CurrentVideoTO>

            {/*<NextVideoImage source={{ uri: this.state.currentVideo.nextVideoId }}/>*/}
            
        </ThumbnailBackgroundView_iPhone6>
    );

  }

  render = () => {
  
    console.log("videos: updating")
if (deviceHeight==667) {
  return (
    <View>
        <TextInput style={styleText.textTopNumber} value={String(this.state.numberValue)} /> 

       {console.log(" ************* value is"+this.state.numberValue+"")}
        <CarouselBackgroundView>
         <Carousel
        ref={ (c) => { this._carousel = c; } }
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
} else {
  return (
    <View>
      <HeaderCustom />
      <TextInput style={styleText.textTopNumber} value="01"/>
        <CarouselBackgroundView>
         <Carousel
        ref={ (c) => { this._carousel = c; } }
        data={this.state.videos}
        renderItem={this._renderItem.bind(this)}
        onSnapToItem={this.handleSnapToItem.bind(this)}
        sliderWidth={390}
        itemWidth={325} //256
        layout={'default'}
        firstItem={0}
      />
    </CarouselBackgroundView>
    </View>
    
  );
}
   
  }
}
const RootStack = createStackNavigator(
  {
    Home: ThumbnailCarousel,
    Details: CardDeck,
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
const CurrentVideoImage = styled.ImageBackground`

   width: 350; 
   height: 500;

`;

const ThumbnailBackgroundView = styled.View`
  width: 350; 
  height: 500;

`;
const CurrentVideoTO = styled.TouchableOpacity`;
`
const CarouselBackgroundView = styled.View`

justify-content: center;
align-item: center;
flex-direction: row;
  height: 100%;
  width: 100%;
  
`;



const styleText = StyleSheet.create({
  textTopNumber: {
    top: -10,
    color: 'gray',
    fontWeight: '500',
    fontSize: 20,
    height: 30,
    marginLeft:12,
    position: 'relative',
    
  },
  textCardTitle: {
    
    color: 'white',
    fontWeight: '500',
    fontSize: 23,
    height: 30,
    
  },
  textCardDetail: {
    padding:15,
    color: 'white',
    fontWeight: '300',
    fontSize: 20,
    height: 75,
    
  //  alignItems:'center'

  },
  viewProp: { 
    flex: 1,
    
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'column',
    
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
    top:5,
    width: 35,
    height: 35,
  },
  imageVerb:{
    top:5,
    width: 70,
    height: 39,
  },
  imageBottomLock:{
    width: 30,
    height:39,
  },
  imageBottomArrow:{
    width: 40,
    height:40,
  }

});