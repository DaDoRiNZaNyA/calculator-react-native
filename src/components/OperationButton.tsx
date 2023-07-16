import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import {Operations} from '../interfaces';

interface IOperationButton {
  value: Operations;
  onPress: (value: Operations) => void;
}

export const OperationButton: React.FC<IOperationButton> = ({
  value,
  onPress,
}) => {
  return (
    <TouchableOpacity onPress={() => onPress(value)} style={styles.button}>
      <Text style={styles.text}>{value}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'orange',
    padding: 20,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  text: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
