import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function Profile() {
  return (
    <View style={styles.container}>
      <Text>Profile page</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
   marginTop:30,
  },
});
