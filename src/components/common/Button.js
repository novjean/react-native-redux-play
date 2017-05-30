import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

//TouchableOpacity is just a button which gives some feedback to the user
const Button = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress} style={[styles.buttonStyle, props.style]}>
      <Text style={[styles.textStyle, props.style]}>
        {props.children}
      </Text>
    </TouchableOpacity>
  );
};

//alignSelf is to position itself using some flex box rules
//borderRadius will give a nice rounded borders
const styles = {
  textStyle: {
    alignSelf: 'center',
    // color: '#007aff',
    color: '#a40234',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  },
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: 'transparent',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#a40234',
    marginLeft: 30,
    marginRight: 30
  }
};

export { Button };
