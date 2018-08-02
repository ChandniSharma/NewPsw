import React, { Component } from 'react';
import {View, Text, StyleSheet, TextInput,TouchableOpacity,Image} from 'react-native';
import styled from "styled-components/native"; // Version can be specified in package.json
import Carousel from 'react-native-snap-carousel'; // Version can be specified in package.json
import HeaderCustom from './src/supportFiles/codeFiles/headerCustom';
import { createStackNavigator } from 'react-navigation';
import { Dimensions } from 'react-native';



import CardDeckNew from './src/supportFiles/codeFiles/CardDeckNew';

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
          iconToMoveNextView: require('./lock.png')
        },
        {
          id: "WpIAc9by5iU",
          thumbnail: require('./blue.png'),
          detail: "Create your own group of words.",
          icon: require('./camera.png'),
          title: "sight words",
          iconToMoveNextView: require('./arrownext.png')
          
        }, 
        {
          id: "WpIAc9by5iU",
          thumbnail: require('./orange.png'),
          detail: "Create your own group of words.",
          icon: require('./verbs.png'),
          title: "verbs",
          iconToMoveNextView: require('./lock.png')
          
        },
        {
          id: "VOgFZfRVaww",
          thumbnail: require('./yellow.png'),
          detail: "These words are used to describe an action."
          ,
          icon: require('./smiley.png'),
          title: "nouns",
          iconToMoveNextView: require('./lock.png')
        },
        {
          id: "sNPnbI1arSE",
          thumbnail: require('./purple.png'),
          detail: "These are the most common words found in the children's books."
          ,
          icon: require('./smiley.png'),
          title: "phonics",
          iconToMoveNextView: require('./lock.png')
        }, 
      ],
      numbers:[
        {countTitle: "01"},
        {countTitle: "02"},
        {countTitle: "03"},
        {countTitle: "04"},
        {countTitle: "05"}
        
      ]
    };

    console.log("ThumbnailCarousel Props: ", this.props)
  }

  handleSnapToItem(index){
    console.log("snapped to ", index)
    this.setState({numberValue:String(index+1)});
  }

  _renderItem = ( {item, index} ) => {
    console.log("rendering,", index)
    if (deviceHeight===667) {
      return (
      
        <ThumbnailBackgroundView_iPhone6>
             <CurrentVideoTO
             onPress={ () => { 
                console.log("clicked to index", index)
                this._carousel.snapToItem(index);
                this.setState({numberValue:String(index+1)});
              }}
          >
            <CurrentVideoImage_iPhone6 source={item.thumbnail} resizeMode={'cover'} />
            <View style={styleText.viewProp}>
             <Image source={item.icon} width={20} height = {20} />
             <TextInput style={styleText.textCardTitle}>{item.title}</TextInput>
            <TextInput  multiline = {true} 
                editable={false}
                numberOfLines = {3}
               style={styleText.textCardDetail}>{item.detail}</TextInput>
               <TouchableOpacity style={stylesButton.button} onPress ={() => this.props.navigation.navigate('Details')}>
                
                <Image  style={stylesButton.image} source={item.iconToMoveNextView} />
             </TouchableOpacity>
            </View>
           
          </CurrentVideoTO>

            {/*<NextVideoImage source={{ uri: this.state.currentVideo.nextVideoId }}/>*/}
            
        </ThumbnailBackgroundView_iPhone6>
    );
    } else {
      return (
      
        <ThumbnailBackgroundView>
             <CurrentVideoTO
             onPress={ () => { 
                console.log("clicked to index", index)
                this._carousel.snapToItem(index);
                this.setState({numberValue:String(index+1)});
              }}
          >
            <CurrentVideoImage source={item.thumbnail} resizeMode={'cover'} />
            <View style={styleText.viewProp}>
            <TextInput  multiline = {true} 
                editable={false}
                numberOfLines = {3}
               style={styleText.textCardDetail}>{item.title}</TextInput>
               <TouchableOpacity style={stylesButton.button} onPress ={() => this.props.navigation.navigate('Details')}>
                
                <Image  style={stylesButton.image} source={require('./arrownext.png')} />
             </TouchableOpacity>
            </View>
           
          </CurrentVideoTO>

            {/*<NextVideoImage source={{ uri: this.state.currentVideo.nextVideoId }}/>*/}
            
        </ThumbnailBackgroundView>
    );
    }
    
  }

  render = () => {
  
    console.log("videos: updating")
if (deviceHeight===667) {
  return (
    <View>
      <HeaderCustom />
      
     

       {/* // <TextInput style={styleText.textTopNumber} value={String(this.state.numberValue)} /> */}

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
    Details: CardDeckNew,
  },
  {
    initialRouteName: 'Home',
  }
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

const CurrentVideoImage_iPhone6 = styled.Image`
   width: 290; 
   height: 500;

`;

const ThumbnailBackgroundView_iPhone6 = styled.View` 
  width: 290; 
  height: 500;
  
`;
const CurrentVideoImage = styled.Image`

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
    height: 20,
    marginLeft:12,
    position: 'relative',
  },
  textCardTitle: {
    
    color: 'white',
    fontWeight: '500',
    fontSize: 20,
    height: 20,
  },
  textCardDetail: {
    padding:15,
    color: 'white',
    fontWeight: '300',
    fontSize: 20,
    height: 150,
  //  alignItems:'center'

  },
  viewProp: 
  { 
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
     },
});
const stylesButton = StyleSheet.create({
 
  button: {
    
    padding: 10,
    marginBottom: 20,
    shadowColor: '#303838',
    shadowOffset: { width: 0, height: 5 },
    // shadowRadius: 10,
    shadowOpacity: 0.35,
  },
  image:{
    width: 50,
    height: 50,
  },
});