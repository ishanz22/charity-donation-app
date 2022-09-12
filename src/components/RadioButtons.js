import {View, Text, StyleSheet} from 'react-native';
import React, { useState,useEffect } from 'react';

import {RadioButton} from 'react-native-paper';
import axios from 'axios';

const RadioButtons = () => {
  const [amountData, setamountData] = useState([])
  useEffect(() => {
    axios
    .get(
      'https://07fplmn2nd.execute-api.us-west-2.amazonaws.com/dev/amounts',
      {
        headers: {
          "x-api-key": "RHtTMSSIsm4ecSAfaHq4N7HpaMOJBv5utDDhp1ch",
        },
      }
    )
    .then((res)=>{
      setamountData(res.data.data)
    })
 
    .catch(function (error) {
      console.log(error);
    });
  }, [])
  
  const [checked, setChecked] = React.useState(10);
  return (
    
    <View>
      {amountData.map((el,i)=>
        <View key={i} style={{flexDirection: 'row'}}>
        <RadioButton
          value={el}
          status={checked == el ? 'checked' : 'unchecked'}
          onPress={() => setChecked(el)}
        />
        <Text style={styles.amount}> ${el}</Text>
      </View>
      )}
      <Text>{' '}</Text>
    </View>
  );
};

export default RadioButtons;

const styles = StyleSheet.create({
  amount: {
    color: '#ABADB5',
    paddingTop: '2%',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
