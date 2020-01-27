import { createSwitchNavigator } from 'react-navigation';

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