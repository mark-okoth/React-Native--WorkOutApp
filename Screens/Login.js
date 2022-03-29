import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from "react-native";

import React from "react";
export default function Login({ navigation }) {
  return (
    <View style={styles.LoginContainer}>
      <Text style={{ fontSize: 30, fontWeight: "bold", marginBottom: 10 }}>
        Login to My MyoMus
      </Text>
      <TextInput placeholder="E-mail" style={styles.input} />
      <TextInput
        placeholder="Password"
        style={styles.input}
        secureTextEntry={true}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Tab")}
      >
        <Text style={{ color: "white", fontWeight: "bold", fontSize: 20 }}>
          Login
        </Text>
      </TouchableOpacity>
      <View>
        <Text
          style={{
            fontSize: 16,
            fontWeight: "bold",
            marginTop: 10,
            color: "gray",
          }}
        >
          Forgot password?
        </Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  LoginContainer: {
    display: "flex",
    height: "70%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
  },
  input: {
    width: "80%",
    borderWidth: 2,
    borderColor: "orange",
    height: 50,
    margin: 10,
    padding: 10,
  },
  button: {
    width: "80%",
    backgroundColor: "orange",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    marginTop: 10,
    height: 50,
  },
});
