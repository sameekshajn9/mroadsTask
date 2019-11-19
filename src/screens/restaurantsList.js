import React, { Component } from 'react';
import { dimensionScreen, AppColors, getHeight, getWidth } from '../theme';
import {
  SafeAreaView,
  View,
  Dimensions,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList
} from 'react-native';
import { connect } from 'react-redux';
import { loginUser } from '../store/actions';
import Header from './header';
import data from '../../public/restaurants.json';

class RestaurantList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      password: ''
    };
  }

  componentDidMount() {
    console.log(data, 'data');
  }

  renderRestaurant = item => {
    const { navigation } = this.props;
    let cuisines = '';
    item.cuisines.forEach(element => {
      cuisines = cuisines.concat(`${element},`);
    });
    cuisines = cuisines.slice(0, cuisines.length - 1);
    return (
      <View style={styles.restaurantCard}>
        <TouchableOpacity
          onPress={() => navigation.navigate('details', { item })}
        >
          <Image
            source={{ url: item.imageUrl }}
            style={{ height: getHeight(190), width: getWidth(340) }}

            //   height={45}
            //   width={45}
          />
          <View style={styles.detailView}>
            <View>
              <Text>{item.name}</Text>
              <Text>{cuisines}</Text>
            </View>
            <View style={{ alignItems: 'flex-end' }}>
              <Text>{`${item.distance} mi`}</Text>
              {/* <Text>{'Confectionaries'}</Text> */}
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  render() {
    const { userName, password } = this.state;
    const { navigation } = this.props;
    const backIcon = require('../../assets/IconBack1.png');

    return (
      <SafeAreaView>
        <View style={styles.parentWrapper}>
          <Header
            title={'Restaurants'}
            navigation={navigation}
            icon={backIcon}
          />
          <FlatList
            data={data}
            renderItem={({ item }) => this.renderRestaurant(item)}
          />
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

export default connect(null, mapActionToProps)(RestaurantList);

const styles = StyleSheet.create({
  parentWrapper: {
    height: dimensionScreen.screenHeight,
    width: dimensionScreen.screenWidth,
    // flex: 1,
    backgroundColor: AppColors.white
  },
  restaurantCard: {
    marginTop: 10,
    borderRadius: 5,
    // overflow: 'hidden',
    padding: 0,
    shadowColor: '#000',
    shadowRadius: 4,
    marginHorizontal: 10,
    elevation: 8,
    backgroundColor: 'white',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.4,
    // shadowRadius: 0,

    elevation: 0
  },
  detailView: {
    height: getHeight(60),
    // backgroundColor: 'yellow',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 7,
    justifyContent: 'space-between'
  }
});
