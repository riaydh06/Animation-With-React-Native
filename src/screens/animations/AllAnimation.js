import React, { Component } from 'react';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';


class  AllAnimation extends React.Component {
    static navigationOptions = () => ({
        header: null
    });
    
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.page}>
                    <Button title="Opecity Animation" onPress={()=>this.props.navigation.navigate('Opecity')}/>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    page: {
        width: '80%',
        marginTop: 10,
        marginBottom: 10
    }
})

export default AllAnimation;