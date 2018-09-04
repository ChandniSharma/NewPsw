/** @format */

import App from './App';
import {name as appName} from './app.json';

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  createClass,
  Platform
} from 'react-native';

import CardFlip from 'react-native-card-flip';
// https://github.com/oblador/react-native-animatable
class ExampleView extends Component {
  handleViewRef = ref => this.view = ref;
  
  bounce = () => this.view.bounce(800).then(endState => console.log(endState.finished ? 'bounce finished' : 'bounce cancelled'));
  
  render() {
    return (
      <TouchableOpacity onPress={this.bounce}>
        <Animatable.View ref={this.handleViewRef}>
          <Text>Bounce me!</Text>
        </Animatable.View>
      </TouchableOpacity>
    );
  }
}





//AppRegistry.registerComponent('FlipCardExample', () => FlipCardExample);

//AppRegistry.registerComponent(appName, () => ExampleView);
AppRegistry.registerComponent(appName, () => App);
