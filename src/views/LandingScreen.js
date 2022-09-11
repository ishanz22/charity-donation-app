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
import axios from 'axios';


const IMAGE_HEIGHT = 200;
const contentArr = [
  {
    img: require('../assets/frame.webp'),
    title: 'Step One',
    description: 'Build school Wellawaya Sri Lanka ',
    amount: '$ 8900',
  },
  {
    img: require('../assets/frame2.webp'),
    title: 'Step Two',
    description: 'Build school Wellawaya Sri Lanka ',
    amount: '$ 9000',
  },
  {
    img: {
      uri: 'https://images.pexels.com/photos/1172253/pexels-photo-1172253.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    },

    title: 'Step Three',
    description: 'Build school Wellawaya Sri Lanka ',
    amount: '$ 7500',
  },
  {
    img: require('../assets/background.webp'),
    title: 'Step Three',
    description: 'Build school Wellawaya Sri Lanka ',
    amount: '$ 9900',
  },
];
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

  componentDidMount(){
    console.log("start");
    axios
        .get(
            "https://07fplmn2nd.execute-api.us-west-2.amazonaws.com/dev/fundraising?pagination=0&limit=1",
            {
              headers: {
                "x-api-key": "RHtTMSSIsm4ecSAfaHq4N7HpaMOJBv5utDDhp1ch",
              },
            }
        )
        .then(function (response) {
          console.log(response.data.data);
        })
        .catch(function (error) {
          console.log(error);
        });
  }

  render() {
    return (
        <>
          <StatusBar barStyle="light-content" />
          <SafeAreaView style={styles.container}>
            <ScrollView
                showsVerticalScrollIndicator={false}
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
                {contentArr.map((el, i) => (
                    <Content
                        key={i}
                        img={el.img}
                        title={el.title}
                        description={el.description}
                        amount={el.amount}
                    />
                ))}

                {/* <Content
                img={require('../assets/Frame.png')}
                title="Step Two"
                description="Build school Colombo at Sri Lanka "
                amount="$ 6900"
              />
              <Content
               img={require('../assets/Frame.png')}
                title="Step Three"
                description="Build school Kandy Sri Lanka "
                amount="$ 4900"
              />
              <Content
                img={require('../assets/Frame.png')}
                title="Step Four"
                description="Build school Kurunegala Sri Lanka "
                amount="$ 5600"
              />
              <Content
               img={require('../assets/Frame.png')}
                title="Step Five"
                description="Build school Dehiwala Sri Lanka "
                amount="$ 1900"
              />
              <Content
              img={require('../assets/Frame.png')}
                title="Step Six"
                description="Build school Panadura Sri Lanka "
                amount="$ 2900"
              />
              <Content
                img={require('../assets/Frame.png')}
                title="Step Seven"
                description="Build school Kalutare Sri Lanka "
                amount="$ 5000"
              /> */}
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
    paddingBottom: 40,
  },
});

export default LandingScreen;
