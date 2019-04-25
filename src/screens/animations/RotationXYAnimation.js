import React, { Component } from 'react';
import { StyleSheet, View, Animated, TouchableWithoutFeedback, Button, Platform } from 'react-native';

export default class RotationXYAnimation extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
          headerTitle:  'RotationXY Animation'
        };
    };

    state = {
        animation: new  Animated.Value(0)
    }

    startAnimation = () => {
        Animated.timing(this.state.animation, {
            toValue: 1,
            duration: 400
        }).start(() => {
           this.state.animation.setValue(0);
        });
    }

    render() {
        const xIntetpolation = 
        this.state.animation.interpolate({
            inputRange: [0, 1],
            outputRange: ["0deg", "360deg"]
        });
        const yIntetpolation = 
        this.state.animation.interpolate({
            inputRange: [0, .5, 1],
            outputRange: ["0deg","0deg", "180deg"]
        });
        const boxAnimatedStyles = {
            transform: [
                {
                    rotateX: xIntetpolation
                },
                {
                    rotateY: yIntetpolation
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