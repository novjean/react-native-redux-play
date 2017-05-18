import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyDqLm_GPTgqbV3gkkeWiPbFcva3IA7Bg5Q',
      authDomain: 'manager-3ea6e.firebaseapp.com',
      databaseURL: 'https://manager-3ea6e.firebaseio.com',
      projectId: 'manager-3ea6e',
      storageBucket: 'manager-3ea6e.appspot.com',
      messagingSenderId: '935471909440'
    };
    firebase.initializeApp(config);
  }
  render() {
    //second argument is any initial state we might want to pass to Redux apps
    //THird argument is store enhancers
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    //createStore expects a default reducer atlest
    return (
      <Provider store={store}>
        <LoginForm />
      </Provider>
    );
  }
}

export default App;
