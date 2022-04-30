import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StatusBar,
} from "react-native";

import { AntDesign, Entypo, FontAwesome } from "@expo/vector-icons";
import { COLOURS } from "../../constants/Data";

const SignInScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <StatusBar />
      <View style={styles.header}>
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 26,
            paddingTop: 25,
            color: "#000",
          }}
        >
          MY ACCOUNT
        </Text>
      </View>
      <Text style={styles.singInText}>Sign-In</Text>
      <Text
        style={{
          fontSize: 22,
          textAlign: "center",
          paddingHorizontal: 30,
          marginTop: 20,
          color: "#000",
        }}
      >
        Please enter the email and password registered with your {""}
        <Text
          style={{ color: "#FA6C09", fontWeight: "bold", fontStyle: "italic" }}
        >
          DoneWithIt {""}
        </Text>
        account
      </Text>
      <View style={styles.form}>
        <TextInput placeholder="Email" style={styles.inputText} type="email" />
        <View style={styles.passwordContainer}>
          <View style={{ flexDirection: "row" }}>
            <Entypo name="lock" size={24} color="#D85A27" />
            <TextInput
              placeholder="Password"
              secureTextEntry={true}
              style={styles.inputPasswordText}
            />
          </View>
          <View style={{ marginRight: 20 }}>
            <Entypo name="eye" size={24} color="#D85A27" />
          </View>
        </View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("category");
          }}
          style={{
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#FA6C09",
            width: "100%",
            height: 50,
            marginVertical: 30,
            borderRadius: 8,
            marginRight: 20,
          }}
        >
          <Text style={{ fontSize: 24, color: "#FAF4F1", fontWeight: "bold" }}>
            SIGN IN
          </Text>
        </TouchableOpacity>
        <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
      </View>

      <View style={{ flex: 3, alignItems: "center" }}>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 20,
              color: "#000",
            }}
          >
            OR
          </Text>
        </View>
        <TouchableOpacity style={styles.socialBtn}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <FontAwesome name="facebook" size={30} color="#FAF4F1" />
            <Text
              style={{
                fontSize: 20,
                color: "#FAF4F1",
                fontWeight: "bold",
                marginLeft: 30,
              }}
            >
              Sign In With Facebook
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialBtnGoogle}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <FontAwesome name="google" size={30} color="#FAF4F1" />
            <Text
              style={{
                fontSize: 20,
                color: "#FAF4F1",
                fontWeight: "bold",
                marginLeft: 30,
              }}
            >
              Sign In With Google
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={{ flex: 2 }}>
        <View>
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              marginLeft: 25,
              color: "#000",
            }}
          >
            New on DoneWithIt?
          </Text>
        </View>
        <View style={styles.createAccountBtn}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("register");
            }}
          >
            <Text style={styles.text}>Create an account</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 15,
  },

  form: {
    flex: 4,
    justifyContent: "center",
    alignItems: "flex-start",
    marginHorizontal: 20,
    marginTop: 40,
  },
  singInText: {
    marginLeft: 30,
    marginTop: 30,
    fontSize: 28,
    fontWeight: "bold",
    color: "gray",
  },
  inputText: {
    fontSize: 20,
    fontWeight: "bold",
    borderWidth: 1,
    borderColor: "black",
    width: "100%",
    height: 50,
    borderRadius: 8,
    paddingHorizontal: 20,
    backgroundColor: "#fff",
    marginTop: 30,
  },
  inputPasswordText: {
    flex: 0.9,
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 30,
  },
  passwordContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 1,
    // borderColor: COLOURS.lemonGreen,
    // backgroundColor: COLOURS.lemonGreen,
    width: "100%",
    height: 50,
    borderRadius: 8,
    marginTop: 20,
    paddingHorizontal: 20,
  },
  forgotPasswordText: {
    fontSize: 20,
    alignSelf: "flex-end",
    marginBottom: 20,
    textDecorationLine: "underline",
    color: "#000",
  },
  socialBtn: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "blue",
    width: "91%",
    height: 50,
    marginVertical: 20,
    borderRadius: 8,
    marginRight: 20,
    marginLeft: 20,
  },
  socialBtnGoogle: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FA6C09",
    width: "91%",
    height: 50,
    borderRadius: 8,
    marginRight: 20,
    marginLeft: 20,
  },
  createAccountBtn: {
    alignItems: "flex-end",
  },
  text: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
    padding: 10,
    borderWidth: 2,
    // borderColor: COLOURS.lemonGreen,
    marginTop: 10,
    marginBottom: 40,
    marginHorizontal: 30,
    borderRadius: 8,
    width: 200,
    height: 50,
    color: "#000",
  },
});
