import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers';
import firebase from 'firebase';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: "AIzaSyBhJWadsNmZqPZS9BqbGsatEqjPAFPHL2I",
      authDomain: "manager-a9df0.firebaseapp.com",
      databaseURL: "https://manager-a9df0.firebaseio.com",
      storageBucket: "manager-a9df0.appspot.com",
      messagingSenderId: "248538028338"
    };
    firebase.initializeApp(config);
  }
  render(){
    return(
      <Provider store={createStore(reducer)}>
        <View>
          <Text>
            Hello!
          </Text>
        </View>
      </Provider>
    );
  };
}
export default App;
