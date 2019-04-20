import React, { Component } from 'react';
import { StyleSheet, View, Animated, TouchableWithoutFeedback, Button, Platform } from 'react-native';

export default class ModuloAnimation extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
          headerTitle:  'Modulo Animation'
        };
    };

    state = {
        animation: new  Animated.Value(0)
    }

    startAnimation = () => {
        Animated.timing(this.state.animation, {
            toValue: 12,
            duration: 4400
        }).start();
    }

    render() {
        const randomValue = new Animated.Value(3);
        const newAnimation = Animated.modulo(this.state.animation, randomValue);
        const interpolated = newAnimation.interpolate({
            inputRange: [0,3],
            outputRange: ["0deg", "270deg"]
        })
        const animatedStyles = {
           transform: [{translateY: [{ rotate: interpolated}] }]
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