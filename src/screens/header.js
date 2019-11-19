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
import { Body, Left, Right, Tab } from 'native-base';

class Header extends Component {
  render() {
    const { title, navigation, icon = '', tables = 0 } = this.props;
    // const backIcon = require('../../assets/IconBack1.png');
    // const menuIcon = require('../../assets/menuIcon.png');
    return (
      <View style={styles.parentWrapper}>
        <Left>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              source={
                icon === 'menu'
                  ? require('../../assets/menuIcon.png')
                  : require('../../assets/IconBack1.png')
              }
              //   style={{
              //     zIndex: -1
              //   }}
              resizeMode={'center'}
              style={styles.button}
              //   height={45}
              //   width={45}
            />
          </TouchableOpacity>
        </Left>
        <Body>
          <Text
            style={{ fontSize: 12, fontWeight: '600', color: AppColors.white }}
          >
            {title}
          </Text>
        </Body>
        <Right>
          {icon === 'menu' && (
            <Text
              style={{
                fontSize: 18,
                fontWeight: '600',
                color: AppColors.white
              }}
            >
              Table{tables}
            </Text>
          )}
        </Right>
        {/* <Image
          source={require('../../assets/background.png')}
          style={{
            position: 'absolute',
            flex: 1,
            zIndex: -1
          }}
          resizeMode={'center'}

          //   height={45}
          //   width={45}
        /> */}
      </View>
    );
  }
}

export default connect(null, null)(Header);

const styles = StyleSheet.create({
  parentWrapper: {
    height: Platform.OS === 'ios' ? 60 : 50,
    width: dimensionScreen.screenWidth,
    flexDirection: 'row',
    paddingHorizontal: 10,
    // flex: 1,
    backgroundColor: AppColors.labelColor,
    marginTop: 0
  },
  button: {
    height: 50,
    width: 12
  }
});
