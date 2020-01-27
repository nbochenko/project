import { createSwitchNavigator } from 'react-navigation';

import { Loading } from '../screens';
import AuthStack from './AuthStack';

const RootStack = createSwitchNavigator(
  {
    Auth: AuthStack,
  },
  {
    initialRouteName: 'Auth',
  }
);

export default RootStack;