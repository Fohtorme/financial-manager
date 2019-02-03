import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import Menu from "./src/home/Menu";

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Menu />
      </View>
    );
  }
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "pink",
    alignItems: "center",
    justifyContent: "center"
  }
});
