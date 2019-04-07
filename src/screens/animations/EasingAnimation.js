import React, { Component } from 'react';
import { StyleSheet, View, Animated, TouchableWithoutFeedback, Button, Platform } from 'react-native';

export default class HeightWidthPercentangeAnimation extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
          headerTitle:  'Easing Animation'
        };
    };

    state = {
        animation: new  Animated.Value(0)
    }

    startAnimation = () => {
        Animated.timing(this.state.animation, {
            toValue: 1,
            duration: 400,
            easing: Easing.back(5),
            // easing: Easing.bounce,
            // easing: Easing.elastic(3),
            // easing: Easing.bezier(.06,1,.86,.28)
        }).start(() => {
            Animated.timing(this.state.animation, {
                toValue: 0,
                duration: 500
            }).start();
        });
    }

    render() {
        const animatedStyles = {
            transform: [
                {
                    translateY : this.state.animation
                }

            ]
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
        height: 20,
        width: 20,
        backgroundColor: 'red'
    }
})