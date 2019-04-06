import React, { Component } from 'react';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';


class  AllAnimation extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
          headerTitle:  'All Animation'
        };
    };
    
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.page}>
                    <Button title="Opecity Animation" onPress={()=>this.props.navigation.navigate('Opecity')}/>
                </View>

                <View style={styles.page}>
                    <Button title="Translate Animation" onPress={()=>this.props.navigation.navigate('Translate')}/>
                </View>

                <View style={styles.page}>
                    <Button title="Scale Animation" onPress={()=>this.props.navigation.navigate('Scale')}/>
                </View>
                <View style={styles.page}>
                    <Button title="Width Height Animation" onPress={()=>this.props.navigation.navigate('WidthHeight')}/>
                </View>
                <View style={styles.page}>
                    <Button title="Absolute Position Animation" onPress={()=>this.props.navigation.navigate('AbsolutePosition')}/>
                </View>
                <View style={styles.page}>
                    <Button title="Background Color Animation" onPress={()=>this.props.navigation.navigate('BackgroundColor')}/>
                </View>
                <View style={styles.page}>
                    <Button title="Rotation Animation" onPress={()=>this.props.navigation.navigate('Rotation')}/>
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