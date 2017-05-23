import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => {
  return (
    <View style={[styles.containerStyle, props.style]}>
      {props.children}
    </View>
  );
};

const styles = {
  containerStyle: {
      borderBottomWidth: 1,
      padding: 5,
      backgroundColor: '#fff',
      justifyContent: 'flex-start',   //Used for determining where to display the children
      flexDirection: 'row',       //This is needed for aligning flex boxes in row mode
      borderColor: '#ddd',
      position: 'relative'
  }
};

export { CardSection };
