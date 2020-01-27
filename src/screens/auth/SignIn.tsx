/* eslint-disable react/prop-types */
import React from 'react';
import { AsyncStorage } from 'react-native';
import {
  StyleSheet,
  View,
  Button,
} from 'react-native';
import styles from '@screens/styles/Styles';
import {
    NavigationParams,
    NavigationScreenProp,
    NavigationState,
  } from 'react-navigation';
import Login from '@components/organisms/login/Login'

interface Props {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

class SignIn extends React.Component<Props> {
  static navigationOptions = {
    title: 'Please sign in',
  };

  render() {
    return (
      <View style={styles.container}>
        <Button title="Sign in!" onPress={this._signInAsync} />
        <Login></Login>
      </View>
    );
  }

  _signInAsync = async () => {
    await AsyncStorage.setItem('userToken', 'abc');
    this.props.navigation.navigate('App');
  };
}

export default SignIn;