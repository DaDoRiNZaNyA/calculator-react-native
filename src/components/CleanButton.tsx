import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

interface ICleanButton {
  value: string;
  onPress: () => void;
}

export const CleanButton: React.FC<ICleanButton> = ({value, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
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
