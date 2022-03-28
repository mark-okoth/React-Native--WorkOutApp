import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function MainScreen() {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    marginTop: 30,
  },
});
