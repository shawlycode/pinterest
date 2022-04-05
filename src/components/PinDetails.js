import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect } from "react";
import Data from "../constants/Data";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";

const PinDetails = () => {
  const navigation = useNavigation();
  // const Pin = Data[1];
  const [ratio, setRatio] = useState(1);
  const route = useRoute();
  const pinId = route.params?.id;
  const pin = Data.find((p) => p.id === pinId);
  useEffect(() => {
    if (Data.image) {
      Image.getSize(Data.image, (width, height) => setRatio(width / height));
    }
  }, [pin]);

  const goBack = () => {
    navigation.goBack();
  };
  if (!pin) {
    <Text>Item Not Found</Text>;
  }
  return (
    <SafeAreaView
      style={{
        backgroundColor: "black",
        height: "100%",
      }}
    >
      <StatusBar barStyle="light" />
      <View
        style={{
          height: "100%",
          backgroundColor: "#fff",
          borderTopLeftRadius: 50,
          borderTopRightRadius: 50,
        }}
      >
        <Image
          source={{ uri: pin.image }}
          style={[styles.image, { aspectRatio: ratio }]}
        />

        <Text style={styles.title}>{pin.title}</Text>
        <TouchableOpacity style={styles.arrowBack} onPress={goBack}>
          <Ionicons
            name="chevron-back-circle-sharp"
            size={50}
            color="#ffc4d6"
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default PinDetails;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    margin: 15,
    textAlign: "center",
    lineHeight: 30,
  },
  arrowBack: {
    position: "absolute",
    top: 25,
    left: 20,
  },
});
