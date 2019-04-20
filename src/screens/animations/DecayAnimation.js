import React, { Component } from 'react';
import { StyleSheet, View, Animated, TouchableWithoutFeedback, Button, Platform } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export default class DecayAnimation extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
          headerTitle:  'Decay Animation'
        };
    };

    state = {
        animation: new  Animated.Value(0)
    }

    componentWillMount(){
        this._x = 0;
        this._y = 0;
        this.state.animation.addListener((value) => {
            this._x = value.x;
            this._y = value.y;
        });
        this._panResponder = PanResponder.create({
            onStartShouldSetPanResponder: () => true,
            onMoveShouldSetPanResponder: () => true,
            onPanResponderGrant: (e, gestureState ) => {
                this.state.animation.extractOffset(); 
                // this.state.animation.setOffset({
                //     x: this._x,
                //     y: this._y
                // });
                // this.state.animation.setValue({
                //     x: 0,
                //     y: 0
                // })
            },
            onPanResponderMove: Animated.event([
                null,
                {
                    dx: this.state.animation.x,
                    dy: this.state.animation.y
                }
            ]),
            onPanResPonderRelease: (e, {vx, vy}) => {
               Animated.decay(this.state.animation, {
                velocity: { x: vx, y: vy},
                deceleration: 0.997
               }).start();

            }
        })
    }

    render() {
        const animatedStyle = {
           transform: this.state.animation.getTranslateTransform(),
        }
        return (
            <View style={styles.container}>
                <Animated.View 
                    style={[styles.box, animatedStyle]}
                    { ...this._panResponder.PanHandlers}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      },
    box: {
        width: 100,
        height: 100,
        backgroundColor: 'red'
    },
})