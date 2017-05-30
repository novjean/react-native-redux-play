import React, { Component } from 'react';
import {
  Text,
  TouchableWithoutFeedback,
  View,
  ListView,
  LayoutAnimation,
  Platform,
  UIManager
  } from 'react-native';
  import { connect } from 'react-redux';
  import { Card, CardSection, Button } from '../common';
  import { selectLibrary } from '../../actions';

  class MenuItem extends Component {
    componentWillMount() {
      const ds = new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2
      });
      const { library } = this.props;
      console.log(library.submenus);

      this.dataSource = ds.cloneWithRows(library.submenus);
    }
    componentWillUpdate() {
      if (Platform.OS === 'android') {
        UIManager.setLayoutAnimationEnabledExperimental(true);
      }
      LayoutAnimation.spring();
    }
    renderDescription() {
      const { library, expanded } = this.props;
      //Comparing the selectedLibraryId and the library ID
      if (expanded) {
        return (
          <CardSection style={{ backgroundColor: '#F7F7F7' }}>
            <Text style={{ flex: 1 }}>{library.description}</Text>
          </CardSection>
        );
      }
    }

    renderSubMenuItems(submenuItem) {
      return (
        <Card>
          <Button>{submenuItem}</Button>
        </Card>
      );
    }

    rendersubMenu() {
      const { expanded } = this.props;
      if (expanded) {
        return (
          <CardSection>
            <ListView
              dataSource={this.dataSource}
              renderRow={this.renderSubMenuItems}
            />
          </CardSection>
        );
      }
    }

    render() {
      const { titleStyle } = styles;
      const { id, title } = this.props.library;
      return (
        <TouchableWithoutFeedback
          onPress={() => this.props.selectLibrary(id)}
        >
          <View>
            <CardSection style={{ backgroundColor: '#b10239' }}>
              <Text style={titleStyle}>
                {title}
              </Text>
            </CardSection>
            {this.renderDescription()}
            {this.rendersubMenu()}



          </View>
        </TouchableWithoutFeedback>
      );
    }
  }

  const styles = {
    titleStyle: {
      fontSize: 19,
      color: '#F7F7F7',
      paddingLeft: 15
    }
  };

const mapStateToProps = (state, ownProps) => {
  // console.log(state.selectedMenuItem.library);
  const expanded = state.selectedMenuItem === ownProps.library.id;
  return { expanded };
};

export default connect(mapStateToProps, { selectLibrary })(MenuItem);
