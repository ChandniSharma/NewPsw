import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    ImageBackground
} from 'react-native';

import CardStack, { Card } from 'react-native-card-stack-swiper';


export default class CardDeckNew extends React.Component {

    static navigationOptions =
        {
            title: 'CardDeckNew',
        };

    constructor(props){
        super();
        this.state = {
            numberValue: '01'
        }
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
        this.state = {
            errors: []
        }
        this.props = props;
    }
    render() {
        return (
            <View style={{flex:1}}>
                    <TouchableOpacity style={[styles.buttonBack]}  onPress={() => this.props.navigation.navigate('Home')}>
                    <Image  style={styles.imageLeft} source={require('./arrowRight.png')} />
                </TouchableOpacity>

                <CardStack
                    style={styles.content}
                    ref={swiper => {
                        this.swiper = swiper
                    }}
                    disableTopSwipe = {true}
                    disableBottomSwipe = {true}
                    onSwiped={() => console.log('onSwiped')}
                    onSwipedLeft={() => console.log('onSwipedLeft')}
                    
                    onSwipedTop={() => console.log('onSwipedTop')}
                    onSwipedBottom={() => console.log('onSwipedBottom')}

                >
                    <Card style={[styles.card6]}>
                    <ImageBackground style={{ width: 270, height: 370, borderRadius: 25 }} source={require('./whitecard.png')} >
                    <Text style={styles.label}>a</Text>
                      </ImageBackground>
                    </Card>
                    <Card style={[styles.card5]}>
                    <ImageBackground style={{ width: 275, height: 385, borderRadius: 25 }} source={require('./whitecard.png')} >
                    <Text style={styles.label}>the</Text>
                    </ImageBackground>
                    </Card>
                    <Card style={[styles.card4]}>
                    <ImageBackground style={{ width: 280, height: 400, borderRadius: 25 }} source={require('./whitecard.png')} >
                    <Text style={styles.label}>come</Text>
                    </ImageBackground>
                    </Card>
                    <Card style={[styles.card3]}>
                    <ImageBackground style={{ width: 285, height: 415, borderRadius: 25 }} source={require('./whitecard.png')} >
                    <Text style={styles.label}>on</Text>
                    </ImageBackground>
                    </Card>
                    <Card style={[styles.card2]}>
                    <ImageBackground style={{ width: 290, height: 430, borderRadius: 25 }} source={require('./whitecard.png')} >
                    <Text style={styles.label}>see</Text>
                    </ImageBackground>
                    </Card>
                    <Card style={[styles.card1]}>
                    <ImageBackground style={{ width: 295, height: 445, borderRadius: 25 }} source={require('./whitecard.png')} >
                    <Text style={styles.label}>go</Text>
                    </ImageBackground>
                    </Card>

                </CardStack>



            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#f2f2f2',
    },
    content:{
        bottom:100,
        flex: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    card:{
        width: 320,
        height: 550,
        backgroundColor: 'pink',
        borderRadius: 5,
        shadowColor: 'rgba(0,0,0,0.5)',
        shadowOffset: {
            width: 0,
            height: 1
        },
        shadowOpacity:0.5,
    },
    card1: {

        width: 295,
        height: 445,
        marginTop:100,
        borderRadius: 20,
        shadowColor: 'rgba(0,0,0,0.5)',
        shadowOffset: {
            width: 0,
            height: 1
        },
        shadowOpacity:0.5,
    },
    card2: {

        width: 290, height: 430,
        marginTop:120,
        borderRadius: 15,
        shadowColor: 'rgba(0,0,0,0.5)',
        shadowOffset: {
            width: 0,
            height: 1
        },
        shadowOpacity:0.5,
    },
    card3: {

        width: 285, height: 415,
        marginTop:140,
        borderRadius: 10,
        shadowColor: 'rgba(0,0,0,0.5)',
        shadowOffset: {
            width: 0,
            height: 1
        },
        shadowOpacity:0.5,
    },
    card4: {

        width: 280, height: 400,
        marginTop:160,
        borderRadius: 5,
        shadowColor: 'rgba(0,0,0,0.5)',
        shadowOffset: {
            width: 0,
            height: 1
        },
        shadowOpacity:0.5,
    },
    card5: {

        width: 275, height: 385,
        marginTop:180,
        borderRadius: 5,
        shadowColor: 'rgba(0,0,0,0.5)',
        shadowOffset: {
            width: 0,
            height: 1
        },
        shadowOpacity:0.5,
    },
    card6: {

        width: 270, height: 370,
        marginTop:200,
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
        color: '#000000',
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
    },
        buttonBack: {
            zIndex:50,
            marginTop:'5%',
            marginRight:'2%',
            position:'relative',
          },
    
        imageLeft:{
            width: 50,
            height: 50,
        }
});