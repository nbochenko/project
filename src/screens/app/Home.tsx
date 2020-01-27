import React from 'react';
import {
  AsyncStorage,
  Button,
  View,
} from 'react-native';

import {
    NavigationParams,
    NavigationScreenProp,
    NavigationState,
  } from 'react-navigation';

  import styles from '@screens/styles/Styles';

interface Props {
    navigation: NavigationScreenProp<NavigationState, NavigationParams>;
  }
  
class Home extends React.Component<Props> {
    static navigationOptions = {
      title: 'Welcome to the app!',
    };
  
    render() {
      return (
        <View style={styles.container}>
          <Button title="Show me more of the app" onPress={this._showMoreApp} />
          <Button title="Actually, sign me out :)" onPress={this._signOutAsync} />
        </View>
      );
    }
  
    _showMoreApp = () => {
      this.props.navigation.navigate('Other');
    };
  
    _signOutAsync = async () => {
      await AsyncStorage.clear();
      this.props.navigation.navigate('Auth');
    };
  }

  export default Home;