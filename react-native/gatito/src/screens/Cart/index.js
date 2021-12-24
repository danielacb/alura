import React from "react";
import { View, FlatList, KeyboardAvoidingView, Platform } from "react-native";
import styles from "../../styles/styles";
import Item from "./CartItem";
import CartStatus from "../../components/CartStatus";

const services = [
  {
    id: 1,
    name: "Grooming",
    price: 79.9,
    description: "Making dogs & cats look great is our passion!",
    quantity: 1,
  },
  {
    id: 2,
    name: "Vaccination",
    price: 89.9,
    description: "Learn more about vaccination requirements",
    quantity: 1,
  },
  {
    id: 3,
    name: "Free Exam",
    price: 0.0,
    description: "New clients receive a free veterinary examination",
    quantity: 2,
  },
];

export default function Cart() {
  const total = services.reduce(
    (sum, { price, quantity }) => sum + price * quantity,
    0
  );

  return (
    <View>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
      >
        <CartStatus total={total} />
        <FlatList
          data={services}
          renderItem={({ item }) => (
            <Item {...item} initialQuantity={item.quantity} />
          )}
          keyExtractor={(item) => item.id}
          removeClippedSubviews={false}
        />
      </KeyboardAvoidingView>
    </View>
  );
}
