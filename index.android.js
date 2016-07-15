/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, {
  Component
} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import text1 from './components/text';
import listview1 from './components/listview'
import listview2 from './components/listview01'
import home from './components/navigator/home'
import icon from './components/icon/icon'
import tab3 from './components/tabview/tabview03'
import tab4 from './components/tabview/tabview04'
import movie from './components/moviefether/movie'

import FlexBox from './src/flexbox'
import ImagePicker from './src/imagepicker/imagepicker'
import IconList from './src/icon/IconList'

import Header from './src/jd/Header'
import MainScreen from './src/jd/MainScreen'
/*import HomePage from './src/jd/HomePage'*/

import HomeView from './src/vcan/HomeView'
import MainView from './src/vcan/MainView'
import PersonPage from './src/vcan/PersonPage'
import HomePage from './src/vcan/HomePage'

import App from './appcounter/containers/app';

import Entrance from './app/entrance'


class boilerplate extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.android.js
        </Text>
        <Text style={styles.instructions}>
          Shake or press menu button for dev menu
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('boilerplate', () => Entrance);