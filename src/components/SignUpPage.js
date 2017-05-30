import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardSection, CustomInput, Button } from './common';
import { firstnameChanged,
  lastnameChanged,
  emailChanged,
  phoneChanged,
  registerUsernameChanged
} from '../actions';

class SignUpPage extends Component {
  onFirstNameChange(text) {
    this.props.firstnameChanged(text);
  }

  onLastNameChange(text) {
    this.props.lastnameChanged(text);
  }

  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onPhoneChange(text) {
    this.props.phoneChanged(text);
  }

  onRegisterUsernameChange(text) {
    this.props.registerUsernameChanged(text);
  }

  render() {
    return (
      <Card>
        <CardSection>
          <CustomInput
            label="First Name"
            placeholder="Enter your first name"
            onChangeText={this.onFirstNameChange.bind(this)}
            value={this.props.firstname}
          />
        </CardSection>
        <CardSection>
          <CustomInput
            label="Last Name"
            placeholder="Enter your last name"
            onChangeText={this.onLastNameChange.bind(this)}
            value={this.props.lastname}
          />
        </CardSection>
        <CardSection>
          <CustomInput
            label="Email"
            placeholder="youremail@emailaddress.com"
            onChangeText={this.onEmailChange.bind(this)}
            value={this.props.email}
          />
        </CardSection>
        <CardSection>
          <CustomInput
            label="Phone"
            placeholder="(123) 456-7890"
            onChangeText={this.onPhoneChange.bind(this)}
            value={this.props.phone}
          />
        </CardSection>
        <CardSection>
          <CustomInput
            label="Username"
            placeholder="Enter username"
            onChangeText={this.onRegisterUsernameChange.bind(this)}
            value={this.props.username}
          />
        </CardSection>
        <CardSection>
          <CustomInput
            label="Password"
            placeholder="Enter password"
            secureTextEntry
            on
          />
        </CardSection>
        <CardSection style={{ paddingTop: 50 }}>
          <Button>
            {console.log('Continue Clicked')}
          </Button>
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = ({ register }) => {
  const { firstname,
    lastname,
    email,
    phone,
    username
  } = register;

  return { firstname,
    lastname,
    email,
    phone,
    username
  };
};

export default connect(mapStateToProps, {
  firstnameChanged,
  lastnameChanged,
  emailChanged,
  phoneChanged,
  registerUsernameChanged
})(SignUpPage);
