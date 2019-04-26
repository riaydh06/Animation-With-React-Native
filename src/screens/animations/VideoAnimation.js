import React, { Component } from 'react';
import { StyleSheet, View, Animated, TouchableWithoutFeedback, Button, Platform } from 'react-native';

export default class VideoAnimation extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
          headerTitle:  'Video Animation'
        };
    };

    state = {
        animation: new  Animated.Value(0)
    }

    startAnimation = () => {
        Animated.timing(this.state.animation, {
            toValue: 400,
            duration: 1400,
            useNativeDriver: true
        }).start(() => {
            this.state.animation.setValue(0)
        });

        setTimeout(()=>{
            let i = 0;
            while(i<=50000000){
                i++;
            }
        },500)
    }

    render() {
        const scaleIntetpolation = 
        this.state.animation.interpolate({
            inputRange: [1, 300],
            outputRange: [1, 300],
        });

        const boxAnimatedStyles = {
            transform: [
                {
                    translateY: scaleIntetpolation
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