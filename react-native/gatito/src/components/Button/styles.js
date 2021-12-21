import { StyleSheet } from "react-native";
import { colors } from "../../styles/styles";

export default (small, reversed) =>
  StyleSheet.create({
    button: {
      width: 140,
      paddingVertical: small ? 3 : 9,
      paddingHorizontal: 20,
      backgroundColor: reversed ? colors.orange : colors.purple,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.23,
      shadowRadius: 2.62,
      elevation: 4,
    },
    title: {
      fontWeight: "bold",
      textAlign: "center",
      color: reversed ? colors.purple : colors.orange,
    },
  });
