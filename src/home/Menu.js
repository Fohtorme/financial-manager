import React, { Component } from "react";
import { StyleSheet, Text, View, Alert } from "react-native";
import ButtonList from "../util/ButtonList";

class Menu extends Component {
  state = {};

  render() {
    return (
      <View>
        <ButtonList buttons={this.buttons} />
      </View>
    );
  }

  handleOnSelectMenu = () => {};

  buttons = [
    { title: "Ativos", onPress: this.handleOnSelectMenu },
    { title: "Passivos", onPress: this.handleOnSelectMenu },
    { title: "Rendas", onPress: this.handleOnSelectMenu },
    { title: "Despesas", onPress: this.handleOnSelectMenu },
    { title: "Relatórios", onPress: this.handleOnSelectMenu }
  ];
}

export default Menu;
