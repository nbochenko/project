/* eslint-disable react/prop-types */
import React from 'react';
import { AsyncStorage } from 'react-native';
import {
  View,
  StatusBar,
  Button,
} from 'react-native';
import styles from '@screens/styles/Styles';
import {
    NavigationParams,
    NavigationScreenProp,
    NavigationState,
  } from 'react-navigation';

interface Props {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

class SignOut extends React.Component<Props> {
  static navigationOptions = {
    title: 'Lots of features here',
  };

  render() {
    return (
      <View style={styles.container}>
        <Button title="I'm done, sign me out" onPress={this._signOutAsync} />
        <StatusBar barStyle="default" />
      </View>
    );
  }

  _signOutAsync = async () => {
    await AsyncStorage.clear();
    setTimeout(() => {
      this.props.navigation.navigate('Auth');
    }, 2000);
  };
}

export default SignOut;