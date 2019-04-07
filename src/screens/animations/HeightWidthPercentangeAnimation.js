import React, { Component } from 'react';
import { StyleSheet, View, Animated, TouchableWithoutFeedback, Button, Platform } from 'react-native';

export default class HeightWidthPercentangeAnimation extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
          headerTitle:  'Height Width Percent Animation'
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
        const widthIntetpolation = 
        this.state.animation.interpolate({
            inputRange: [0, 1],
            outputRange: ["20%", "50%"]
        })

        const HeightIntetpolation = 
        this.state.animation.interpolate({
            inputRange: [0, 1],
            outputRange: ["20%", "30%"]
        })
        const animatedStyles = {
           width: widthIntetpolation,
           height: HeightIntetpolation
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
        backgroundColor: 'red'
    }
})