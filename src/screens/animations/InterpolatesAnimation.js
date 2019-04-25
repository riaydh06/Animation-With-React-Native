import React, { Component } from 'react';
import { StyleSheet, View, Animated, TouchableWithoutFeedback, } from 'react-native';

export default class InterpolateAnimation extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
          headerTitle:  'Interpolate Animation'
        };
    };

    state = {
        scaleAnimation: new Animated.Value(1),
    }

    startAnimation = () => {
        Animated.sequence([
            Animated.timing(this.state.scaleAnimation, {
                toValue: 1,
                duration: 500,
            }),
            Animated.timing(this.state.scaleAnimation, {
                toValue: 2,
                duration: 300
            })
        ]).start()
    }

    render() {
        const scaleAnimationInterpolate = this.state.scaleAnimation.interpolate({
            inputRange: [0, 1, 2],
            outputRange: [0, 300, 0]
        })
        const interpolatedIntetpolate = AnimatedInterpolate.interpolate({
            inputRange: [0, 300],
            outputRange: [1, .5]
        })
        const interpolateXIntetpolate = AnimatedInterpolate.interpolate({
            inputRange: [0, 30, 50, 80, 100, 150, 299, 300],
            outputRange: [1, -30, -50, 80, -100, 300, 0, -100]
        })
        const boxAnimatedStyles = {
            transform: [
                {
                    translateY : scaleAnimationInterpolate
                },
                {
                    translateX : interpolateXIntetpolate
                }

            ],
            opacity: interpolatedIntetpolate
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
        height: 20,
        width: 20,
        backgroundColor: 'red'
    }
})