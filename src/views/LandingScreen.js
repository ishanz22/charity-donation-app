import React, { Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  StatusBar,
  Animated,
} from 'react-native';

import Tabs from '../components/Tabs';
import Header from '../components/Header';
import Content from '../components/Content';


const IMAGE_HEIGHT = 200

class LandingScreen extends Component {

  statusBarHeight = 0
  tabsScroll = new Animated.Value(0)

  constructor() {
    super()

    this.tabsTop = this.tabsScroll.interpolate({
      inputRange: [30, IMAGE_HEIGHT],
      outputRange: [IMAGE_HEIGHT + this.statusBarHeight, this.statusBarHeight],
      extrapolateLeft: 'extend',
      extrapolateRight: 'clamp',
    })
  }


  render() {
    return (
        <>
          <StatusBar barStyle="dark-content"/>
          <SafeAreaView style={styles.container}>
            <ScrollView
                contentInsetAdjustmentBehavior="automatic"
                style={styles.scrollView}
                scrollEventThrottle={16}
                onScroll={
                  Animated.event(
                      [{
                        nativeEvent: {
                          contentOffset: {
                            y: this.tabsScroll
                          }
                        }
                      }]
                  )
                }
            >
              <Header/>
              <View style={styles.body}>
                <Content title='Step One'/>
                <Content title='Step Two'/>
                <Content title='Step Three'/>
                <Content title='Step Four'/>
                <Content title='Step Five'/>
                <Content title='Step Six'/>
                <Content title='Step Seven'/>
              </View>
            </ScrollView>
            <Tabs style={{transform: [{translateY: this.tabsTop}]}}/>
          </SafeAreaView>
        </>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  scrollView: {},
  image: {
    height: IMAGE_HEIGHT,
    width: '88%',
    alignSelf: 'center'
  },

  tabText: {
    fontSize: 0,
    fontWeight: 'bold',
    paddingHorizontal: 10,
    paddingVertical: 20,
    color: 'black',
    textAlign: 'center',

  },

  body: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 60,
  },


});

export default LandingScreen;
