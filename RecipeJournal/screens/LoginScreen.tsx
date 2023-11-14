import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import auth from "@react-native-firebase/auth";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onLogin = () => {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        navigation.navigate("Home");
      })
      .catch((error) => {
        console.error("Login error", error);
      });
  };

  const styles = StyleSheet.create({
    sectionContainer: {
      marginTop: 32,
      paddingHorizontal: 24,
    },
    sectionTitle: {
      fontSize: 24,
      fontWeight: "600",
    },
    sectionDescription: {
      marginTop: 8,
      fontSize: 18,
      fontWeight: "400",
    },
    highlight: {
      fontWeight: "700",
    },
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
      borderColor: "gray",
      borderRadius: 8,
    },
    bottomBox: {
      marginHorizontal: 20,
    },
    buttonStyle: {
      backgroundColor: "grey",
      padding: 10,
      alignItems: "center",
      marginBottom: 2,
      height: 40,
      borderRadius: 20,
    },
    buttonFont: {
      color: "white",
    },
    inputBoxWrapper: {
      width: "100%",
      padding: 20,
      alignItems: "center",
    },
    outerContainer: {
      alignSelf: "center",
      marginTop: 50,
      borderLeftWidth: 20,
      borderRadius: 8,
      backgroundColor: "#e9aaa9",
      width: 240,
      height: 360,
    },
    innerContainer: {
      alignSelf: "center",
      marginTop: 20,
      width: 120,
    },
    whiteCircle: {
      height: 60,
      borderRadius: 30,
      width: 60,
      backgroundColor: "white",
      alignSelf: "center",
    },
    whiteBar: {
      position: "absolute",
      top: 30,
      height: 30,
      borderRadius: 15,
      width: 110,
      backgroundColor: "white",
      alignSelf: "center",
    },
    whiteBottomShape: {
      position: "absolute",
      top: 50,
      height: 80,
      borderBottomLeftRadius: 12,
      borderBottomRightRadius: 12,
      width: 70,
      backgroundColor: "white",
      alignSelf: "center",
    },
    innerWhiteBottomShape: {
      height: 10,
      width: 70,
      position: "absolute",
      bottom: 10,
      backgroundColor: "#e9aaa9",
    },
    titleText: {
      textAlign: "center",
      marginTop: 120,
      fontWeight: "bold",
      fontSize: 36,
    },
    loginContainer: {
      marginHorizontal: 20,
      marginTop: 16,
    },
    loginText: {
      textAlign: "center",
      fontSize: 16,
      color: "#4C331A",
    },
    signUpContainer: {
      flexDirection: "row",
      alignSelf: "center",
      marginTop: 12,
    },
    signUpText: {
      color: "#253C78",
    },
  });
  const onSignUp = () => {
    navigation.navigate("SignUp"); // Assuming 'SignUp' is the name of your sign-up screen in the navigator
  };

  const onChangePassword = (newPassword: React.SetStateAction<string>) => {
    setPassword(newPassword);
  };

  return (
    <>
      <View style={styles.outerContainer}>
        <View style={styles.innerContainer}>
          <View style={styles.whiteCircle} />
          <View style={styles.whiteBar} />
          <View style={styles.whiteBottomShape}>
            <View style={styles.innerWhiteBottomShape} />
          </View>
        </View>

        <Text style={styles.titleText}>{"Recipe \nJournal"}</Text>
      </View>
      <View style={styles.loginContainer}>
        <Text style={styles.loginText}>
          A login away from secret recipes🤤{" "}
        </Text>

        <TextInput
          style={styles.input}
          onChangeText={setEmail}
          placeholder="me@example.com"
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangePassword} // Function to update the password state
          placeholder="your password"
          secureTextEntry={true} // This makes the field secure
          keyboardType="default" // Change the keyboard type to default if needed
        />
      </View>

      <View style={styles.bottomBox}>
        <TouchableOpacity style={styles.buttonStyle} onPress={onLogin}>
          <Text style={styles.buttonFont}>Login</Text>
        </TouchableOpacity>
        <View style={styles.signUpContainer}>
          <Text style={styles.loginText}>New here? </Text>
          <TouchableOpacity onPress={onSignUp}>
            <Text style={styles.signUpText}>Sign up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default LoginScreen;
