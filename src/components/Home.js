import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import React from "react";
import Pin from "./Pin";

const Home = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Pin
          pin={{
            title: "Not Jus Dev Hoodie",
            image:
              "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/pinterest/3.jpeg",
          }}
        />
        <Pin
          pin={{
            title: "Programmer working on laptop computer in office studio",
            image:
              "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/pinterest/4.jpeg",
          }}
        />
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
