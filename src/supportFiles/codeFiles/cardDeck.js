
import React, { Component } from 'react';
import {View, Text, StyleSheet, TextInput,TouchableOpacity} from 'react-native';
import styled from "styled-components/native"; // Version can be specified in package.json
import Carousel from 'react-native-snap-carousel'; // Version can be specified in package.json



export default class CardDeck extends Component {

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
          thumbnail: `require('./src/supportFiles/codeFiles/whitecard.png')`,
          title: "a",
          slideNumber: "1"
          
        }, {
          id: "sNPnbI1arSE",
          thumbnail: `require('./whitecard.png')`,
          title: "the",
          slideNumber: "2"
        }, {
          id: "VOgFZfRVaww",
          thumbnail: `require('./whitecard.png')`,
          title: "come",
          slideNumber: "3"

        }, 
        {
            id: "VOgFZfRVawp",
            thumbnail: `require('./whitecard.png')`,
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
            thumbnail: `require('./whitecard.png')`,
            title: "go",
            slideNumber: "6"
  
          },
      ],
      
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
            <CurrentVideoImage source={require('./whitecard.png')} resizeMode={'cover'} />
            <View style={styleText.viewProp}>
            <TextInput  
                editable={false}
                numberOfLines = {1}
               style={styleText.textCardTitle}>{item.slideNumber}</TextInput>
            <TextInput  multiline = {true}
                editable={false}
                numberOfLines = {1}
               style={styleText.textCardDetail}>{item.title}</TextInput>
               
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
       
        <CarouselBackgroundView>
         
           <Carousel
          ref={ (c) => { this._carousel = c; } }
          data={this.state.videos}
          renderItem={this._renderItem.bind(this)}
           onPress={() => { this._carousel.snapToNext(); }}
          sliderWidth={360}
          itemWidth={290} //256
           layout={'tinder'}
           layoutCardOffset={16}
                />
      </CarouselBackgroundView>
     
      </View>
      
    );
  }
}

//const { width, height } = Dimensions.get('window'); // cs

const VideoTitleText = styled.Text`
 color: black;
 
  justify-content: center;
`
const CurrentVideoImage = styled.Image`
  
  width: 290;
  height: 500; 
  border-radius: 20;

`;

const ThumbnailBackgroundView = styled.View`
top: 75;
   borderColor: blue;
  align-items: center;
  width: 290; 
  height: 500;
  

`;

const CurrentVideoTO = styled.TouchableOpacity`;
`
const CarouselBackgroundView = styled.View`
 backgroundColor: pink
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
    top: 5,
    color: 'gray',
    fontWeight: '500',
    fontSize: 20,
    height: 20,
  },
  textCardDetail: {
    
    color: 'black',
    fontWeight: '900',
    fontSize: 40,
    height: 60,
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