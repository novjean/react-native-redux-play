import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import HomePage from './components/HomePage';
import ForgotCredentials from './components/ForgotCredentials';

const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 65 }}>
      <Scene key="auth" >
        <Scene
          key="login"
          component={LoginForm}
          title="Virtual Doorman"
          initial
        />
        <Scene
          key="forgotCreds"
          component={ForgotCredentials}
          title="Forgot Credentials"
        />
      </Scene>

      <Scene key="main" >
        <Scene
          key="homePage"
          component={HomePage}
          title="Home"
          rightTitle="Logout"
          onRight={() => console.log('Logout!!!')}
        />
      </Scene>
    </Router>
  );
};

export default RouterComponent;
