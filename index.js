/** @format */

import App from './App';
import {name as appName} from './app.json';
import CardDeckNew from './src/supportFiles/codeFiles/CardDeckNew';
import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet } from 'react-native';
import cardDeckTop from './src/supportFiles/codeFiles/cardDeckTop';

class MainClass extends Component {
    render() {
      return (
       // <CardDeck />
       <cardDeckTop />
      );
    }
  }

  
AppRegistry.registerComponent(appName, () => App);
