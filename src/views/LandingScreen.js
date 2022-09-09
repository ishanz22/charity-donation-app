import React, {Component} from 'react';
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

const IMAGE_HEIGHT = 200;

class LandingScreen extends Component {
  statusBarHeight = 0;
  tabsScroll = new Animated.Value(0);

  constructor() {
    super();

    this.tabsTop = this.tabsScroll.interpolate({
      inputRange: [30, IMAGE_HEIGHT],
      outputRange: [IMAGE_HEIGHT + this.statusBarHeight, this.statusBarHeight],
      extrapolateLeft: 'extend',
      extrapolateRight: 'clamp',
    });
  }

  render() {
    return (
        <>
          <StatusBar barStyle="dark-content" />
          <SafeAreaView style={styles.container}>
            <ScrollView
                contentInsetAdjustmentBehavior="automatic"
                style={styles.scrollView}
                scrollEventThrottle={16}
                onScroll={Animated.event([
                  {
                    nativeEvent: {
                      contentOffset: {
                        y: this.tabsScroll,
                      },
                    },
                  },
                ])}>
              <Header />
              <View style={styles.body}>
                <Content
                    title="Step One"
                    description="Build school Wellawaya Sri Lanka "
                    amount="$ 8900"
                />
                <Content
                    title="Step Two"
                    description="Build school Colombo at Sri Lanka "
                    amount="$ 6900"
                />
                <Content
                    title="Step Three"
                    description="Build school Kandy Sri Lanka "
                    amount="$ 4900"
                />
                <Content
                    title="Step Four"
                    description="Build school Kurunegala Sri Lanka "
                    amount="$ 5600"
                />
                <Content
                    title="Step Five"
                    description="Build school Dehiwala Sri Lanka "
                    amount="$ 1900"
                />
                <Content
                    title="Step Six"
                    description="Build school Panadura Sri Lanka "
                    amount="$ 2900"
                />
                <Content
                    title="Step Seven"
                    description="Build school Kalutare Sri Lanka "
                    amount="$ 5000"
                />
              </View>
            </ScrollView>
            <Tabs style={{transform: [{translateY: this.tabsTop}]}} />
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
    alignSelf: 'center',
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
