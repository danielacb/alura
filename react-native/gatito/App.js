import { SafeAreaView, StatusBar } from "react-native";
import "intl";
import "intl/locale-data/jsonp/en.js";

import Routes from "./src/Routes";
import styles from "./src/styles/styles";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Routes />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
