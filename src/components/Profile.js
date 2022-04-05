import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import Data from "../constants/Data";
import MasonaryList from "./MasonaryList";
import { FontAwesome, Entypo } from "@expo/vector-icons";

const Profile = () => {
  const [active, setActive] = useState(true);
  return (
    <ScrollView style={{ flex: 1, paddingTop: 50 }}>
      <View style={styles.container}>
        <View style={styles.icons}>
          <FontAwesome
            name="share-alt"
            size={24}
            color="black"
            style={{ paddingHorizontal: 30 }}
          />
          <Entypo name="dots-three-horizontal" size={24} color="black" />
        </View>
        <Image
          source={{
            uri: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/pinterest/1.jpeg",
          }}
          style={{ width: 100, height: 100, borderRadius: 100 }}
        />
        <Text style={{ fontSize: 24, fontWeight: "bold", margin: 10 }}>
          Orlando kutina
        </Text>

        <Text style={styles.subscription}>
          123 followers <Entypo name="dot-single" size={20} color="black" /> 342
          following
        </Text>
        <View style={styles.createPin}>
          <TouchableOpacity>
            <Text style={{ paddingHorizontal: 30, fontSize: 16 }}>create</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnActive}>
            <Text style={{ color: "#fff", fontSize: 16 }}>Saved</Text>
          </TouchableOpacity>
        </View>
      </View>
      <MasonaryList />
    </ScrollView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  subscription: {
    fontSize: 16,
    color: "grey",
  },
  icons: {
    flexDirection: "row",
    alignSelf: "flex-end",
    paddingHorizontal: 20,
  },
  createPin: {
    flexDirection: "row",
    marginVertical: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  btnActive: {
    width: 60,
    height: 40,
    borderRadius: 30,
    backgroundColor: "#000",
    justifyContent: "center",
    alignItems: "center",
  },
});
