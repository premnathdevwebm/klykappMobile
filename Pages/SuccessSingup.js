import { View, Image, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons";

const SuccessSignup = () => {
  const navigation = useNavigation();

  const appEnter = () => {
    navigation.navigate("AppEntry");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Sign Up Was Successful</Text>
      <Image
        style={styles.image}
        source={require("../assets/signup_happy_announcement.png")}
      />
      <TouchableOpacity style={styles.button} onPress={appEnter}>
        <Text style={styles.buttonText}>Continue To App</Text>
        <View style={styles.iconContainer}>
          <FontAwesome name="arrow-right" size={20} color="#fff" />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2A2D3F",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    color: "#FFFFFF",
  },
  image: {
    resizeMode: "contain",
  },
  button: {
    position: "absolute",
    bottom: 20,
    right: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
    marginRight: 5,
  },
  iconContainer: {
    marginLeft: 5,
  },
});

export default SuccessSignup;
