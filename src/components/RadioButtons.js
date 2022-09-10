import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {RadioButton} from 'react-native-paper';
const RadioButtons = () => {
  const [checked, setChecked] = React.useState('first');
  return (
    <View>
      <View style={{flexDirection: 'row'}}>
        <RadioButton
          value="first"
          status={checked === 'first' ? 'checked' : 'unchecked'}
          onPress={() => setChecked('first')}
        />
        <Text style={styles.amount}> $10</Text>
      </View>

      <View style={{flexDirection: 'row'}}>
        <RadioButton
          value="second"
          status={checked === 'second' ? 'checked' : 'unchecked'}
          onPress={() => setChecked('second')}
        />
        <Text style={styles.amount}> $50</Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <RadioButton
          value="second"
          status={checked === 'third' ? 'checked' : 'unchecked'}
          onPress={() => setChecked('third')}
        />
        <Text style={styles.amount}> $100</Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <RadioButton
          value="fourth"
          status={checked === 'fourth' ? 'checked' : 'unchecked'}
          onPress={() => setChecked('fourth')}
        />
        <Text style={styles.amount}> $500</Text>
      </View>

      <View style={{flexDirection: 'row'}}>
        <RadioButton
          value="fifth"
          status={checked === 'fifth' ? 'checked' : 'unchecked'}
          onPress={() => setChecked('fifth')}
        />
        <Text style={styles.amount}> $1000</Text>
      </View>
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
