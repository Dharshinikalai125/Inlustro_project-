import React, { useState } from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';
import axios from 'axios';

const SmartThermostat = ({ deviceId }) => {
  const [temperature, setTemperature] = useState('');

  const setTemperatureHandler = async () => {
    try {
      
      const response = await axios.post(http://your-thermostat-ip/control/${deviceId}, {
        temperature,
      });

      if (response.data.success) {
        alert('Temperature set successfully');
      }
    } catch (error) {
      console.error('Error controlling the thermostat:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Set Temperature:</Text>
      <TextInput 
        style={styles.input}
        placeholder="Enter temperature"
        keyboardType="numeric"
        value={temperature}
        onChangeText={setTemperature}
      />
      <Button title="Set Temperature" onPress={setTemperatureHandler} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    borderWidth: 1,
    borderRadius: 10,
    margin: 10,
    backgroundColor: '#f8f8f8',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    width: '80%',
    marginBottom: 20,
    paddingLeft: 10,
    fontSize: 18,
  },
});

export default SmartThermostat;
