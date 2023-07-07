import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import axios from 'axios';

export default function Evil({ navigation }) {
  const [heading, setHeading] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:7000/evil')
      .then((response) => setHeading(response.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <View style={styles.container}>
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
  titleText: {
    fontFamily: 'nunito-bold',
    fontSize: 18,
  },
});
