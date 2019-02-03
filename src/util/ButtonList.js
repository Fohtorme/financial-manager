import React from "react";
import { StyleSheet, Button, Text } from "react-native";

const ButtonList = ({ buttons }) => {
  return (
    <React.Fragment>
      <Text>MAIS TEXTO:{`${JSON.stringify(buttons)}`}</Text>
      {buttons.map(button => {
        return (
          <Button
            title={button.title}
            onPress={button.onPress}
            color="#00FF00"
            accessibilityLabel="Work mother fucker"
          />
        );
      })}
    </React.Fragment>
  );
};

export default ButtonList;
