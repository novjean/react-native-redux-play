import React, { Component } from 'react';
import { Text } from 'react-native';
import { Card, CardSection } from './common';

class HomePage extends Component {
  render() {
    return (
      <Card>

        <CardSection>
          <Text>Guests/ Companies </Text>
        </CardSection>

        <CardSection>
          <Text>Recent Activity</Text>
        </CardSection>

        <CardSection>
          <Text>Order Access Cards</Text>
        </CardSection>

        <CardSection>
          <Text>Building Contacts</Text>
        </CardSection>

        <CardSection>
          <Text>My Account</Text>
        </CardSection>

        <CardSection>
          <Text>Intercom</Text>
        </CardSection>

      </Card>
    );
  }
}

export default HomePage;
