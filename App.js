import {
  View,
  Image,
  Text,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import LoginScreen from "./Pages/LoginScreen";
import SignupScreen from "./Pages//SignupScreen";
import SuccessSignup from "./Pages/SuccessSingup";
import AppEntry from "./Pages/AppEntry";

const { width } = Dimensions.get("window");
const buttonWidth = width * 0.7;

const Stack = createStackNavigator();

// Main app component
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Signup"
          component={SignupScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SuccessSignup"
          component={SuccessSignup}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AppEntry"
          component={AppEntry}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const HomeScreen = ({ navigation }) => {
  const handleGetStarted = () => {
    navigation.navigate("Login");
  };
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={require("./assets/icon.png")} style={styles.logo} />
      </View>
      <TouchableOpacity
        style={[styles.button, { width: buttonWidth }]}
        onPress={handleGetStarted}
      >
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
      <Text style={styles.footerText}>
        Copyrights © clicks has been registered under LOD 2022-2023
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logoContainer: {
    flex: 1,
    justifyContent: "center",
  },
  logo: {
    width: 200,
    height: 200,
    resizeMode: "contain",
  },
  button: {
    marginBottom: 20,
    paddingVertical: 12,
    paddingHorizontal: 30,
    backgroundColor: "#2A2D3F",
    borderRadius: 15,
  },
  buttonText: {
    fontSize: 16,
    color: "#ffffff",
    textAlign: "center",
  },
  footerText: {
    fontSize: 14,
    color: "#999999",
  },
});

export default App;
