import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import { store } from './store';
import { Provider } from 'react-redux';
// import LoginForm from './components/LoginForm';
var ScrollableTabView = require('react-native-scrollable-tab-view');
import Workouts from './containers/workouts';

class App extends Component {
  state = { loggedIn: null };

  // componentWillMount() {
  //   firebase.initializeApp({
  //     apiKey: 'AIzaSyBtxMY4K6uHxv_2e3GD-FWAD2ACX6lPVRE',
  //     authDomain: 'authentication-70a18.firebaseapp.com',
  //     databaseURL: 'https://authentication-70a18.firebaseio.com',
  //     storageBucket: 'authentication-70a18.appspot.com',
  //     messagingSenderId: '682333809338'
  //   });
  //
  //   firebase.auth().onAuthStateChanged((user) => {
  //     if (user) {
  //       this.setState({ loggedIn: true });
  //     } else {
  //       this.setState({ loggedIn: false });
  //     }
  //   });
  // }

  // renderContent() {
  //   switch (this.state.loggedIn) {
  //     case true:
  //       return (
  //         <Button onPress={() => firebase.auth().signOut()}>
  //           Log Out
  //         </Button>
  //       );
  //     case false:
  //       return <LoginForm />;
  //     default:
  //       return <Spinner size="large" />;
  //   }
  // }

  render() {
    return (
        <Provider store={store}>
            <View style={{flex:1}}>
                <Workouts />
            </View>
            {/* <ScrollableTabView>
                <Header tabLabel="header" />
                <Workouts tabLabel="WorkOut" />
            </ScrollableTabView> */}
        </Provider>
    );
  }
}

export default App;
