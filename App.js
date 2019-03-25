
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { createBottomTabNavigator, createStackNavigator, createAppContainer } from 'react-navigation';
import Ball from './src/Ball';
import WelcomeScreen from './src/screens/WelcomeScreen';
import AuthScreen from './src/screens/AuthScreen';
import MapScreen from './src/screens/MapScreen';
import DeckScreen from './src/screens/DeckScreen';
import SettingScreen from './src/screens/SettingScreen';
import ReviewScreen from './src/screens/ReviewScreen';


export default class App extends React.Component {
  
  render() {
    const MainNavigator = createBottomTabNavigator ({
      welcome: { screen: WelcomeScreen },
      auth: { screen: AuthScreen },
      main: {
        screen: createBottomTabNavigator ({
          map: { screen: MapScreen },
          deck: { screen: DeckScreen },
          review: {
            screen: createStackNavigator ({
              review: { screen: ReviewScreen },
              settings: { screen: SettingScreen }
            })
          }
        })
      }
    }); 
    const Container = createAppContainer(MainNavigator);

    return (   
      <View style={styles.container}>
        {/* <Ball /> */}
        <Container />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
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
