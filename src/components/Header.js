import {View, Image, StyleSheet} from 'react-native'
import React from 'react'

const IMAGE_HEIGHT = 200
const Header = () => (
    <View style={{backgroundColor: 'white', paddingTop: '5%'}}>
        <Image
            source={require('../assets/banner.png')}
            resizeMode='stretch'
            style={styles.image}
        />
    </View>
);

export default Header


const styles = StyleSheet.create({
    image: {
        height: IMAGE_HEIGHT,
        width: '88%',
        alignSelf: 'center'
    }
});