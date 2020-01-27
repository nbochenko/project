import { createStackNavigator } from 'react-navigation-stack';

import {
  SignIn,
} from '@screens/SignIn';
import { stackOptions } from '../utils';
import { titles } from '../shared';

const AuthStack = createStackNavigator({
  SignIn: {
    screen: SignIn,
    navigationOptions: stackOptions(titles.login),
  },
});

export default AuthStack;