import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

interface INumberButton {
  value: number;
  onPress: (value: number) => void;
}

export const NumberButton: React.FC<INumberButton> = ({value, onPress}) => {
  return (
    <TouchableOpacity onPress={() => onPress(value)} style={styles.button}>
      <Text style={styles.text}>{value}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'blue',
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
