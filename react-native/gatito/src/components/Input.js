import React from "react";
import { TextInput } from "react-native";

export default function Input(props) {
  return (
    <TextInput
      keyboardType="number-pad"
      selectTextOnFocus
      value={props.value}
      {...props}
    />
  );
}
