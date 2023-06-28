import { useReducer } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const initialState = {
  agreed: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_AGREED":
      return { ...state, agreed: !state.agreed };
    default:
      return state;
  }
};

const SignUpScreen = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const navigation = useNavigation();

  const handleAgreement = () => {
    dispatch({ type: "SET_AGREED" });
  };

  const goToLogIn = () => {
    navigation.navigate("Login");
  };

  
  const goToOnSuccess = () => {
    navigation.navigate("SuccessSignup");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome</Text>
      <View style={styles.formContainer}>
        <TextInput style={styles.input} placeholder="Full Name" />
        <TextInput style={styles.input} placeholder="Email" />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
        />
        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          secureTextEntry={true}
        />
        <View style={styles.checkboxContainer}>
          <TouchableOpacity style={styles.checkbox} onPress={handleAgreement}>
            {state.agreed ? <View style={styles.checkboxChecked} /> : null}
          </TouchableOpacity>
          <Text style={styles.checkboxText}>
            By clicking on 'sign up' I agree to the klyk app terms and privacy
            policy
          </Text>
        </View>
        <TouchableOpacity style={styles.signUpButton} onPress={goToOnSuccess}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginLink} onPress={goToLogIn}>
          <Text style={styles.loginText}>Already have an account? Log in</Text>
        </TouchableOpacity>
      </View>
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
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#FFFFFF",
  },
  formContainer: {
    width: "80%",
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: "#2A2D3F",
    backgroundColor: "#fff",
    marginBottom: 10,
    paddingHorizontal: 10,
    color: "#000",
    borderRadius: 15,
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: "#FFFFFF",
    marginRight: 5,
  },
  checkboxChecked: {
    backgroundColor: "#FFFFFF",
    flex: 1,
  },
  checkboxText: {
    flex: 1,
    color: "#FFFFFF",
  },
  signUpButton: {
    backgroundColor: "#007bff",
    paddingVertical: 12,
    borderRadius: 25,
    alignItems: "center",
    marginBottom: 20,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
  },
  loginLink: {
    alignItems: "center",
  },
  loginText: {
    color: "#fff",
  },
});

export default SignUpScreen;
