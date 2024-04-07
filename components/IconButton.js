import { Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function IconButton({ onPress }) {
  return (
    <Pressable
      style={({ pressed }) => (pressed ? styles.buttonPressed : null)}
      onPress={onPress}
    >
      <Ionicons name="star" size={24} color="white" />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  buttonPressed: {
    opacity: 0.4,
  },
});
