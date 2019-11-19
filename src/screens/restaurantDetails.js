import React, { Component } from 'react';
import { dimensionScreen, AppColors } from '../theme';
import {
  SafeAreaView,
  View,
  Dimensions,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  Image
} from 'react-native';
import { connect } from 'react-redux';
import { loginUser } from '../store/actions';
import Header from './header';

class RestaurantDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      password: ''
    };
  }

  renderRestaurant = () => {
    const { navigation } = this.props;
    const item = navigation.getParam('item');

    return (
      <View style={styles.detailView}>
        <View
          style={[
            styles.typeView,
            { backgroundColor: item.supportsCallServer ? 'white' : 'grey' }
          ]}
        >
          <Image
            source={require('../../assets/callServer.png')}
            style={{ width: 55, height: 55 }}
          />
          <Text style={styles.typeText}>{'Call Server'}</Text>
        </View>
        <View
          style={[
            styles.typeView,
            { backgroundColor: item.supportsOrder ? 'white' : 'grey' }
          ]}
        >
          <Image
            source={require('../../assets/order.png')}
            style={{ width: 55, height: 55 }}
          />
          <Text style={styles.typeText}>{'Order'}</Text>
        </View>
        <View
          style={[
            styles.typeView,
            { backgroundColor: item.supportsPayment ? 'white' : 'grey' }
          ]}
        >
          <Image
            source={require('../../assets/payment1.png')}
            style={{ width: 55, height: 55 }}
          />
          <Text style={styles.typeText}>{'Payment'}</Text>
        </View>
      </View>
    );
  };

  render() {
    const { userName, password } = this.state;
    const { navigation } = this.props;
    const menuIcon = require('../../assets/menuIcon.png');
    const item = navigation.getParam('item');
    return (
      <SafeAreaView>
        <View style={styles.parentWrapper}>
          <Header
            title={item.name}
            navigation={navigation}
            icon={'menu'}
            tables={item.table}
          />
          <Image
            source={{ url: item.imageUrl }}
            style={{
              width: dimensionScreen.screenWidth,
              flex: 3,
              resizeMode: 'cover'
            }}
          />
          <View style={{ flex: 4 }}>{this.renderRestaurant()}</View>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'flex-end',
              alignContent: 'center'
            }}
          >
            <Image
              source={require('../../assets/leaveTable.png')}
              style={{ width: 18, height: 20 }}
            />
            <Text
              style={{
                fontSize: 14,
                fontWeight: '600',
                marginLeft: 10,
                marginRight: 20
              }}
            >
              Leave Table
            </Text>
          </View>
        </View>
      </SafeAreaView>
    );
  }

  handleOnButtonClick = () => {
    const { userName, password } = this.state;
    const { loginUserAction } = this.props;
    loginUserAction({ userName, password });
  };
}

const mapActionToProps = dispatch => {
  //   const loginUserAction = payload => dispatch(loginUser(payload));
  return {
    loginUserAction: payload => dispatch(loginUser(payload))
  };
};

export default connect(null, mapActionToProps)(RestaurantDetails);

const styles = StyleSheet.create({
  parentWrapper: {
    height: dimensionScreen.screenHeight,
    width: dimensionScreen.screenWidth,
    // flex: 1,
    backgroundColor: AppColors.red
  },
  restaurantCard: {
    marginTop: 10,
    borderRadius: 5,
    overflow: 'hidden',
    padding: 0,
    shadowColor: 'rgba(0,0,0,0.50)',
    shadowRadius: 4,
    marginHorizontal: 10,
    elevation: 8
    // backgroundColor: 'white'
  },
  detailView: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: 'transparent',
    // shadowColor: 'rgba(0,0,0,0.50)',
    // shadowRadius: 4,
    // borderRadius: 4,
    // elevation: 8,
    justifyContent: 'space-between'
  },
  typeView: {
    shadowColor: 'black',
    shadowRadius: 7,
    borderRadius: 4,
    elevation: 8,
    height: 95,
    width: 95,
    borderColor: 'grey',
    borderWidth: 1,
    // paddingHorizontal: 20,
    // backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center'
  },
  typeText: {
    marginTop: 10,
    fontSize: 13,
    fontWeight: 'bold',
    color: '#474747'
  }
});
