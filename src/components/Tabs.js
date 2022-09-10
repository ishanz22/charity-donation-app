import {StyleSheet, View, Text, Image, Animated} from 'react-native';
import React from 'react';

const Tabs = ({style}) => {
  return (
    <Animated.View horizontal style={[styles.tabs, style]}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          alignSelf: 'center',
        }}>
        <Image source={require('../assets/Group.png')} />
        <Text
          style={{
            textAlign: 'center',
            fontSize: 28,
            marginTop: '5%',
            fontWeight: 'bold',
            color: 'black',
          }}>
          Projects
        </Text>
      </View>
    </Animated.View>
  );
};

export default Tabs;

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
