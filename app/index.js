import React from "react";
import { StyleSheet, View, TouchableWithoutFeedback, Keyboard, SafeAreaView } from "react-native";
import Home from "./screens/home";
import Navigator from './routes/homeStacks'

export default function Page() {

  return (
   
      <SafeAreaView style={styles.container}>
        <Navigator/>
      </SafeAreaView>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
  },
});
