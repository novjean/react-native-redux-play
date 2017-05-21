import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router.js';

class App extends Component {

  render() {
    //second argument is any initial state we might want to pass to Redux apps
    //THird argument is store enhancers
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    //createStore expects a default reducer atlest
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
