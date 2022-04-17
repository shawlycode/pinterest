import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";
import DropShadow from "react-native-drop-shadow";

const Button = ({ title, image, onPress }) => {
  return (
    <View>
      <DropShadow style={styles.shadowProp}>
        <TouchableOpacity
          onPress={() => onPress()}
          style={{
            width: "100%",
            height: 100,
            borderRadius: 10,
            flexDirection: "row",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <Text
            style={{ fontSize: 24, fontWeight: "bold", fontStyle: "italic" }}
          >
            {title}
          </Text>
          <View style={styles.img_container}>
            <Image source={image} style={styles.img} />
          </View>
        </TouchableOpacity>
      </DropShadow>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  img: {
    width: 100,
    height: 100,
    resizeMode: "contain",
    borderRadius: 100,
    // position: "absolute",
    // bottom: 10,
    // left: 30,
  },
  img_container: {
    width: 80,
    height: 80,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(00,0,40,0.6)",
    borderRadius: 100,
  },
  shadowProp: {
    shadowColor: "#171717",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.4,
    shadowRadius: 2,
  },
});
