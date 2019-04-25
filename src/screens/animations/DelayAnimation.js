import React, { Component } from 'react';
import { StyleSheet, View, Animated, TouchableWithoutFeedback, } from 'react-native';

export default class DelayAnimation extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
          headerTitle:  'Delay Animation'
        };
    };

    state = {
        colorAnimation: new  Animated.Value(0),
        scaleAnimation: new Animated.Value(1),
    }

    startAnimation = () => {
        Animated.sequence([
            Animated.timing(this.state.colorAnimation, {
                toValue: 1,
                duration: 500,
            }),
            Animated.timing(this.state.scaleAnimation, {
                toValue: 2,
                duration: 300
            }),  
            Animated.delay(1500),
            Animated.parallel([
                Animated.timing(this.state.colorAnimation, {
                    toValue: 0,
                    duration: 500,
                }),
                Animated.timing(this.state.scaleAnimation, {
                    toValue: 1,
                    duration: 300
                }),
            ])
        ]).start()
    }

    render() {
        const backgroundColorInterpolate = this.state.colorAnimation.interpolate({
            inputRange: [0,1],
            outputRange: ["rgb(255,99,71)","99,71,255"]
        })
        const bpxAnimatedStyles = {
            backgroundColor: backgroundColorInterpolate,
            transform: [
                {
                    scale : this.state.scaleAnimation
                }

            ]
        }
        return (
            <View style={styles.container}>
                <TouchableWithoutFeedback onPress={ ()=>this.startAnimation() }
                >    
                        <Animated.View style={[styles.box, bpxAnimatedStyles]} />
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