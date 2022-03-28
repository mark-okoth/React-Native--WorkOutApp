import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import Navigator from "./Routes/Nav.js";
import Home from "./Screens/Home.js";
export default function App({ navigation }) {
  return <Navigator/>;
}
