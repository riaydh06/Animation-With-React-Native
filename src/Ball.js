import React, { Component } from 'react';
import { View, Animated } from 'react-native';

const styles ={
    ball: {
        height: 60,
        width: 60,
        borderRadius: 30,
        borderWidth: 30,
        borderColor: 'red'
    }
}

class Ball extends React.Component {
componentWillMount() {
    this.position = new  Animated.ValueXY(0,0);
    Animated.timing(this.position, {
        toValue: { x: 200, y: 500 }
    }).start();
}

    render() {
        return (
            <Animated.View style={this.position.getLayout()}>
                <View style={ styles.ball} />
            </Animated.View>
            
        )
    }
}

export default Ball;