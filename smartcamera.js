import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const SmartCamera = ({ cameraUrl }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Live Camera Feed</Text>npx 
      {/* Replace with your camera's live feed URL */}
      <Image 
        style={styles.cameraFeed}
        source={{ uri: cameraUrl }}
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
  cameraFeed: {
    width: 300,
    height: 200,
    borderRadius: 10,
  },
});

export default SmartCamera;
