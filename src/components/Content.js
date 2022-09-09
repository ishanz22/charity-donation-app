import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import Slider from '@react-native-community/slider';
import Button from '../components/Button';
const Content = ({title, description, amount}) => (
    <View style={[styles.sectionContainer]}>
        {/* <Text style={styles.sectionTitle}>{title}</Text> */}
        <View style={{alignItems: 'center'}}>
            <Image
                style={{
                    alignItems: 'center',
                    width: '100%',
                    borderRadius: 10,
                    marginTop: '6%',
                }}
                source={require('../assets/Frame.png')}
            />
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
        <Button />
        <Text>{' '}</Text>
    </View>
);

export default Content;

const styles = StyleSheet.create({
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
        marginHorizontal: '5.5%',
        shadowOpacity: 0.5,
        shadowRadius: 12.35,
        borderWidth: 1,

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
    sectionAmount: {
        fontSize: 22,

        color: 'black',
        fontWeight: '700',
    },
    highlight: {
        fontWeight: '700',
    },
});
