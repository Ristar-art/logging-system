import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function Content({ navigation }) {
  const handleAddData = () => {
    fetch('http://localhost:7000/good', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        
        body: 'This is a new good item',
       
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Data added successfully:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <View style={styles.container}>
      <Text>{navigation.getParam('title')}</Text>
      <Text>{navigation.getParam('body')}</Text>
      <Text>{navigation.getParam('rating')}</Text>
      <Text>{navigation.getParam('id')}</Text>
      <Button title="Add Data" onPress={handleAddData} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 24,
  },
});
