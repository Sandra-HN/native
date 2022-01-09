import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import styles from "./styles/FinishViewStyle";

const ActionButton = ({ label, textColor, backgroundColor, onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.button, { backgroundColor }]}
    >
      <Text style={[styles.btnText, { color: textColor }]}>{label}</Text>
    </TouchableOpacity>
  );
};
export default ActionButton;
