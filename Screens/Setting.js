import { View, Text,StyleSheet } from "react-native";
import React from "react";

export default function Setting() {
  return (
    <View style={styles.container}>
      <Text>Setting Page</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    marginTop: 30,
  },
});
