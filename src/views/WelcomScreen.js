import React, {useEffect} from 'react';
import {View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const WelcomeScreen = () => {
    const navigation = useNavigation();

    useEffect(() => {
        async function getToken() {
            navigation.reset({index: 0, routes: [{name: 'landing'}]});
        }

        getToken();
    }, []);

    return <View/>;
};

export default WelcomeScreen;
