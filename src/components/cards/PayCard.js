import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import RadioButtons from '../../components/RadioButtons';

const PayCard = ({onButtonClick}) => {
  function callback(data) {
    onButtonClick(data);
  }

  return (
    <View style={[styles.sectionContainer]}>
      <TouchableOpacity onPress={() => callback(1)}>
        <View style={styles.closeButton}>
          <Image
            style={{alignSelf: 'center', width: 22, height: 22}}
            source={require('../../assets/close.webp')}
          />
        </View>
      </TouchableOpacity>
      <View style={{alignItems: 'center'}}></View>

      <Text style={styles.sectionSelectAmount}>
        Select the amount that you want to donate
      </Text>

      <RadioButtons />

      <TouchableOpacity onPress={() => callback(3)}>
        <View style={styles.buttonLogin}>
          <Text style={{color: 'white', fontWeight: 'bold'}}>Pay Now</Text>
        </View>
      </TouchableOpacity>
      <Text> </Text>
    </View>
  );
};

export default PayCard;

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    borderRadius: 10,
    paddingHorizontal: 24,
    marginHorizontal: '4%',

    shadowRadius: 12.35,
    shadowColor: '#A9A9A9',


    elevation: 6,
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
  closeButton: {
    backgroundColor: '#E8E8E8',
    alignSelf: 'flex-end',
    width: 30,
    height: 30,
    borderRadius: 20,
    justifyContent: 'center',
    marginTop: '6%',
  },
  buttonLogin: {
    paddingVertical: '4%',
    borderWidth: 1,
    borderColor: 'white',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: '#F8C16F',
  },
});
