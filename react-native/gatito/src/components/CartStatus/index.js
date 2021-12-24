import React from "react";
import { Text, View } from "react-native";
import Button from "../Button";

import styles from "./styles";

export default function CartStatus({ total }) {
  return (
    <View style={styles.content}>
      <View style={styles.total}>
        <Text style={styles.description}>Total:</Text>
        <Text style={styles.value}>
          {Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
          }).format(total)}
        </Text>
      </View>
      <View style={styles.button}>
        <Button title="Checkout" reversed />
      </View>
    </View>
  );
}
