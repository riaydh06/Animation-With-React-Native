import React, { Component } from 'react';
import { StyleSheet, View, Animated, TouchableWithoutFeedback, Button, Platform } from 'react-native';

export default class RotationAnimation extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
          headerTitle:  'Rotation Animation'
        };
    };

    state = {
        animation: new  Animated.Value(0)
    }

    startAnimation = () => {
        Animated.timing(this.state.animation, {
            toValue: 360,
            duration: 400
        }).start(() => {
            Animated.timing(this.state.animation, {
                toValue: 0,
                duration: 500
            }).start();
        });
    }

    render() {
        const rotateIntetpolation = 
        this.state.animation.interpolate({
            inputRange: [0, 360],
            outputRange: ["0deg", "360deg"]
        })
        const boxAnimatedStyles = {
            transform: [
                {
                    rotate: rotateIntetpolation
                }
            ]
        }
        return (
            <View style={styles.container}>
                <TouchableWithoutFeedback onPress={ ()=>this.startAnimation() }
                >    
                        <Animated.View style={[styles.box, boxAnimatedStyles]} />
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