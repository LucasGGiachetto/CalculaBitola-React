import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';

const WireGaugeCalculator = () => {
  const [distance, setDistance] = useState<string>('');
  const [current, setCurrent] = useState<string>('');
  const [results, setResults] = useState<{
    gauge127V: number;
    gauge220V: number;
  } | null>(null);

  const calculateGauge = () => {
    const dist = parseFloat(distance) || 0;
    const curr = parseFloat(current) || 0;

    // Cálculo das bitolas conforme as fórmulas fornecidas
    const gauge127V = (2 * curr * dist) / 294.64;
    const gauge220V = (2 * curr * dist) / 510.4;

    setResults({
      gauge127V,
      gauge220V
    });
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <View style={styles.content}>
        <Text style={styles.title}>Calculadora de bitola (mm²)</Text>
        <Text style={styles.subtitle}>Elétrica residencial cabos de cobre:</Text>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Distância em metros:</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite a distância"
            keyboardType="numeric"
            value={distance}
            onChangeText={setDistance}
            placeholderTextColor="#999"
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Corrente:</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite a corrente em amperes"
            keyboardType="numeric"
            value={current}
            onChangeText={setCurrent}
            placeholderTextColor="#999"
          />
        </View>

        <TouchableOpacity style={styles.button} onPress={calculateGauge}>
          <Text style={styles.buttonText}>Calcular</Text>
        </TouchableOpacity>

        {results && (
          <View style={styles.resultsContainer}>
            <Text style={styles.resultText}>
              A bitola recomendada para Tensão 127V
            </Text>
            <Text style={styles.resultValue}>é: {results.gauge127V.toFixed(2)} mm²</Text>
            
            <View style={styles.divider} />
            
            <Text style={styles.resultText}>
              A bitola recomendada para Tensão 220V
            </Text>
            <Text style={styles.resultValue}>é: {results.gauge220V.toFixed(2)} mm²</Text>
          </View>
        )}
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#555',
    marginBottom: 30,
    textAlign: 'center',
  },
  inputGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    color: '#333',
    marginBottom: 8,
  },
  input: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 15,
    fontSize: 16,
    color: '#333',
  },
  button: {
    backgroundColor: '#4CAF50',
    borderRadius: 8,
    padding: 16,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  resultsContainer: {
    marginTop: 30,
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 20,
    borderLeftWidth: 4,
    borderLeftColor: '#4CAF50',
    elevation: 3,
  },
  resultText: {
    fontSize: 16,
    color: '#555',
    marginBottom: 5,
  },
  resultValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  divider: {
    height: 1,
    backgroundColor: '#eee',
    marginVertical: 10,
  },
});

export default WireGaugeCalculator;