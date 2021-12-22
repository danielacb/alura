import React from "react";
import { FlatList, KeyboardAvoidingView, Platform, View } from "react-native";
import Item from "./Item";

import styles from "../../styles/styles";

const services = [
  {
    id: 1,
    name: "Grooming",
    price: 79.9,
    description: "Making dogs & cats look great is our passion!",
  },
  {
    id: 2,
    name: "Vaccination",
    price: 89.9,
    description: "Learn more about vaccination requirements",
  },
  {
    id: 3,
    name: "Free Exam",
    price: 0.0,
    description: "New clients receive a free veterinary examination",
  },
];

export default function Services() {
  return (
    <View>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
      >
        <FlatList
          data={services}
          renderItem={({ item }) => <Item {...item} />}
          keyExtractor={(item) => item.id}
          removeClippedSubviews={false}
        />
      </KeyboardAvoidingView>
    </View>
  );
}
