import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import Pin from "./Pin";
import Data from "../constants/Data";

const MasonaryList = ({ pin }) => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={{ flex: 1 }}>
          {/* <Pin pin={Data[0]} />
          <Pin pin={Data[2]} />
          <Pin pin={Data[4]} /> */}
          {Data.filter((item, index) => index % 2 === 0).map((Data) => (
            <Pin pin={Data} key={Data.id} />
          ))}
        </View>
        <View style={{ flex: 1 }}>
          {/* <Pin pin={Data[1]} />
          <Pin pin={Data[3]} />
          <Pin pin={Data[5]} /> */}
          {Data.filter((item, index) => index % 2 === 1).map((Data) => (
            <Pin pin={Data} key={Data.id} />
          ))}
        </View>
        <View style={{ flex: 1 }}>
          {/* <Pin pin={Data[1]} />
          <Pin pin={Data[3]} />
          <Pin pin={Data[5]} /> */}
          {Data.filter((item, index) => index % 3 === 0).map((Data) => (
            <Pin pin={Data} key={Data.id} />
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

export default MasonaryList;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingTop: 20,
    // backgroundColor: "rgb(255, 128, 223)",
  },
});
