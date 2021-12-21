import React, { useEffect, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Input from "../../../components/Input";
import Button from "../../../components/Button";

import styles from "./styles";

export default function Item({ name, price, description }) {
  const [quantity, setQuantity] = useState(1);
  const [total, setTotal] = useState(price);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);

  useEffect(() => {
    setTotal(quantity * price);
  }, [quantity, price]);

  const handleChange = (value) => {
    if (!value.match(/^[0-9]*$/)) return;

    const removeZeros = value.replace(/^(0)(.+)/, "$2");

    setQuantity(removeZeros);
  };

  const handleClick = () => {
    setIsDetailsOpen(!isDetailsOpen);
    setQuantity(1);
  };

  return (
    <>
      <TouchableOpacity
        style={styles.information}
        onPress={() => handleClick()}
      >
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.description}>{description}</Text>
        <Text style={styles.price}>
          {Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
          }).format(price)}
        </Text>
      </TouchableOpacity>
      {isDetailsOpen && (
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
          <Button title="add" />
        </View>
      )}
      <View style={styles.divisor} />
    </>
  );
}
