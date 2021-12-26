import { SafeAreaView, StatusBar } from "react-native";
import "intl";
import "intl/locale-data/jsonp/en.js";

import Routes from "./src/Routes";
import styles, { colors } from "./src/styles/styles";

export default function App() {
  return (
    <>
      <SafeAreaView style={styles.mainContainer}>
        <Routes />
        <StatusBar style="auto" backgroundColor={colors.purple} />
      </SafeAreaView>
      <SafeAreaView style={styles.orangeBackground} />
    </>
  );
}
