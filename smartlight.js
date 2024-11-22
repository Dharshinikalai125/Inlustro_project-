import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import axios from 'axios';

const SmartLight = ({ deviceId }) => {
  const [lightStatus, setLightStatus] = useState('off');
  const toggleLight = async () => {
    try {
      const response = await axios.post(http://your-smart-light-ip/control/${deviceId}, {
        status: lightStatus === 'off' ? 'on' : 'off',
      });
      
      if (response.data.success) {
        setLightStatus(lightStatus === 'off' ? 'on' : 'off');
      }
    } catch (error) {
      console.error('Error controlling the light:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Light is {lightStatus.toUpperCase()}</Text>
      <Button 
        title={lightStatus === 'off' ? 'Turn On Light' : 'Turn Off Light'}
        onPress={toggleLight}
      />
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
});

export default SmartLight;
