import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Pin from "../components/Pin";
import Data from "../constants/Data";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const MasonaryList = ({ pin }) => {
  const navigation = useNavigation();
  const goBack = () => {
    navigation.goBack();
  };
  return (
    <ScrollView>
      <TouchableOpacity
        onPress={goBack}
        style={{
          position: "absolute",
          top: 20,
          zIndex: 1,
          padding: 30,
        }}
      >
        <AntDesign name="leftcircle" size={30} color="white" />
      </TouchableOpacity>
      <View style={styles.container}>
        <View style={{ flex: 1 }}>
          {Data.filter((item, index) => index % 2 === 0).map((Data) => (
            <Pin pin={Data} key={Data.id} />
          ))}
        </View>
        <View style={{ flex: 1 }}>
          {Data.filter((item, index) => index % 2 === 1).map((Data) => (
            <Pin pin={Data} key={Data.id} />
          ))}
        </View>

        {/* <View style={{ flex: 1 }}>
          {Data.filter((item, index) => index % 3 === 0).map((Data) => (
            <Pin pin={Data} key={Data.id} />
          ))}
        </View> */}
      </View>
    </ScrollView>
  );
};

export default MasonaryList;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingTop: 90,
    backgroundColor: "#edf6f9",
  },
});
