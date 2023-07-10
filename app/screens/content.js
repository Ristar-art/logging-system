import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import axios from 'axios';

export default function Content({ navigation }) {
  const [body, setBody] = useState('');
  

  const handleAddData = async () => {
    try {
      const itemId = navigation.getParam('id');
      await axios.patch(`http://localhost:7000/good/${itemId}`, {
        body: body,
      });
      setBody('');
    } catch (error) {
      console.error('Error updating the body:', error);
    }
  };
  

  return (
    <View style={styles.container}>
      <Text>{navigation.getParam('title')}</Text>
      <Text>{navigation.getParam('body')}</Text>
     
     
      <TextInput
        style={styles.input}
        placeholder="Enter body"
        value={body}
        onChangeText={(text) => setBody(text)}
      />
      <Button title="Submit" onPress={handleAddData} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 24,
  },
  label: {
    fontSize: 18,
    marginBottom: 6,
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingLeft: 8,
  },
});
