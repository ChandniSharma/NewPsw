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


export default class NewFlip extends Component {
  render() {
    return (
      <View style={styles.container}>
        <CardFlip style={styles.cardContainer} ref={(card) => this.card = card} >
          <TouchableOpacity activeOpacity={1} style={[styles.card, styles.card1]} onPress={() => this.card.flip()} >
            <Text style={styles.label}>AB</Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={1} style={[styles.card, styles.card1]} onPress={() => this.card.flip()} >
            <Text style={styles.label}>CD</Text>
          </TouchableOpacity>
        </CardFlip>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'yellow',
  },
  cardContainer:{
    width: 320,
    height: 470,
  },
  card:{
    width: 320,
    height: 470,
    backgroundColor: 'blue',
    borderRadius: 5,
    shadowColor: 'rgba(0,0,0,0.5)',
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity:0.5,
  },
  card1: {
    backgroundColor: 'red',
  },
  card2: {
    backgroundColor: 'pink',
  },
  label: {
    lineHeight: 470,
    textAlign: 'center',
    fontSize: 55,
    fontFamily: 'System',
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
});









// import FlipCard from 'react-native-flip-card';

// export default class FlipCardExample extends Component {
//   constructor (props) {
//     super(props)
//     this.state = {
//       flip: false
//     }
//   }
//   render() {
//     return (
//       <View style={styles.container}>
//         <ScrollView>
//           <Text style={styles.welcome}>Flip Card Example</Text>
//           <View>
//             <Text style={styles.welcome}>Minimal</Text>
//             <FlipCard style={{marginBottom: 5}}>
//               {/* Face Side */}
//               <View style={styles.face}>
//                 <Text>The Face</Text>
//               </View>
//               {/* Back Side */}
//               <View style={styles.back}>
//                 <Text>The Back</Text>
//               </View>
//             </FlipCard>

//             <Text style={styles.welcome}>Customized</Text>
//             <FlipCard
//               flip={this.state.flip}
//               friction={6}
//               perspective={1000}
//               flipHorizontal={true}
//               flipVertical={false}
//               clickable={true}
//               style={styles.card}
//               alignHeight={true}
//               // alignWidth={true}
//               onFlipEnd={(isFlipEnd)=>{console.log('isFlipEnd', isFlipEnd)}}
//             >
//               {/* Face Side */}
//               <View style={styles.face}>
//                 <Text>The Face</Text>
//               </View>
//               {/* Back Side */}
//               <View style={styles.back}>
//                 <Text>T</Text>
//                 <Text>h</Text>
//                 <Text>e</Text>
//                 <Text></Text>
//                 <Text>B</Text>
//                 <Text>a</Text>
//                 <Text>c</Text>
//                 <Text>k</Text>
//               </View>
//             </FlipCard>
//           </View>

//           <View>
//             <TouchableOpacity
//               style={styles.button}
//               onPress={()=>{this.setState({flip: !this.state.flip})}}
//               >
//               <Text style={styles.buttonText}>Flip</Text>
//             </TouchableOpacity>
//           </View>

//           {/* <View>
//             {CARDS.map(createCard)}
//           </View> */}

//         </ScrollView>
//       </View>
//     )
//   }
// }
// /*
// var CARDS = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// var createCard = (val, i) => <MyFlipCard key={i} val={val}/>
// var createReactClass = require('create-react-class');
// var MyFlipCard = createReactClass({
//   shouldComponentUpdate: function (nextProps, nextState) {
//     return false
//   },
//   render: function () {
//     return (
//       <View style={{margin: 3}}>
//         <FlipCard
//           style={styles.card}
//         >
//           {/* Face Side 
//           <View style={styles.face}>
//             <Text>Card {this.props.val}</Text>
//           </View>
//           {/* Back Side 
//           <View style={styles.back}>
//             <Text>The back side</Text>
//           </View>
//         </FlipCard>
//       </View>
//     )
//   }
// })
// */
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//     marginTop: 20,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
//   card: {
//     width:200,
//   },
//   face: {
//     flex:1,
//     backgroundColor: '#2ecc71',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   back: {
//     flex:1,
//     backgroundColor: '#f1c40f',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   button: {
//     width: 100,
//     height: 30,
//     marginTop: 30,
//     paddingTop: 6,
//     paddingBottom: 6,
//     borderRadius: 3,
//     borderWidth: 1,
//     backgroundColor: '#007AFF',
//     borderColor: 'transparent',
//   },
//   buttonText: {
//     color: '#fff',
//     textAlign: 'center',
//   },
//   img: {
//     flex: 1,
//     height: 64
//   }
// });

//AppRegistry.registerComponent('FlipCardExample', () => FlipCardExample);

//AppRegistry.registerComponent(appName, () => NewFlip);
AppRegistry.registerComponent(appName, () => App);
