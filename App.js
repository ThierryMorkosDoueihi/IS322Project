/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import {GoogleSignin, GoogleSigninButton} from 'react-native-google-signin';


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {

  componentDidMount()
  {

    GoogleSignin.hasPlayServices({ autoResolve: true }).then(() => {
  // play services are available. can now configure library
})
.catch((err) => {
console.log("Play services error", err.code, err.message);
})
GoogleSignin.configure({
  scopes: ["https://www.googleapis.com/auth/drive.readonly"], // what API you want to access on behalf of the user, default is email and profile
//  iosClientId: <FROM DEVELOPER CONSOLE>, // only for iOS
  webClientId: "63644637716-46p2tpovlioutmvvoq84912t15p82ird.apps.googleusercontent.com", // client ID of type WEB for your server (needed to verify user ID and offline access)
//  offlineAccess: true // if you want to access Google API on behalf of the user FROM YOUR SERVER
//  hostedDomain: '' // specifies a hosted domain restriction
//  forceConsentPrompt: true // [Android] if you want to show the authorization prompt at each login
//  accountName: '' // [Android] specifies an account name on the device that should be used
})
.then(() => {
  // you can now call currentUserAsync()
});
  }
  handle()
  {
        GoogleSignin.signIn()
    .then((user) => {
      console.log(user);
      this.setState({user: user});
    })
    .catch((err) => {
      console.log('WRONG SIGNIN', err);
    })
    .done();
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to the Student Planner App!! :D
        </Text>
        <Text style={styles.instructions}>
          To get started, edit App.js
        </Text>
        <Text style={styles.instructions}>
          {instructions}
        </Text>
          <GoogleSigninButton
      style={{width: 48, height: 48}}
      size={GoogleSigninButton.Size.Icon}
      color={GoogleSigninButton.Color.Dark}
      onPress={this.handle.bind(this)}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
