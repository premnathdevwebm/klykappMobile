import { useReducer } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
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

const LoginScreen = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const navigation = useNavigation();

  const handleRememberMe = () => {
    dispatch({ type: "SET_AGREED" });
  };

  const goToSignUp = () => {
    navigation.navigate("Signup");
  };

  const onLogin = () => {
    navigation.navigate("AppEntry");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>User Login</Text>
      <View style={styles.formContainer}>
        <Text style={styles.formtitle}>Log In to your account</Text>
        <TextInput style={styles.input} placeholder="Email" />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
        />
        <View style={styles.row}>
          <TouchableOpacity
            style={styles.rememberMe}
            onPress={handleRememberMe}
          >
            <View
              style={[
                styles.checkbox,
                state.agreed ? styles.checkboxChecked : null,
              ]}
            />
            <Text style={styles.checkboxText}>Remember Me</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.forgotPassword}>
            <Text style={styles.forgotPasswordText}>Forgot Password</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.loginButton} onPress={onLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <Text style={styles.orText}>or</Text>
        <TouchableOpacity style={[styles.socialButton, styles.googleButton]}>
          <FontAwesome
            name="google"
            size={20}
            color="#FFFFFF"
            style={styles.socialIcon}
          />
          <Text style={styles.buttonTextSocial}>Sign in with Google</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.socialButton, styles.facebookButton]}>
          <FontAwesome
            name="facebook"
            size={20}
            color="#FFFFFF"
            style={styles.socialIcon}
          />
          <Text style={styles.buttonTextSocial}>Sign in with Facebook</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.signUpLink} onPress={goToSignUp}>
          <Text style={styles.signUpText}>Don't have an account? Sign up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2A2D3F",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    color: "#fff",
    fontWeight: "bold",
    marginBottom: 20,
  },
  formContainer: {
    width: "80%",
  },
  formtitle: {
    fontSize: 16,
    color: "#fff",
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: "#2A2D3F",
    backgroundColor: "#fff",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 15,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 30,
    marginBottom: 30,
  },
  rememberMe: {
    flexDirection: "row",
    alignItems: "center",
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 2,
    borderColor: "#FFFFFF",
    marginRight: 5,
  },
  checkboxChecked: {
    backgroundColor: "#FFFFFF",
  },
  checkboxText: {
    color: "#FFFFFF",
  },
  forgotPassword: {},
  forgotPasswordText: {
    color: "#FFFFFF",
  },
  loginButton: {
    backgroundColor: "#fff",
    paddingVertical: 12,
    borderRadius: 25,
    alignItems: "center",
    marginBottom: 10,
  },
  buttonText: {
    color: "#2A2D3F",
    fontSize: 16,
  },
  orText: {
    textAlign: "center",
    color: "#FFF",
    marginBottom: 10,
  },
  socialButton: {
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: "#FFFFFF",
    paddingVertical: 12,
    borderRadius: 25,
    alignItems: "center",
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "center",
  },
  googleButton: {
    borderColor: "#db4437",
  },
  facebookButton: {
    borderColor: "#3b5998",
  },
  socialIcon: {
    marginRight: 10,
  },
  buttonTextSocial: {
    color: "#fff",
  },
  signUpLink: {
    alignItems: "center",
  },
  signUpText: {
    color: "#fff",
  },
});

export default LoginScreen;
