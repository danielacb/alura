import { StyleSheet } from "react-native";

export const colors = {
  purple: "#A050BE",
  orange: "#FABE50",
  dark: "#555555",
  light: "#fff",
  gray: "#C7C7C7",
};

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  mainContainer: {
    flex: 1,
    backgroundColor: colors.purple,
  },
  orangeBackground: {
    flex: 0,
    backgroundColor: colors.orange,
  },
});
