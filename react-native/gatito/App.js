import { SafeAreaView, StatusBar } from "react-native";
import Services from "./src/screens/Services";

export default function App() {
  return (
    <SafeAreaView>
      <Services />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
