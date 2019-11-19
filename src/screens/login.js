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
  Image
} from 'react-native';
import { connect } from 'react-redux';
import { loginUser } from '../store/actions';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      password: ''
    };
  }

  render() {
    const { userName, password } = this.state;
    return (
      <SafeAreaView>
        <View style={styles.parentWrapper}>
          <Image
            source={require('../../assets/background.png')}
            style={{
              position: 'absolute',
              flex: 1,
              zIndex: -1
            }}
            resizeMode={'center'}

            //   height={45}
            //   width={45}
          />
          <View style={styles.LoginCard}>
            <View style={styles.addDetailWrapper}>
              <Text style={styles.labelText}>USERNAME OR EMAIL</Text>
              <TextInput
                value={userName}
                onChangeText={value => this.setState({ userName: value })}
                placeholder={'example@email.com'}
                style={styles.textInputWrapper}
              />
              <View style={styles.inputLine} />
            </View>
            <View style={styles.addDetailWrapper}>
              <Text style={styles.labelText}>PASSWORD</Text>
              <TextInput
                value={password}
                placeholder={'********'}
                style={styles.textInputWrapper}
                onChangeText={value => this.setState({ password: value })}
              />
              <View style={styles.inputLine} />
            </View>
            <Text
              style={[
                styles.labelText,
                { fontSize: 10, alignSelf: 'center', marginTop: getHeight(20) }
              ]}
            >
              FORGOT YOUR PASSWORD?{' '}
            </Text>
            <TouchableOpacity onPress={this.handleOnButtonClick}>
              <View style={styles.loginButton}>
                <Text style={styles.buttonText}>LOGIN</Text>
              </View>
            </TouchableOpacity>
            <View style={styles.connectWithWrapper}>
              <View style={styles.lineView} />
              <Text style={{ fontSize: 10, color: '#737273' }}>
                {' '}
                OR CONNECT WITH{' '}
              </Text>
              <View style={styles.lineView} />
            </View>
            <View style={styles.signMethods}>
              <TouchableOpacity>
                <Image
                  source={require('../../assets/facebook.png')}
                  style={{ height: 45, width: 45 }}

                  //   height={45}
                  //   width={45}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image
                  source={require('../../assets/google.png')}
                  style={{ height: 45, width: 45, marginLeft: 10 }}
                  //   height={45}
                  //   wid`th={45}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </SafeAreaView>
    );
  }

  handleOnButtonClick = () => {
    const { navigation } = this.props;
    // navigation.navigate('RestaurantList');
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

// const mapDispatchToProps = dispatch => {
//     return {
//       addItem: () => {
//         dispatch(addItem())
//       }
//     };
//   };

export default connect(null, mapActionToProps)(Login);

const styles = StyleSheet.create({
  parentWrapper: {
    height: dimensionScreen.screenHeight,
    width: dimensionScreen.screenWidth,
    // flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center'
  },
  LoginCard: {
    height: getHeight(417),
    width: getWidth(319),
    backgroundColor: AppColors.white,
    borderRadius: 5,
    shadowColor: 'rgba(0,0,0,0.50)',
    shadowRadius: 4,
    paddingHorizontal: getWidth(20),
    elevation: 8,
    justifyContent: 'flex-end',
    paddingBottom: getHeight(20)
  },
  labelText: {
    color: AppColors.labelColor,
    fontSize: 8
    // fontFamily: 'OpenSans',
  },
  textInputWrapper: {
    fontSize: 18,
    paddingVertical: getHeight(3)
    // fontFamily: 'OpenSans',
  },
  addDetailWrapper: {
    height: getHeight(43),
    marginTop: getHeight(10)
  },
  loginButton: {
    height: getHeight(45),
    width: getWidth(180),
    borderRadius: getHeight(23),
    backgroundColor: AppColors.buttonColor,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: getHeight(20)
  },
  buttonText: {
    color: AppColors.white,
    fontSize: 14
  },
  connectWithWrapper: {
    marginTop: getHeight(39),
    alignSelf: 'center',
    flexDirection: 'row',
    height: getHeight(15),
    paddingHorizontal: getWidth(20),
    alignItems: 'center',
    justifyContent: 'center'
  },
  signMethods: {
    marginTop: getHeight(15),
    alignSelf: 'center',
    flexDirection: 'row',
    height: getHeight(50),
    paddingHorizontal: getWidth(20),
    alignItems: 'center'
    // justifyContent: 'space-evenly',
  },
  lineView: {
    height: 1,
    // widthz: 100,
    flex: 1,
    backgroundColor: '#CCC9C9'
  },
  inputLine: {
    height: 1,
    // widthz: 100,
    backgroundColor: '#B6B6B5'
  }
});
