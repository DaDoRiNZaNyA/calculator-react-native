import React, {useState} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {NumberButton} from '../components/NumberButton';
import {OperationButton} from '../components/OperationButton';
import {Operations} from '../interfaces';
import {CleanButton} from '../components/CleanButton';

export const CalculationScreen = ({navigation}: any) => {
  const [result, setResult] = useState<number | undefined>(0);
  const [currentOperation, setCurrentOperation] = useState<
    Operations | undefined
  >(undefined);
  const [history, setHitory] = useState<string[]>([]);

  const clean = () => {
    setResult(0);
    setCurrentOperation(undefined);
  };

  const goToHistory = () => {
    navigation.push('History', {history});
  };

  const operations = (number: number) => {
    if (!result) {
      setResult(number);
      return;
    }
    switch (currentOperation) {
      case Operations.divide:
        setHitory(prev => [
          ...prev,
          `${result} / ${number} = ${result / number}`,
        ]);
        setResult(result / number);
        setCurrentOperation(undefined);
        break;
      case Operations.minus:
        setHitory(prev => [
          ...prev,
          `${result} - ${number} = ${result - number}`,
        ]);
        setResult(result - number);
        setCurrentOperation(undefined);
        break;
      case Operations.multiply:
        setHitory(prev => [
          ...prev,
          `${result} * ${number} = ${result * number}`,
        ]);
        setResult(result * number);
        setCurrentOperation(undefined);
        break;
      case Operations.plus:
        setHitory(prev => [
          ...prev,
          `${result} + ${number} = ${result + number}`,
        ]);
        setResult(result + number);
        setCurrentOperation(undefined);
        break;
    }
  };

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.result}>{result}</Text>
      <View style={styles.buttonsContainer}>
        <NumberButton value={0} onPress={operations} />
        <NumberButton value={1} onPress={operations} />
        <NumberButton value={2} onPress={operations} />
        <NumberButton value={3} onPress={operations} />
        <OperationButton
          value={Operations.minus}
          onPress={setCurrentOperation}
        />
      </View>
      <View style={styles.buttonsContainer}>
        <NumberButton value={4} onPress={operations} />
        <NumberButton value={5} onPress={operations} />
        <NumberButton value={6} onPress={operations} />
        <NumberButton value={7} onPress={operations} />
        <OperationButton
          value={Operations.plus}
          onPress={setCurrentOperation}
        />
      </View>
      <View style={styles.buttonsContainer}>
        <NumberButton value={8} onPress={operations} />
        <NumberButton value={9} onPress={operations} />
        <OperationButton
          value={Operations.multiply}
          onPress={setCurrentOperation}
        />
        <OperationButton
          value={Operations.divide}
          onPress={setCurrentOperation}
        />
        <CleanButton value="C" onPress={clean} />
      </View>
      <TouchableOpacity onPress={goToHistory}>
        <Text style={styles.history}>History</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    padding: 10,
  },
  result: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 30,
  },
  buttonsContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  history: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
});
