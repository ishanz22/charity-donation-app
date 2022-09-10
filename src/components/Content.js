import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React, {Fragment, useState} from 'react';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import Slider from '@react-native-community/slider';


import PayCard from './cards/PayCard';
import DoneCard from './cards/DoneCard';
const Content = ({title, description, amount, img}) => {

  const [currentComponent, setCurrentComponent] = useState(1)

  const onButtonClick = (data) => {
    setCurrentComponent(data)
  };
  return (
    <Fragment>
      {/* <PayCard/> */}
      {/* <DoneCard/>  */}
   
      {currentComponent==1 ? <View style={[styles.sectionContainer]}>
        {/* <Text style={styles.sectionTitle}>{title}</Text> */}
        <View style={{alignItems: 'center'}}>
          <Text> </Text>
          {
            <Image
              style={{
                alignItems: 'center',
                width: '100%',
                borderRadius: 10,
              }}
              source={img}
            />
          }
        </View>

        <Text style={styles.sectionDescription}>{description}</Text>

        <Slider
          style={{width: '100%', height: 33}}
          minimumValue={0}
          maximumValue={10}
          step={3.5}
          maximumTrackTintColor="#C8C8C8"
          minimumTrackTintColor="#FDA06E"
          thumbTintColor="#FDA06E"
        />
        <Text style={styles.sectionAmount}>
          {amount}
          <Text style={{color: '#BEBEBE', fontWeight: '200', fontSize: 17}}>
            {' '}
            Raised
          </Text>
        </Text>
        <TouchableOpacity onPress={()=>onButtonClick(2)}>
          <View style={styles.buttonLogin}>
            <Text style={{color: 'white', fontWeight: 'bold'}}>Donate Now</Text>
          </View>
        </TouchableOpacity>
        <Text> </Text>
      </View> : currentComponent==2 ?<PayCard onButtonClick={onButtonClick}/> : currentComponent==3 ? <DoneCard onButtonClick={onButtonClick}/>   : null}
      
    </Fragment>
  );
};

export default Content;

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
    backgroundColor:'#818BE9',
   
  },
});
