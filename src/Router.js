import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import HomePage from './components/HomePage';
import ForgotCredentials from './components/ForgotCredentials';
import SignUpPage from './components/SignUpPage';

const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 60 }}>
      <Scene key="auth" >
        <Scene
          key="login"
          hideNavBar={false}
          component={LoginForm}
          title="Virtual Doorman"
          initial
          navigationBarStyle={{ backgroundColor: '#A40234' }}
          titleStyle={styles.titleStyle}
        />
        <Scene
          key="forgotCreds"
          component={ForgotCredentials}
          title="Forgot Credentials"
          navigationBarStyle={{ backgroundColor: '#A40234' }}
          titleStyle={styles.titleStyle}
          onBack={() => Actions.login({ type: 'reset' })} //Not resolved yet
        />
        <Scene
          key="signUp"
          component={SignUpPage}
          title="Sign Up"
          navigationBarStyle={{ backgroundColor: '#A40234' }}
          titleStyle={styles.titleStyle}
          onBack={() => Actions.login({ type: 'reset' })} //Not resolved
        />
      </Scene>

      <Scene key="main">
        <Scene
          key="homePage"
          component={HomePage}
          title="Home"
          rightTitle="Logout"
          navigationBarStyle={{ backgroundColor: '#A40234' }}
          titleStyle={styles.titleStyle}
          onRight={() => Actions.auth({ type: 'reset' })}
        />
      </Scene>
    </Router>
  );
};

// Styling
const styles = {
  titleStyle: {
    color: 'white',
    fontSize: 23,
    fontFamily: 'arial',
    fontWeight: 'bold'
  }
};

export default RouterComponent;
