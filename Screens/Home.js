import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.HeaderContainer}>
        <Text style={styles.HeaderText}>Welcome {"\n"} to MyoMus!</Text>
      </View>
      <View style={styles.desc}>
        <Text style={{ fontSize: 20, color: "#e7e3e3" }}>
          Hope you are doing well today
        </Text>
      </View>
      <View style={styles.imgContainer}>
        <Image
          style={{
            width: "90%",
            height: "90%",
            resizeMode: "contain",
          }}
          source={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDxpBtG0dOZc-fXBRK4YPe-8IRjNFP6gzwKWivLSU3xM2xMt-ucmFg_vSUA0E-zaHhpw8&usqp=CAU",
          }}
        />
      </View>
      <View style={styles.btnContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={styles.login}>Login</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.button2}>
          <Text style={styles.CwithEmail}>Continue with e-mail</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  HeaderContainer: {
    width: "100%",
    height: "25%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  HeaderText: {
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "center",
  },
  desc: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  imgContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "50%",
  },
  btnContainer: {
    margin: 5,
    width: "90%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  btnSize: {
    width: "100%",
    fontSize: 20,
  },
  btnContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    margin: 5,
    height: "auto",
  },
  button: {
    width: "90%",
    backgroundColor: "orange",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    color: "white",
    borderRadius: 15,
    height: 50,
  },
  button2: {
    width: "90%",
    backgroundColor: "#e7e3e3",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    borderRadius: 15,
    height: 50,
  },
  login: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
  },
  CwithEmail: {
    color: "black",
    fontWeight: "bold",
    fontSize: 18,
  },
});
