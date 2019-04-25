import React, { Component } from 'react';
import { StyleSheet, View, Animated, TouchableWithoutFeedback, } from 'react-native';

export default class ColorBackgroundColorAnimation extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
          headerTitle:  'ColorBackgroundColor Animation'
        };
    };

    state = {
        animation: new Animated.Value(1),
    }

    startAnimation = () => {
        Animated.timing(this.state.animation, {
            toValue: 2,
            duration: 500,
        }).start(()=>{
            this.state.animation.setValue(0);
        })
    }

    render() {
        const colorInterpolate = this.state.animation.interpolate({
            inputRange: [0, 1, 2],
            outputRange: ["rgb(71,255,99)", "rgb(255,99,71)", "rgb(99,71,255)"]
        })
        const animatedStyles = {
            backgroundColor: colorInterpolate
        }
        const bgStyle = {
            backgroundColor: this.state.animation.interpolate({
                inputRange: [0, 2],
                outputRange: ["rgb(255,71,99,1)", "rgb(255,99,71,0)"]
            })
        }
        return (
            <Animated.View style={[styles.container, bgStyle]}>
                <TouchableWithoutFeedback onPress={ ()=>this.startAnimation() }
                >    
                        <Animated.View style={[styles.box, animatedStyles]} />
                </TouchableWithoutFeedback>
            </Animated.View>
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