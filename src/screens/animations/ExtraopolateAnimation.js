import React, { Component } from 'react';
import { StyleSheet, View, Animated, TouchableWithoutFeedback, Button, Platform } from 'react-native';

export default class ExtrapolateAnimation extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
          headerTitle:  'Extrapolate Animation'
        };
    };

    state = {
        animation: new  Animated.Value(1)
    }

    startAnimation = () => {
        Animated.timing(this.state.animation, {
            toValue: 2,
            duration: 1400
        }).start(() => {
            Animated.timing(this.state.animation, {
                toValue: 1,
                duration: 400
            }).start()
        });
    }

    render() {
        const scaleIntetpolation = 
        this.state.animation.interpolate({
            inputRange: [1, 2],
            outputRange: [1, 2],
            extrapolate: "identity",
            // extrapolate: "clamp",
            // extrapolateLeft: "clamp",
            // extrapolateRight: "clamp"
        });

        const boxAnimatedStyles = {
            transform: [
                {
                    scale: scaleIntetpolation
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