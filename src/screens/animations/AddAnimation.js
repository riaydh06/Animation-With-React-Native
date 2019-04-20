import React, { Component } from 'react';
import { StyleSheet, View, Animated, TouchableWithoutFeedback, Button, Platform } from 'react-native';

export default class AddAnimation extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
          headerTitle:  'Add Animation'
        };
    };

    state = {
        animation: new  Animated.Value(0)
    }

    startAnimation = () => {
        Animated.timing(this.state.animation, {
            toValue: 1,
            duration: 4400
        }).start(() => {
            Animated.timing(this.state.animation, {
                toValue: 0,
                duration: 2500
            }).start();
        });
    }

    render() {
        const randomValue = new Animated.Value(50);
        const newAnimation = Animated.add(this.state.animation, randomValue);
        const animatedStyles = {
           transform: [{translateY: newAnimation }]
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