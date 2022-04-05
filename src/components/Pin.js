import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
} from "react-native";
import React, { useState, useEffect } from "react";
import HeartBtn from "../components/HeartBtn";
import { useNavigation } from "@react-navigation/native";
import Data from "../constants/Data";

const Pin = (props) => {
  const navigation = useNavigation();
  const { image, title, id } = props.pin;
  const [ratio, setRatio] = useState(1);
  // console.log(route);
  useEffect(() => {
    if (image) {
      Image.getSize(image, (width, height) => setRatio(width / height));
    }
  }, [image]);

  const details = () => {
    navigation.navigate("details", { id });
  };
  return (
    <SafeAreaView>
      <StatusBar barStyle="dark-content" />
      <TouchableOpacity style={{ marginHorizontal: 6 }} onPress={details}>
        <View>
          <Image
            source={{
              uri: image,
            }}
            style={[styles.img, { aspectRatio: ratio }]}
          />
          <HeartBtn />
        </View>
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            padding: 10,
            color: "#181818",
          }}
          numberOfLines={1}
        >
          {title}
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Pin;

const styles = StyleSheet.create({
  img: {
    width: "100%",
    borderRadius: 20,
  },
});
