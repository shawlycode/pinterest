import { StyleSheet, View, TouchableOpacity } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";

const HeartBtn = () => {
  const onLike = () => {};
  return (
    <View>
      <TouchableOpacity style={styles.heartBtn} onPress={onLike}>
        <AntDesign name="hearto" size={20} color="red" />
      </TouchableOpacity>
    </View>
  );
};

export default HeartBtn;

const styles = StyleSheet.create({
  heartBtn: {
    width: 30,
    height: 30,
    backgroundColor: "#d3cfd4",
    borderRadius: 100,
    position: "absolute",
    bottom: 0,
    right: 0,
    margin: 5,
    justifyContent: "center",
    alignItems: "center",
  },
});
