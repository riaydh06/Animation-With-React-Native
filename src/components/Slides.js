import React, { Component } from 'react';
import { View, Text, ScrollView, Dimensions } from 'react-native';
import { Button } from 'react-native-elements';

const SCREEN_WIDTH = Dimensions.get('window').width;

const styles = {
    slide: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: SCREEN_WIDTH
    },
    textStyle: {
        fontSize: 30,
        color: 'white'
    },
    buttonStyle: {
        backgroundColor: '#0288D1',
        margin: 15
    }
}

class  Slides extends React.Component {
    renderLastSlide(index) {
        if(index === this.props.data.length - 1) {
            return (
                <Button 
                    title="Onwards!"
                    buttonStyle={styles.buttonStyle}
                    raised
                    onPress={ this.props.onComplete}
                />
            );
        } 
    }
    renderSlides() {
        return this.props.data.map((slide, index) => {
            return (
                <View
                    key={slide.text}
                    style={ [styles.slide,{ backgroundColor: slide.color}]}
                >
                    <Text style={styles.textStyle}>{slide.text}</Text>
                    { this.renderLastSlide(index)}
                </View>
            );
        });
    }
    render() {
        return (
            <ScrollView
                horizontal
                pagingEnabled
                style={{ flex: 1 }}
            >
                { this.renderSlides() }
            </ScrollView>
        )
    }
}

export default Slides;