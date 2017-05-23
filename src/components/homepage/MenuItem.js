import React, { Component } from 'react';
import {
  Text,
  TouchableWithoutFeedback,
  View,
  LayoutAnimation,
  Platform,
  UIManager
  } from 'react-native';
  import { connect } from 'react-redux';
  import { CardSection } from '../common';
  import * as actions from '../../actions';

  class MenuItem extends Component {
    componentWillUpdate() {
      if (Platform.OS === 'android') {
        UIManager.setLayoutAnimationEnabledExperimental(true);
      }
      LayoutAnimation.spring();
    }
    renderDescription() {
      const { library, expanded } = this.props;
      console.log(library.submenus);
      //Comparing the selectedLibraryId and the library ID
      if (expanded) {
        return (
          <CardSection style={{ backgroundColor: '#F7F7F7' }}>
            <Text style={{ flex: 1 }}>{library.description}</Text>
          </CardSection>
        );
      }
    }

    render() {
      const { titleStyle } = styles;
      const { id, title, submenus } = this.props.library;
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
  const expanded = state.selectedMenuItem === ownProps.library.id;
  return { expanded };
};

export default connect(mapStateToProps, actions)(MenuItem);
