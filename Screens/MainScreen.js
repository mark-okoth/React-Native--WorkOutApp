import { View, Text, StyleSheet, ScrollView } from "react-native";
import React, { useState, useEffect } from "react";
import axios from "axios";

export default function MainScreen() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const GetDaysOfTheWeek = () => {
      axios.get("https://wger.de/api/v2/daysofweek/").then((res) => {
        setData(res.data.results);
      });
    };
    GetDaysOfTheWeek();
  }, []);
  return (
    <ScrollView style={styles.container} scro>
      <View style={styles.cover}>
        <View style={styles.header}>
          <Text style={{ fontSize: 30, fontWeight: "bold" }}>
            Todays activity
          </Text>
        </View>
        {data.map((days) => (
          <View style={styles.Datacontainer} key={days.day_of_week}>
            <Text style={styles.Textcontainer}>{days.day_of_week}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    backgroundColor: "#e7e3e3",
  },
  cover: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  Datacontainer: {
    width: "100%",
    display: "flex",
    backgroundColor: "orange",
    width: "90%",
    marginBottom: 10,
    padding: 40,
    justifyContent: "center",
    borderRadius: 20,
  },
  Textcontainer: {
    fontSize: 20,
    textAlign: "center",
  },
  header: {
    display: "flex",
    height: "10%",
    justifyContent: "center",
    alignItems: "center",
  },
});
