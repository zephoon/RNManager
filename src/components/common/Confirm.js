import React from 'react';
import { Modal, Text, View } from 'react-native';
import { CardSection, Button } from './index';

const Confirm = ({ children, visible, onAccept, onDecline }) => {
  const { cardSectionStyle, textStyle, containerStyle } = styles
  return(
    <Modal
      animationType="slide"
      transparent
      visible={ visible }
      onRequestClose={ () => {} }
    >
      <View style={ containerStyle }>
        <CardSection style={ cardSectionStyle }>
          <Text style={ textStyle }>
            {children}
          </Text>
        </CardSection>
        <CardSection>
          <Button onPress={onAccept}>
            Yes
          </Button>
          <Button onPress={onDecline}>
            No
          </Button>
        </CardSection>
      </View>
    </Modal>
  );
};

const styles = {
  cardSectionStyle: {
    justifyContent: 'center'
  },
  textStyle: {
    flex: 1,
    fontSize: 18,
    textAlign: 'center',
    lineHeight: 40
  },
  containerStyle: {
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    position: 'relative',
    flex: 1,
    justifyContent: 'center'
  }
}

export { Confirm };
