import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import HomePage from './components/HomePage';
import ForgotCredentials from './components/ForgotCredentials';
import SignUpPage from './components/SignUpPage';

const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 65 }}>
      <Scene key="auth" >
        <Scene
          key="login"
          hideNavBar={true}
          component={LoginForm}
          title="Virtual Doorman"
          initial
          //  navigationBarStyle={{ backgroundColor: 'transparent' }}
          //  titleWrapperStyle={styles.navBarStyle}
          //  titleStyle={{ backgroundColor: "#A40234", height: 30 }}
        />
        <Scene
          key="forgotCreds"
          component={ForgotCredentials}
          title="Forgot Credentials"
          onBack={() => Actions.login({ type: 'reset' })} //Not resolved yet
        />
        <Scene
          key="signUp"
          component={SignUpPage}
          title="Sign Up"
          // showNavigationBar={false}
          onBack={() => Actions.login({ type: 'reset' })} //Not resolved
        />
      </Scene>

      <Scene key="main">
        <Scene
          key="homePage"
          component={HomePage}
          title="Home"
          rightTitle="Logout"
          onRight={() => Actions.auth({ type: 'reset' })}
        />
      </Scene>
    </Router>
  );
};

//Styling
// const styles = {
//   navBarStyle: {
//     backgroundColor: '#A40234',
//   }
// };

export default RouterComponent;
