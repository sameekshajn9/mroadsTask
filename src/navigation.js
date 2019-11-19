import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Login from './screens/login';
import RestaurantList from './screens/restaurantsList';
import RestaurantDetails from './screens/restaurantDetails';
import {
  createReduxContainer,
  createReactNavigationReduxMiddleware,
  createNavigationReducer
} from 'react-navigation-redux-helpers';
import { connect } from 'react-redux';

const MainRoutes = {
  RestaurantList: RestaurantList,
  details: RestaurantDetails
};

const AuthRoutes = {
  login: Login
};

const mainNavigation = createStackNavigator(MainRoutes, {
  initialRouteName: 'RestaurantList',
  headerMode: 'none'
});

const authNavigation = createStackNavigator(AuthRoutes, {
  initialRouteName: 'login',
  headerMode: 'none'
});

const navigationRoutes = createSwitchNavigator(
  {
    Main: mainNavigation,
    Auth: authNavigation
  },
  {
    initialRouteName: 'Auth'
  }
);

// export const NavigationApp = createAppContainer(navigationRoutes);
export const navReducer = createNavigationReducer(navigationRoutes);
export const navMiddleware = createReactNavigationReduxMiddleware(
  state => state.nav,
  'root'
);
const AppWithNavigationState = createReduxContainer(navigationRoutes, 'root');

class NavigationComponent extends React.Component {
  render() {
    const { nav, dispatch, isConnected } = this.props;

    return <AppWithNavigationState state={nav} dispatch={dispatch} />;
  }
}

const mapStateToProps = state => ({
  nav: state.nav
});

export default connect(mapStateToProps)(NavigationComponent);
