import React, { Component } from 'react';
import { ListView } from 'react-native';
import { connect } from 'react-redux';
import MenuItem from './homepage/MenuItem';
import { Card } from './common';
import {

} from '../actions';

class HomePage extends Component {
  componentWillMount() {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(this.props.libraries);
  }
  renderRow(library) {
    return (
      <Card>
        <MenuItem library={library} />
      </Card>
    );
  }
  render() {
    return (
      <Card style={{ flex: 1 }}>
        <ListView
          dataSource={this.dataSource}
          renderRow={this.renderRow}
        />
      </Card>
    );
  }
}

const mapStateToProps = state => {
  return { libraries: state.menuItems };
};

export default connect(mapStateToProps)(HomePage);
