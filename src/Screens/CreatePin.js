import React, { useState, useEffect } from "react";
import { Button, Image, View, Platform, TextInput } from "react-native";
import * as ImagePicker from "expo-image-picker";
// import { connect } from "react-redux";
// import { selectedImageAction } from "../store/Actions/Action";

export default function CreatePin() {
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState("");

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 0.5,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };
  const onSubmit = () => {};
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Button title="Upload Your Pin" onPress={pickImage} />
      {image && (
        <Image
          source={{ uri: image }}
          style={{ width: "100%", aspectRatio: 1 }}
        />
      )}
      <View
        style={{
          marginVertical: 20,
          borderWidth: 1,
          padding: 20,
          width: "80%",
          borderRadius: 10,
        }}
      >
        <TextInput
          placeholder="enter pin title here..."
          style={{ fontSize: 20, fontWeight: "500", fontStyle: "italic" }}
          value={title}
          onChangeText={setTitle}
        />
      </View>
      <Button title="Submit Pin" onPress={onSubmit} />
    </View>
  );
}
