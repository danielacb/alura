import React from "react";
import { TextInput } from "react-native";

import styles from "./styles";

export default function Input(props) {
  return (
    <TextInput
      style={styles.input}
      keyboardType="number-pad"
      selectTextOnFocus
      value={props.value}
      {...props}
    />
  );
}
