import { SafeAreaView, StatusBar } from "react-native";
import "intl";
import "intl/locale-data/jsonp/en.js";

import Services from "./src/screens/Services";

export default function App() {
  return (
    <SafeAreaView>
      <Services />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
