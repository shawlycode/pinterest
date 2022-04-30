import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import React, { useState, useEffect } from "react";
import Data from "../constants/Data";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import MapView from "react-native-maps";

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
          backgroundColor: "#fae1dd",
          borderTopLeftRadius: 50,
          borderTopRightRadius: 50,
        }}
      >
        <Image
          source={{ uri: pin.image }}
          style={[styles.image, { aspectRatio: ratio }]}
        />

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginHorizontal: 20,
          }}
        >
          <Text style={styles.title}>{pin.title}</Text>
          <View
            style={{
              width: 150,
              height: 40,
              padding: 10,
              backgroundColor: "#f72585",
              borderRadius: 20,
            }}
          >
            <Text
              style={{
                fontSize: 20,
                textAlign: "center",
                fontWeight: "bold",
                color: "#fff",
              }}
            >
              &#x20B5;{pin.price}.00
            </Text>
          </View>
        </View>
        <TouchableOpacity style={styles.arrowBack} onPress={goBack}>
          <Ionicons
            name="chevron-back-circle-sharp"
            size={50}
            color="#ffc4d6"
          />
        </TouchableOpacity>
        <View
          style={{
            flexDirection: "row",
            marginHorizontal: 30,
            alignItems: "center",
          }}
        >
          <View
            style={{
              backgroundColor: "#caf0f8",
              width: 50,
              height: 50,
              borderRadius: 30,
              marginRight: 20,
              marginBottom: 20,
            }}
          >
            <Image
              source={pin.profile}
              style={{ width: 50, height: 50, resizeMode: "contain" }}
            />
          </View>
          <View>
            <Text>Orlando Shawly</Text>
            <Text></Text>
          </View>
        </View>
        <View>
          <View style={styles.container}>
            <MapView
              style={styles.map}
              initialRegion={{
                latitude: 5.614818,
                longitude: -0.205874,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              }}
              showsUserLocation={true}
            />
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            marginTop: 15,
          }}
        >
          <TouchableOpacity
            style={{
              backgroundColor: "#ff477e",
              width: 100,
              height: 40,
              justifyContent: "center",
              borderRadius: 20,
            }}
          >
            <Text
              style={{
                textAlign: "center",
                fontSize: 20,
                fontWeight: "bold",
                color: "#fff",
              }}
            >
              Call
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: "#ff477e",
              width: 130,
              height: 40,
              justifyContent: "center",
              borderRadius: 20,
            }}
          >
            <Text
              style={{
                textAlign: "center",
                fontSize: 20,
                fontWeight: "bold",
                color: "#fff",
              }}
            >
              Make Offer
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: "#ff477e",
              width: 130,
              height: 40,
              justifyContent: "center",
              borderRadius: 20,
              padding: 10,
            }}
          >
            <Text
              style={{
                textAlign: "center",
                fontSize: 20,
                fontWeight: "bold",
                color: "#fff",
              }}
            >
              Buy Now
            </Text>
          </TouchableOpacity>
        </View>
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
  map: {
    width: Dimensions.get("window").width,
    height: 200,
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
