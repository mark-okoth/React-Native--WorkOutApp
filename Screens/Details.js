import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function Details() {
  return (
    <View style={styles.container}>
      <Text>Detail Page</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    marginTop: 30,
  },
});
