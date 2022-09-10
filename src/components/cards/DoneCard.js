import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {Colors} from 'react-native/Libraries/NewAppScreen';


import {LinearTextGradient} from 'react-native-text-gradient';
const DoneCard = ({onButtonClick}) => {

  function callback(data) {
    onButtonClick(data);
  }
  return (
    <View style={[styles.sectionContainer]}>
      <Image
        style={{alignSelf: 'center'}}
        source={require('../../assets/Success.png')}
        // resizeMode={'center'}
      />
      {/* <Text style={styles.sectionTitle}>{title}</Text> */}
      <View style={{alignItems: 'center'}}></View>
   

      <LinearTextGradient
        u
        style={{fontWeight: 'bold', fontSize: 22,textAlign:'center'}}
        locations={[0, 1]}
        colors={['#AF93FF', '#818BE9']}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}>
            <Text style={{}}>You have successfully made the donation!</Text>
      
      </LinearTextGradient>
      <Text>{' '}</Text>
      <TouchableOpacity onPress={() => callback(1)} >
    <View style={styles.buttonLogin}>
      <Text style={{color: 'white', fontWeight: 'bold'}}>Done</Text>
    </View>
  </TouchableOpacity>
      <Text> </Text>
    </View>
  );
};

export default DoneCard;

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
    borderWidth:1,
    borderColor:'white',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor:'#AF93FF',
   
  },
});
