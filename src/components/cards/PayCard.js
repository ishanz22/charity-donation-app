import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import Slider from '@react-native-community/slider';
import PayButton from '../../components/PayButton';
import RadioButtons from '../../components/RadioButtons';


const PayCard = () => {
  return (
    <View style={[styles.sectionContainer]}>
    <TouchableOpacity>
    <View
      style={styles.closeButton}>
      <Image
        style={{alignSelf: 'center', width: 22, height: 22}}
        source={require('../../assets/close.png')}
      />
    </View>
    </TouchableOpacity>
    {/* <Text style={styles.sectionTitle}>{title}</Text> */}
    <View style={{alignItems: 'center'}}></View>

    <Text style={styles.sectionSelectAmount}>
      Select the amount that you want to donate
    </Text>

      <RadioButtons/>
  

    <PayButton />
    <Text> </Text>
  </View>
  )
}

export default PayCard;

const styles = StyleSheet.create({
    sectionContainer: {
      marginTop: 32,
      paddingHorizontal: 24,
      marginHorizontal: '5.5%',
  
      shadowRadius: 12.35,
  

  
      elevation: 6,
      borderRadius: 10,
    },
    sectionTitle: {
      fontSize: 24,
      fontWeight: '600',
      color: Colors.black,
    },
    sectionDescription: {
      marginTop: 8,
      fontSize: 22.5,
  
      color: 'black',
      fontWeight: '700',
    },
    sectionSelectAmount: {
      marginTop: 8,
      fontSize: 22.5,
      width: '90%',
      color: 'black',
      fontWeight: '700',
    },
    sectionAmount: {
      fontSize: 22,
  
      color: 'black',
      fontWeight: '700',
    },
    highlight: {
      fontWeight: '700',
    },
    closeButton:{
      backgroundColor: '#E8E8E8',
      alignSelf: 'flex-end',
      width: 30,
      height: 30,
      borderRadius: 20,
      justifyContent: 'center',
      marginTop: '6%',
    }
  });