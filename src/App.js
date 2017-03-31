import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducer from './reducers';
import firebase from 'firebase';
import Router from './Router';

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
    const store = createStore(reducer, {}, applyMiddleware(ReduxThunk));
    return(
      <Provider store={store}>
        <Router />
      </Provider>
    );
  };
}
export default App;
