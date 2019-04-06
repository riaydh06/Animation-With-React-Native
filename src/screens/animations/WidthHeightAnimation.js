import React, { Component } from 'react';
import { StyleSheet, View, Animated, TouchableWithoutFeedback, Button, Platform } from 'react-native';

export default class WidthHeightAnimation extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
          headerTitle:  'Width Height Animation'
        };
    };

    state = {
        animation: new  Animated.Value(150)
    }

    startAnimation = () => {
        Animated.timing(this.state.animation, {
            toValue: 332,
            duration: 4400
        }).start(() => {
            Animated.timing(this.state.animation, {
                toValue: 150,
                duration: 2500
            }).start();
        });
    }

    render() {
        const animatedStyles = {
           width: this.state.animation,
           height: this.state.animation
        }
        return (
            <View style={styles.container}>
                <TouchableWithoutFeedback onPress={ ()=>this.startAnimation() }
                >    
                        <Animated.View style={[styles.box, animatedStyles]} />
                </TouchableWithoutFeedback>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'green',
      },
    box: {
        width: 100,
        height: 100,
        backgroundColor: 'red'
    }
})