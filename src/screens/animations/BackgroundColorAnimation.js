import React, { Component } from 'react';
import { StyleSheet, View, Animated, TouchableWithoutFeedback, Button, Platform } from 'react-native';

export default class BackgroundColorAnimation extends React.Component {
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
            toValue: 1,
            duration: 400
        }).start(() => {
            Animated.timing(this.state.animation, {
                toValue: 0,
                duration: 500
            }).start();
        });
    }

    render() {  
        const boxIntetpolation = 
        this.state.animation.interpolate({
            inputRange: [0, 1],
            outputRange: ["rgb(255,99,71)", "rgb(99,71,255)"]
        })
        const colorIntetpolation = 
        this.state.animation.interpolate({
            inputRange: [0, 1],
            outputRange: ["rgb(99,71,255)", "rgb(255,99,71)"]
        })
        const boxAnimatedStyles = {
           backgroundColor: boxIntetpolation
        }
        const colorAnimatedStyles = {
            color: colorIntetpolation
        }    
        return (
            <View style={styles.container}>
                <TouchableWithoutFeedback onPress={ ()=>this.startAnimation() }
                >    
                        <Animated.View style={[styles.box, boxAnimatedStyles]} >
                            <Animated.Text style={colorAnimatedStyles}>
                                Hi riaydh
                            </Animated.Text>
                        </Animated.View>
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