import React, {Component} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const DoneButton = () => {
  return (
    <TouchableOpacity >
    <View style={styles.buttonLogin}>
      <Text style={{color: 'white', fontWeight: 'bold'}}>Done</Text>
    </View>
  </TouchableOpacity>
  )
}

export default DoneButton;

const styles = StyleSheet.create({
  buttonLogin: {
   
    paddingVertical: '4%',
    borderWidth:1,
    borderColor:'white',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor:'#AF93FF',
   
  },
});