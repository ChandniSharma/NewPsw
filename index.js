/** @format */

import App from './App';
import {name as appName} from './app.json';
import CardDeck from './src/supportFiles/codeFiles/cardDeck';
import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet } from 'react-native';

export default class MainClass extends Component {
    render() {
      return (
        <CardDeck />
        
      );
    }
  }
AppRegistry.registerComponent(appName, () => MainClass);
