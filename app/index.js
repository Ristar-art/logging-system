import React from "react";
import { StyleSheet, View, TouchableWithoutFeedback, Keyboard, SafeAreaView } from "react-native";
import Home from "./screens/home";
import Navigator from './routes/homeStacks'

export default function Page() {

  return (
    <TouchableWithoutFeedback onPress={()=>{Keyboard.dismiss()}}>
      <SafeAreaView style={styles.container}>
        <Navigator/>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
  },
});
