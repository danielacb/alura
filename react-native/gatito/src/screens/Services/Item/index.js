import React, { useState } from "react";
import { Text, View } from "react-native";
import Input from "../../../components/Input";
import Button from "../../../components/Button";

import styles from "./styles";

export default function Item({ name, price, description }) {
  const [quantity, setQuantity] = useState(1);

  const handleChange = (value) => {
    if (!value.match(/^[0-9]*$/)) return;

    const removeZeros = value.replace(/^(0)(.+)/, "$2");

    setQuantity(removeZeros);
  };

  return (
    <>
      <View style={styles.information}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.description}>{description}</Text>
        <Text style={styles.price}>{price}</Text>
      </View>
      <View style={styles.cart}>
        <View>
          <View style={styles.value}>
            <Text style={styles.description}>Quantity: </Text>
            <Input
              value={String(quantity)}
              onChangeText={(value) => handleChange(value)}
            />
          </View>
          <View style={styles.value}>
            <Text style={styles.description}>Price: </Text>
            <Text style={styles.price}>0</Text>
          </View>
        </View>
        <Button title="add" />
      </View>
      <View style={styles.divisor} />
    </>
  );
}
