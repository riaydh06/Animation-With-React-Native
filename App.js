
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
import AllAnimation from './src/screens/animations/AllAnimation'
import OpecityAnimation from './src/screens/animations/OpecityAnimation'


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
      },
      animations: {
        screen: createStackNavigator ({
          AllAnimation: { screen: AllAnimation },
          Opecity: { screen: OpecityAnimation },
          Translate: { screen: OpecityAnimation }
        })
      }
    }); 
    const Container = createAppContainer(MainNavigator);

    return (   
      <Container>
        {/* <Ball /> */}
        <View  style={styles.container} />
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  }
});
