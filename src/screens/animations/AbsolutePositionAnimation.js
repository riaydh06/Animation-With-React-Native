import React, { Component } from 'react';
import { StyleSheet, View, Animated, TouchableWithoutFeedback, Button, Platform } from 'react-native';

export default class AbsolutePositionAnimation extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
          headerTitle:  'Width Height Animation'
        };
    };

    state = {
        animation: new  Animated.Value(0)
    }

    startAnimation = () => {
        Animated.timing(this.state.animation, {
            toValue: 40,
            duration: 400
        }).start(() => {
            Animated.timing(this.state.animation, {
                toValue: 0,
                duration: 2500
            }).start();
        });
    }

    render() {
        const animatedStyles = {
           top: this.state.animation,
           left: this.state.animation,
           right: this.state.animation
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
        position: "absolute",
        left: 0,
        top: 0,
        right:0,
        height: 100,
        backgroundColor: 'red'
    }
})