import React, { Component } from 'react';
import { View, Animated, PanResponder, Dimensions, LayoutAnimation, UIManager } from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SWIPE_THRESHOLD = SCREEN_WIDTH * 0.25;
const SWIPE_OUT_DURATION = 250;

const styles = {
    cardStyle: {
        position: 'absolute',
        width: SCREEN_WIDTH,
        zIndex: 9999
        // left: 0,
        // right: 0
    }
}

class Deck extends Component {
    static defaultProps = {
        onSwipeRight: () => {},
        onSwipeLeft: () => {}
    }
    constructor(props) {
        super(props);

        const position = new  Animated.ValueXY();
        const panResponder = PanResponder.create({
            onStartShouldSetPanResponder: (event) => true,
            onPanResponderMove: (event, gesture) => {
                position.setValue({ x: gesture.dx, y: gesture.dy})
            },
            onPanResponderRelease: (event, gesture) => {
                if(gesture.dx > SWIPE_THRESHOLD){
                   this.forceSwipe('right');
                }else if(gesture.dx < -SWIPE_THRESHOLD) {
                   this.forceSwipe('left');
                }else {
                    this.resetPosition();
                }
                
            }
        });

        this.state = { panResponder, position, index: 0 };
         
    }
    componentWillReceiveProps(nextProps) {
        if(nextProps.data !== this.props.data) {
            this.setState({ index: 0})
        }
    }

    componentWillUpdate() {
        UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true)
        LayoutAnimation.spring();
    }
    forceSwipe(direction) {
        const x = direction === 'right'? SCREEN_WIDTH : -SCREEN_WIDTH;
        Animated.timing( this.state.position, {
            toValue: { x, y:0},
            duration: SWIPE_OUT_DURATION
        }).start(() => this.onSwipeComplete(direction)); 
    }
    onSwipeComplete(direction){
        const { onSwipeLeft, onSwipeRight, data } = this.props;
        const item = this.props.data[this.state.index]

        direction === 'right' ? onSwipeRight(item) : onSwipeLeft(item);
        this.state.position.setValue({ x: 0, y: 0});
        this.setState({ index: this.state.index + 1});
    }

    resetPosition() {
        Animated.spring( this.state.position, {
            toValue: { x: 0, y: 0}
        }).start();
    }
    getCardStyle(){
        const { position } = this.state;
        const rotate = position.x.interpolate({
            inputRange: [-SCREEN_WIDTH, 0, SCREEN_WIDTH],
            outputRange: [ '-120deg', '0deg', '120deg']
        })

        return {
            ...this.state.position.getLayout(),
            transform: [{ rotate }]
        };
    }

    renderCards(){
        if(this.state.index >= this.props.data.length) {
            return this.props.renderNoMoreCards();
        }

        return this.props.data.map((item, index) => {
            if(index < this.state.index) { return null;}
            if(index === this.state.index){
                return (
                    <Animated.View 
                        key={item.id}
                        style={[this.getCardStyle(), styles.cardStyle]} 
                        {...this.state.panResponder.panHandlers}
                    >
                        { this.props.renderCard(item) }
                    </Animated.View>
                );
            }

            return (
                <Animated.View 
                    key={item.id} 
                    style={[styles.cardStyle, { top: 10 * ( index - this.state.index) }]}
                >
                    { this.props.renderCard(item) }
                </Animated.View>       
            );
        }).reverse();
    }
    render() {
        return (
            <View>
                {this.renderCards() }
            </View>           
        )
    }
}

export default Deck;