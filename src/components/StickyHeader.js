import {StyleSheet, View, Text, Image, Animated} from 'react-native';
import React from 'react';

const StickyHeader = ({style}) => {
  return (
    <Animated.View horizontal style={[styles.tabs, style]}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          alignSelf: 'center',
        }}>
        <Image source={require('../assets/logo.webp')} />
        <Text
          style={{
            textAlign: 'center',
            fontSize: 28,
            marginTop: '7%',
            fontWeight: 'bold',
            color: 'black',
          }}>
          Projects
        </Text>
      </View>
    </Animated.View>
  );
};

export default StickyHeader;

const styles = StyleSheet.create({
  tabs: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    backgroundColor: '#fff',
    height: '10%',
  },
});
