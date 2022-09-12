import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Router from './src/configurations/router';
import SplashScreen from 'react-native-splash-screen'

const App = () => {

    useEffect(()=>{
        setTimeout(()=>{
            SplashScreen.hide();
        },2000)
    },[])


    return (

        <NavigationContainer>
            <Router />
        </NavigationContainer>


    )
}

export default App;
