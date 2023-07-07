import React from "react";
import { ImageBackground, StyleSheet, View, Button, Dimensions} from "react-native";
import Header from "../components/header";
 
const { width, height } = Dimensions.get("window");
const image = {
  width: width,
  height: height,
  uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Urk%C3%A4llan.svg/240px-Urk%C3%A4llan.svg.png',
};

export default function Home({navigation}) {

const goodPressHendler = ()=>{
  navigation.navigate('Good');
}
const evilPressHendler = ()=>{
  navigation.navigate('Evil');
  }

  return (
   

<View style={styles.container}>
     <Header/>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      
        <View style={styles.main}>
         
          <View style={styles.buttonContainer}>
            <Button title="Good" style={styles.button} onPress={goodPressHendler} />
            <Button title="Evil  " style={styles.button} onPress={evilPressHendler}  />
          </View>
         
        </View>
      </ImageBackground>
    </View>

   
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
  image: {
    flex: 1,
    justifyContent: "center",
    width: "100%",
    height: "100%",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
  },
  button: {
    button: {
      width: 120,
      height: 40,
    },
  },
  
});
