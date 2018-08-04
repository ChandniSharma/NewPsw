
import React, { Component } from 'react';
import {
    View, Text, StyleSheet, TextInput, TouchableOpacity, Image, Platform, Dimensions,
    ImageBackground
} from 'react-native';
import styled from "styled-components/native"; // Version can be specified in package.json
import Carousel from 'react-native-snap-carousel';
import {createStackNavigator} from "react-navigation"; // Version can be specified in package.json



export default class CardDeck extends React.Component {

    static navigationOptions =
        {
            title: 'CardDeck',
        };



    constructor(props) {
        super();
        this.state = {
            numberValue: "01"
        }
        this.state = {
            errors: []
        }

        this.state = {
            isView: false,
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
                    thumbnail: require('../../img/whitecard.png'),
                    title: "a",
                    slideNumber: "1"

                }, {
                    id: "sNPnbI1arSE",
                    thumbnail: require('../../img/whitecard.png'),
                    title: "the",
                    slideNumber: "2"
                }, {
                    id: "VOgFZfRVaww",
                    thumbnail: require('../../img/whitecard.png'),
                    title: "come",
                    slideNumber: "3"

                },
                {
                    id: "VOgFZfRVawp",
                    thumbnail: require('../../img/whitecard.png'),
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
                    thumbnail: require('../../img/whitecard.png'),
                    title: "go",
                    slideNumber: "6"

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


        return (

            <View style={styles.card}>
                <View  activeOpacity={1} onPress={() => {
                    console.log("clicked to index", index)
                    this._carousel.snapToItem(index);
                }}>
                    <CurrentVideoImage source={item.thumbnail} resizeMode={'cover'}>
                        <View>
                        <TouchableOpacity 
                              style={[styles.container,{marginTop:20}]}
                                              onPress={() => this.setState({isView:!this.state.isView})}>
                                <Image source={require('../../../arrownext.png')} style={stylesButton.imageCamera}/>
                            </TouchableOpacity>

                               <Text 
                                style={styles.label}>{item.title}</Text>
                           
                        </View>
                    </CurrentVideoImage>
                </View>

                {/*<NextVideoImage source={{ uri: this.state.currentVideo.nextVideoId }}/>*/}

            </View>
        );

    }


    render = () => {

        console.log("videos: updating")


        const isView = this.state.isView;

        return(

            <View style={styles.container1} >
            <View style={{flex: 1}}>
            <TouchableOpacity style={[stylesButton.buttonBack]}  onPress={() => this.props.navigation.navigate('Home')}>
                    <Image  style={stylesButton.imageLeft} source={require('./arrowRight.png')} />
                </TouchableOpacity>

                {console.log(" ************* value is" + this.state.numberValue + "")}
                <CarouselBackgroundView style={styles.content}>
                
                    <Carousel
                        ref={(c) => {
                            this._carousel = c;
                        }}
                        data={this.state.videos}
                        renderItem={this._renderItem.bind(this)}
                        onSnapToItem={this.handleSnapToItem.bind(this)}
                        sliderWidth={width}
                        itemWidth={290} //256
                        containerCustomStyle={{ overflow: 'visible' }}
                       contentContainerCustomStyle={{ overflow: 'visible' }}
                        layout={'tinder'}
                        firstItem={0}
                        layoutCardOffset={16} //For showing card deck height.
                    />

                </CarouselBackgroundView>
            </View>
            <View>
            {isView ?
                <ViewPopup justifyContent= 'center' alignItems= 'center'>
                    <CurrentVideoImage  source={require('./whitecard.png')} resizeMode={'cover'} >

                        <Image style={{height:'50%',width:'100%',shadowColor:"#123456",shadowOpacity:0.5,zIndex:2}}
                               source={require('../../../blue.png')} />

                            <Text
                                style={styles.label1}>{"This is place where we show text according to the sentence"}</Text>
                         <TouchableOpacity style={[stylesButton.button,{marginTop:20}]}  onPress={() => this.setState({isView:!this.state.isView})}>
                            <Image  style={stylesButton.imageLeft} source={require('./arrowRight.png')} />
                        </TouchableOpacity>
                    </CurrentVideoImage>

                </ViewPopup>
                : null}
            </View>
            </View>

        );
    }
}

const {height, width} = Dimensions.get('window');
const deviceHeight = height;

console.log("aspect ratio is"+deviceHeight+"Value");


// ios greater than 6 5.5 inch
const CurrentVideoImage = styled.ImageBackground`
  
  width: 290;
  height: 500; 
  border-radius: 20;
`;
const ThumbnailBackgroundView = styled.View`
top: 75;
  width: 290; 
  height: 500;
  
`;
/* const CurrentVideoImage = styled.ImageBackground`

        width: 320;
        height: 470;
        borderRadius: 10;
        shadowColor: 'rgba(0,0,0,0.5)';
        shadowOffset: {
            width: 0,
            height: 1
        };
        shadowOpacity:0.5;
`; */

const CarouselBackgroundView = styled.View`
transform: rotate(180deg);
flex-direction: column;
justifyContent: center;
alignItems: center;
 
  height: 100%;
  width: 100%;
`;
const ViewPopup = styled.View`

flex-direction: column;
justifyContent: center;
alignItems: center;
 
  height: 100%;
  width: 100%;
`;

/* const CarouselBackgroundView = styled.View`
transform: rotate(180deg);
justify-content: center;
flex-direction: row;
  height: 100%;
  width: 100%;
  
`; */

const styles = StyleSheet.create({
    container1: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#f2f2f2',
    },
    container: {
        left:140
    },
    content:{
        flex: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    content2:{
        flex: 5,
        top:-120,
        alignItems: 'center',
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
    card1: {
        backgroundColor: '#FE474C',
    },
    card2: {
        backgroundColor: '#FEB12C',
    },
    label: {
        transform: [{ rotate: '180deg'}],
        lineHeight: 400,
        textAlign: 'center',
        fontSize: 55,
        fontFamily: 'System',
        color: '#000000',
        backgroundColor: 'transparent',
    },
    label1: {
        lineHeight:50,
        textAlign: 'center',
        fontSize: 20,
        fontFamily: 'System',
        color: '#000000',
        backgroundColor: 'transparent',
        marginLeft:10,
        marginRight:10
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

        color: '#000000',
        fontWeight: '300',
        fontSize: 20,
        // backgroundColor: 'green',
        height: Platform.OS === 'ios' ? 75 : 90,
        //  alignItems:'center'

    },
       viewProp: {
        transform: [{ rotate: '180deg'}],
        flex: 5,
        alignItems: 'center',
        justifyContent: 'center',

     },
//     viewProp: 
//   { transform: [{ rotate: '180deg'}],
//     position: 'relative',
//     flex:1,
//     height: 400, 
//     alignItems: 'center', 
//     justifyContent: 'center',
    
//      },
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

const stylesButton = StyleSheet.create({

    buttonBack: {
        marginRight:'2%',
        position:'absolute',
      },

    imageLeft:{
        width: 50,
        height: 50,
    },
    imageCamera:{
        width: 44,
        height: 39,
    },
});
