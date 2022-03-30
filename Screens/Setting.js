import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableHighlight,
} from "react-native";
import React from "react";

export default function Setting() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 30, fontWeight: "bold" }}>Settings</Text>
        </View>
        <View style={styles.cover}>
          <TouchableHighlight
            style={{
              width: 100,
              height: 100,
              borderRadius: 50,
            }}
            onPress={() => {
              console.log("tapped");
            }}
          >
            <Image
              style={{
                width: 100,
                height: 100,
                borderRadius: 50,
                borderWidth: 5,
                borderColor: "orange",
              }}
              source={{
                uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80",
              }}
            />
          </TouchableHighlight>
          <View>
            <Text style={styles.Textcontainer}>Mark Okoth </Text>
            <Text style={styles.Textcontainer1}>+254 7912 36814 </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    marginTop: 70,
  },
  cover: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-around",
    alignItems: "center",
    textAlign: "center",
    marginTop: 20,
    // height: "100%",
  },
  Textcontainer: {
    fontSize: 30,
    fontWeight: "bold",
  },
  Textcontainer1: {
    marginTop: 5,
  },
});
