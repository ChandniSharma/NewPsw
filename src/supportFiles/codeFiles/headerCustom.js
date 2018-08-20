import React, { Component } from 'react';
import { StyleSheet, View, TouchableOpacity, Text, Image, Platform } from 'react-native';

// <Image source={require('./Assets/settingsWheel.png')} style={stylesButton.image}/>

class HeaderCustom extends Component{
    render(){
    return(
        <View style={stylesButton.containerButton}>
        <TouchableOpacity onPress={()=>{alert("Coming Soon")}}>
         <Image  style={stylesButton.image} source={require('./settingswheel.png')} />
        </TouchableOpacity>
      </View>
    );
 }
}
const stylesButton = StyleSheet.create({
    containerButton: {
      
      alignSelf: 'flex-end',
      marginTop: '10%',
      right:'2%',
      position: 'relative', // add if dont work with above
      justifyContent: 'center',
      alignItems: 'center',
      //backgroundColor: 'red',
    },
   
    image:{
      width: 25,
      height: 25,
    },
  });
 export default HeaderCustom;