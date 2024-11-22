import React from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import SmartLight from './SmartLight';
import SmartThermostat from './SmartThermostat';
import SmartCamera from './SmartCamera';

const SmartHomeDashboard = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Smart Home Dashboard</Text>

      {/* Smart Light Component */}
      <SmartLight deviceId="light123" />

      {/* Smart Thermostat Component */}
      <SmartThermostat deviceId="thermostat456" />

      {/* Smart Camera Component */}
      <SmartCamera cameraUrl="http://your-camera-ip/feed" />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 20,
  },
});

export default SmartHomeDashboard;
