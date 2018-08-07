import React, { Component } from 'react';
import {View, Text, StyleSheet, TextInput,TouchableOpacity,Image} from 'react-native';
import styled from "styled-components/native"; // Version can be specified in package.json
import Carousel from 'react-native-snap-carousel'; // Version can be specified in package.json



 export default class CardDeck extends React.Component {
  static navigationOptions =
  {
     title: 'CardDeck',
     headerMode: 'none',
  };
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
        <View style={{flex:1}}>
              

          <CurrentVideoTO
              style={styles.content}
             onPress={ () => { 
                console.log("clicked to index", index)
                this._carousel.snapToNext(index);
              }}
          >
            <CurrentVideoImage source={require('./whitecard.png')} resizeMode={'cover'} />
            {
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
            }
           
          </CurrentVideoTO>

            {/*<NextVideoImage source={{ uri: this.state.currentVideo.nextVideoId }}/>*/}
            
        </View>
    );
  }

  render = () => {
  
    console.log("videos: updating")

    return (
      <View backgroundColor={'pink'}>
      
      <TouchableOpacity style={stylesButton.button}  onPress={() => this.props.navigation.navigate('Home')}>
         <Image  style={stylesButton.imageLeft} source={require('./arrowRight.png')} />
        </TouchableOpacity>

        <CarouselBackgroundView style={styles.content}>
      
           <Carousel
          ref={ (c) => { this._carousel = c; } }
          data={this.state.videos}
          renderItem={this._renderItem.bind(this)}
           onPress={() => { this._carousel.snapToNext(); }}
          sliderWidth={360}
          itemWidth={290} //256
           layout={'tinder'}
            layoutCardOffset={16} //For showing card deck height.
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
  width: 290; 
  height: 500;
`;

const CurrentVideoTO = styled.TouchableOpacity`
;
`
const CarouselBackgroundView = styled.View`
transform: rotate(180deg);
flex-direction: column;
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
        backgroundColor: '#FE474C',
        borderRadius: 5,
        shadowColor: 'rgba(0,0,0,0.5)',
        shadowOffset: {
            width: 0,
            height: 1
        },
        shadowOpacity:0.5,
    },
    card1: {
        backgroundColor: '#FE474C',
    },
    card2: {
        backgroundColor: '#FEB12C',
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

  textCardTitle: {
    top: 20,
    color: 'gray',
    fontWeight: '500',
    fontSize: 20,
    height: 20,
    position:'absolute',
    alignSelf: 'flex-start',
    marginLeft:2,
  },
  textCardDetail: {
    
    color: 'black',
    fontWeight: '900',
    fontSize: 40,
    height: 60,
   alignItems:'center'

  },
  viewProp: 
  { transform: [{ rotate: '180deg'}],
    
    flex:1,
    alignItems: 'center', 
    justifyContent: 'center',
    
     },
});
const stylesButton = StyleSheet.create({
 
  button: {
    marginTop: 10,
    position: 'relative',
  },
  
  imageLeft:{
    width: 50,
    height: 50,
  },
});

