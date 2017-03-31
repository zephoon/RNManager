import React, { Component } from 'react';
import { Text } from 'react-native';
import { CardSection } from './common';

class ListItem extends Component {
  render() {
    const { name } = this.props.employee;
    const { titleStyle } = styles;
    return {
      <CardSection>
        <Text style={titleStyle}>
          { name }
        </Text>
      </CardSection>
    };
  };
};

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
}

export default ListItem;
