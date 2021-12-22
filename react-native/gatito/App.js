import { SafeAreaView, StatusBar } from "react-native";
import "intl";
import "intl/locale-data/jsonp/en.js";

import Services from "./src/screens/Services";
import styles from "./src/styles/styles";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Services />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
