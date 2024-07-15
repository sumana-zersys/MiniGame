import { Text, StyleSheet } from "react-native";

import Colors from "../../constants/colors";

function InstructionText({ children, style }) {
  return <Text style={[styles.instructionText, style]}>{children}</Text>;
}

export default InstructionText;

const styles = StyleSheet.create({
  instructionText: {
    fontWeight: "bold",
    color: "black",
    fontSize: 24,
  },
});
