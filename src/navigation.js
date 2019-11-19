import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Login from './screens/login';

const MainRoutes = {};

const AuthRoutes = {
  login: Login,
};

const appRoutes = createStackNavigator(AuthRoutes, {
  //   initialRouteName: 'Login',
  headerMode: 'none',
});

export const NavigationApp = createAppContainer(appRoutes);
