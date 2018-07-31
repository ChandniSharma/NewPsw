import React, { Component } from 'react';
import {View, Text, StyleSheet, TextInput,TouchableOpacity} from 'react-native';
import styled from "styled-components/native"; // Version can be specified in package.json
import Carousel from 'react-native-snap-carousel'; // Version can be specified in package.json
//import HeaderCustom from './src/supportFiles/codeFiles/headerCustom';
import {StackNavigator} from 'react-navigation';
//import CardDeck from './src/supportFiles/codeFiles/cardDeck';

 class ThumbnailCarousel extends React.Component {

  static navigationOptions =
 {
    title: 'ThumbnailCarousel',
 };
 
 FunctionToOpenSecondActivity = () =>
 {
    this.props.navigation.navigate('Second');
    
 }
  constructor(props){
    super();
    this.state = {
      numberValue: '01'
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
          thumbnail: "file:///Users/chandnisharma/Downloads/AWT/NewPsw/src/supportFiles/img/second.png",
          title: "Create your own group of words."
          
          
        }, {
          id: "sNPnbI1arSE",
          thumbnail: "file:///Users/chandnisharma/Downloads/AWT/NewPsw/src/supportFiles/img/second.png",
          title: "These are the most common words found in the children's books."

        }, {
          id: "VOgFZfRVaww",
          thumbnail: "file:///Users/chandnisharma/Downloads/AWT/NewPsw/src/supportFiles/img/third.png",
          title: "These words are used to describe an action."

        }
      ],
      numbers:[
        {countTitle: "01"},
        {ccountTitleount: "02"},
        {countTitle: "03"}
        
      ]
    };

    console.log("ThumbnailCarousel Props: ", this.props)
  }

  handleSnapToItem(index){
    console.log("snapped to ", index)
  }

  _renderItem = ( {item, index} ) => {
    console.log("rendering,", index, item)
    return (
        <ThumbnailBackgroundView>
              

          <CurrentVideoTO
             onPress={ () => { 
                console.log("clicked to index", index)
                this._carousel.snapToItem(index);
              }}
          >
            <CurrentVideoImage source={item.thumbnail} resizeMode={'cover'} />
            <View style={styleText.viewProp}>
            <TextInput  multiline = {true}
                editable={false}
                numberOfLines = {3}
               style={styleText.textCardDetail}>{item.title}</TextInput>
               <TouchableOpacity style={stylesButton.button} onPress = { this.FunctionToOpenSecondActivity }>
                <Text> Move to next View </Text>
        
        </TouchableOpacity>
            </View>
           
          </CurrentVideoTO>

            {/*<NextVideoImage source={{ uri: this.state.currentVideo.nextVideoId }}/>*/}
            
        </ThumbnailBackgroundView>
    );
  }

  render = () => {
  
    console.log("videos: updating")

    return (
      <View>
        <HeaderCustom />
        <TextInput value="01"/>
          <CarouselBackgroundView>
           <Carousel
          ref={ (c) => { this._carousel = c; } }
          data={this.state.videos}
          renderItem={this._renderItem.bind(this)}
          onSnapToItem={this.handleSnapToItem.bind(this)}
          sliderWidth={360}
          itemWidth={290} //256
          layout={'default'}
          firstItem={0}
        />
      </CarouselBackgroundView>
      </View>
      
    );
  }
}

//const { width, height } = Dimensions.get('window'); // cs

const VideoTitleText = styled.Text`
 color: white;
 
  justify-content: center;
`
const CurrentVideoImage = styled.Image`
  
  width: 290;
  height: 500; 
  border-radius: 20;

`;

const ThumbnailBackgroundView = styled.View`
 
  justify-content: center;
  align-items: center;
  width: 290; 
  height: 500;
  

`;

const CurrentVideoTO = styled.TouchableOpacity`;
`
const CarouselBackgroundView = styled.View`

  height: 100%;
  width: 100%;
`;

const styleText = StyleSheet.create({
  textTopNumber: {
    top: -10,
    color: 'gray',
    fontWeight: '500',
    fontSize: 20,
    height: 20,
  },
  textCardTitle: {
    top: -10,
    color: 'white',
    fontWeight: '500',
    fontSize: 20,
    height: 20,
  },
  textCardDetail: {
    
    color: 'white',
    fontWeight: '300',
    fontSize: 20,
    height: 70,
   alignItems:'center'

  },
  viewProp: 
  { position: 'absolute',
  aspectRatio: 1,
   top: 0, 
   left: 10, 
   right: 10,
    height: 400, 
    alignItems: 'center', 
    justifyContent: 'center',
     },
});
const stylesButton = StyleSheet.create({
 
  button: {
    borderColor: "gray",
    borderRadius: 20,
    padding: 10,
    // marginBottom: 20,
    shadowColor: '#303838',
    shadowOffset: { width: 0, height: 5 },
    // shadowRadius: 10,
    shadowOpacity: 0.35,
  },
  
});