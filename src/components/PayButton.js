import React, {Component} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const PayButton = () => {
  return (
    <TouchableOpacity >
    <View style={styles.buttonLogin}>
      <Text style={{color: 'white', fontWeight: 'bold'}}>Pay Now</Text>
    </View>
  </TouchableOpacity>
  )
}

export default PayButton;

const styles = StyleSheet.create({
  buttonLogin: {
   
    paddingVertical: '4%',
    borderWidth:1,
    borderColor:'white',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor:'#F8C16F',
   
  },
});