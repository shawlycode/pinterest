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
import MasonaryList from "../components/MasonaryList";
import { FontAwesome, Entypo, Feather } from "@expo/vector-icons";

const Profile = () => {
  const [active, setActive] = useState(true);
  return (
    <ScrollView style={{ flex: 1, paddingTop: 50 }}>
      <View style={styles.container}>
        <View style={styles.icons}>
          <TouchableOpacity>
            <Feather
              name="arrow-left"
              size={34}
              color="black"
              style={{ marginRight: 240 }}
            />
          </TouchableOpacity>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <TouchableOpacity>
              <FontAwesome
                name="share-alt"
                size={24}
                color="black"
                style={{ paddingHorizontal: 30 }}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Entypo name="dots-three-horizontal" size={24} color="black" />
            </TouchableOpacity>
          </View>
        </View>
        <Image
          source={Data.image}
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
    justifyContent: "space-between",
    alignItems: "center",
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
