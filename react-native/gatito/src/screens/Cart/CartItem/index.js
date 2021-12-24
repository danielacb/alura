import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import Input from "../../../components/Input";
import Button from "../../../components/Button";

import styles from "./styles";

export default function Item({ name, price, description, initialQuantity }) {
  const [quantity, setQuantity] = useState(initialQuantity);
  const [total, setTotal] = useState(price * initialQuantity);

  useEffect(() => {
    setTotal(quantity * price);
  }, [quantity, price]);

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
        <Text style={styles.price}>
          {Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
          }).format(price)}
        </Text>
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
            <Text style={styles.price}>
              {Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
              }).format(total)}
            </Text>
          </View>
        </View>
        <Button title="remove" />
      </View>

      <View style={styles.divisor} />
    </>
  );
}
