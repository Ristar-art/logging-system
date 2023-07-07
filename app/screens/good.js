import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Button, TextInput } from 'react-native';
import axios from 'axios';

export default function Good({ navigation }) {
  const [heading, setHeading] = useState([]);
  const [inputData, setInputData] = useState({ title: '', rating: '', body: '' });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios
      .get('http://localhost:7000/good')
      .then((response) => setHeading(response.data))
      .catch((error) => console.error(error));
  };

  const addData = () => {
    axios
      .post('http://localhost:7000/good', {
        title: inputData.title,
        rating: inputData.rating,
        body: inputData.body
      })
      .then((response) => {
        const newItem = response.data.data;
        fetchData(); // Fetch data again after adding the new item
        setInputData({ title: '', rating: '', body: '' }); // Clear the input fields
        navigation.navigate('Content', newItem); // Pass the newItem to the Content screen
      })
      .catch((error) => console.error(error));
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Title"
        value={inputData.title}
        onChangeText={(text) => setInputData({ ...inputData, title: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Rating"
        value={inputData.rating}
        onChangeText={(text) => setInputData({ ...inputData, rating: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Body"
        value={inputData.body}
        onChangeText={(text) => setInputData({ ...inputData, body: text })}
      />
      <Button title="Add Data" onPress={addData} />

      <FlatList
        data={heading}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('Content', item)}>
            <Text style={styles.titleText}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 24,
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
