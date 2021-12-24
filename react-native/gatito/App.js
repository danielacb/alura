import { SafeAreaView, StatusBar } from "react-native";
import "intl";
import "intl/locale-data/jsonp/en.js";

import Cart from "./src/screens/Cart";
import styles from "./src/styles/styles";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Cart />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
