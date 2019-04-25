import React, { Component } from 'react';
import { StyleSheet, View, Animated, TouchableWithoutFeedback, } from 'react-native';

export default class ParallelAnimation extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
          headerTitle:  'Parallel Animation'
        };
    };

    state = {
        colorAnimation: new  Animated.Value(0),
        scaleAnimation: new Animated.Value(1),
    }

    startAnimation = () => {
        Animated.parallel([
            Animated.timing(this.state.colorAnimation, {
                    toValue: 1,
                    duration: 500,
                }),

                Animated.timing(this.state.scaleAnimation, {
                    toValue: 2,
                    duration: 500
                })
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