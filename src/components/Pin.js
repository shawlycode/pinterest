import { StyleSheet, Text, View, Image } from "react-native";
import React, { useState, useEffect } from "react";
import HeartBtn from "../components/HeartBtn";

const Pin = (props) => {
  const { image, title } = props.pin;
  const [ratio, setRatio] = useState(1);
  useEffect(() => {
    if (image) {
      Image.getSize(image, (width, height) => setRatio(width / height));
    }
  }, [image]);
  return (
    <View style={{ marginHorizontal: 10 }}>
      <View>
        <Image
          source={{
            uri: image,
          }}
          style={[styles.img, { aspectRatio: ratio }]}
        />
        <HeartBtn />
      </View>
      <Text style={{ fontSize: 20, fontWeight: "bold", padding: 10 }}>
        {title}
      </Text>
    </View>
  );
};

export default Pin;

const styles = StyleSheet.create({
  img: {
    width: "100%",
    borderRadius: 20,
  },
});
