import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Button, TextInput } from 'react-native';
import axios from 'axios';

export default function Good({ navigation }) {
  const [heading, setHeading] = useState([]);
  const [newTitle, setNewTitle] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios
      .get('http://localhost:7000/good')
      .then((response) => setHeading(response.data))
      .catch((error) => console.error(error));
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post('http://localhost:7000/good', {
        title: newTitle,
      });
      setHeading([...heading, response.data]);
      setNewTitle('');
    } catch (error) {
      console.error('Error creating title:', error);
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={heading}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('Content', item)}>
            <Text style={styles.titleText}>{item.title || ''}</Text>
          </TouchableOpacity>
        )}
      />

      <View style={styles.formContainer}>
        <Text style={styles.label}>Title</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter title"
          value={newTitle}
          onChangeText={(text) => setNewTitle(text)}
        />
        <Button title="Submit" onPress={handleSubmit} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 24,
  },
  formContainer: {
    width: '100%',
    marginBottom: 12,
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
  titleText: {
    fontFamily: 'nunito-bold',
    fontSize: 18,
  },
});
