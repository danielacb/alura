import React from "react";
import { Text, TouchableOpacity } from "react-native";

import styles from "./styles";

export default function Button({
  small = false,
  reversed = false,
  title,
  onPress,
}) {
  const defaultStyles = styles(small, reversed);

  return (
    <TouchableOpacity onPress={onPress} style={defaultStyles.button}>
      <Text style={defaultStyles.title}>{title}</Text>
    </TouchableOpacity>
  );
}
