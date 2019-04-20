import React, { Component } from 'react';
import { StyleSheet, View, Animated, TouchableWithoutFeedback, Button, Platform } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export default class EventAnimation extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
          headerTitle:  'Event Animation'
        };
    };

    state = {
        animation: new  Animated.Value(0)
    }

    startAnimation = () => {
        Animated.spring(this.state.animation, {
            toValue: 2,
            friction: 2,
            tension: 160
        }).start(() => {
            Animated.timing(this.state.animation, {
                toValue: 1,
                duration: 2500
            }).start();
        });
    }

    render() {
        const backgroundInterpolate = this.state.animation.interpolate({
            inputRange: [0, 3000],
            outputRange: ["rgb(255,99,71)", "rgb(99,71,255)"]
        })
        const backgroundStyle = {
           backgroundColor: backgroundInterpolate
        }
        return (
            <View style={styles.container}>
               <ScrollView
                    scrollEventThrottle={16}
                    onScroll={Animated.event([
                        {
                            nativeEvent: {
                                contentOffset: {
                                    y: this.state.animation 
                                }
                            }
                        }
                    ])}
                >
                <Animated.View style={[styles.content, backgroundStyle ]}>
                    <TouchableWithoutFeedback onPress={ ()=>this.startAnimation() }
                        >    
                            <Animated.View style={[styles.box]} />
                    </TouchableWithoutFeedback>
                </Animated.View>
               </ScrollView>
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
    content: {
        height: 3000
    }
})