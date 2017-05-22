import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import { usernameChanged,
  passwordChanged,
  loginUser,
  forgotCredentials
  } from '../actions';
import { Card, CardSection, Input, Button, Spinner } from './common';

class LoginForm extends Component {
  onUsernameChange(text) {
    this.props.usernameChanged(text);
  }
  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

  onLoginPress() {
    const { username, password } = this.props;

    this.props.loginUser({ username, password });
  }

  onSignUpPress() {

  }

  onForgotCredentialsPress() {
    this.props.forgotCredentials();
  }

  renderLoginButton() {
    if (this.props.loading) {
      return <Spinner size="large" />;
    }
    return (
      <Button onPress={this.onLoginPress.bind(this)}>
        Login
      </Button>
    );
  }

  renderSignUpButton() {
    if (this.props.loading) {
      return <Spinner size="large" />;
    }
    return (
      <Button onPress={this.onSignUpPress.bind(this)}>
        Sign Up
      </Button>
    );
  }

  renderForgotCredentialsButton() {
    if (this.props.loading) {
      return <Spinner size="large" />;
    }
    return (
      <Button onPress={this.onForgotCredentialsPress.bind(this)}>
        Forgot Credentials
      </Button>
    );
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Username"
            placeholder="johndoe"
            onChangeText={this.onUsernameChange.bind(this)}
            value={this.props.username}
          />
        </CardSection>

        <CardSection>
          <Input
            secureTextEntry
            label="Password"
            placeholder="password"
            onChangeText={this.onPasswordChange.bind(this)}
            value={this.props.password}
          />
        </CardSection>

        <Text style={styles.errorTextStyle}>
          {this.props.error}
        </Text>

        <CardSection>
          {this.renderLoginButton()}
        </CardSection>

        <CardSection>
          {this.renderSignUpButton()}
        </CardSection>

        <CardSection>
          {this.renderForgotCredentialsButton()}
        </CardSection>
      </Card>
    );
  }
}

//Styling
const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
};

//Mapping of state
const mapStateToProps = ({ auth }) => {
  const { username, password, error, loading } = auth;

  return { username, password, error, loading };
};

export default connect(mapStateToProps, {
  usernameChanged, passwordChanged, loginUser, forgotCredentials
})(LoginForm);
