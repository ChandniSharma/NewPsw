import React, { Component } from 'react';
import { StyleSheet, View, TouchableOpacity, Text, Image } from 'react-native';

// <Image source={require('./Assets/settingsWheel.png')} style={stylesButton.image}/>

class HeaderCustom extends Component{
    render(){
    return(
        <View style={stylesButton.containerButton}>
        <TouchableOpacity style={stylesButton.button} onPress={()=>{alert("Coming Soon")}}>
        <Text> Settings </Text>

        </TouchableOpacity>
      </View>
    );
 }
}
const stylesButton = StyleSheet.create({
    containerButton: {
      ...StyleSheet.absoluteFillObject,
      alignSelf: 'flex-end',
      marginTop: 20,
      position: 'relative', // add if dont work with above
      
    },
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
    image:{
      width: 20,
      height: 20,
    },
  });
 export default HeaderCustom;