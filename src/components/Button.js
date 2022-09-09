import React, {Component} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

class Button extends Component {
    render() {

        return (
            <TouchableOpacity >
                <View style={styles.buttonLogin}>
                    <Text style={{color: 'white', fontWeight: 'bold'}}>Donate Now</Text>
                </View>
            </TouchableOpacity>
        );
    }
}

export default Button;

const styles = StyleSheet.create({
    buttonLogin: {

        paddingVertical: '4%',
        borderWidth:1,
        borderColor:'white',
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor:'#818BE9',

    },
});
