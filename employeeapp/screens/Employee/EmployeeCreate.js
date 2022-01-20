import React, { useState } from "react";
import { View, Modal, Alert } from "react-native";
import styles from "./EmployeeCreateStyle";
import { TextInput, Button } from "react-native-paper";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";

const EmployeeCreate = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [salary, setSalary] = useState("");
  const [picture, setPicture] = useState("");
  const [modal, setModal] = useState(false);
  const pickFormGallery = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      Alert.alert("you need to give up permision to work");
    } else {
      let data = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 0.5,
      });

      if (!data.cancelled) {
        let newFile = {
          uri: data.uri,
          type: `test/${data.uri.split(".")[1]}`,
          name: `test.${data.uri.split(".")[1]}`,
        };
        handleUpload(newFile);
      }
    }
  };

  const pickFormCamera = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== "granted") {
      // const { granted } = await Permissions.askAsync(Permissions.CAMERA);
      // if (granted) {
      Alert.alert("you need to give up permision to work");
    } else {
      let data = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 0.5,
      });
      if (!data.cancelled) {
        let newFile = {
          uri: data.uri,
          type: `test/${data.uri.split(".")[1]}`,
          name: `test.${data.uri.split(".")[1]}`,
        };
        handleUpload(newFile);
      }
    }
  };

  const handleUpload = (image) => {
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "employeeApp");
    data.append("cloud_name", "dbypdflem");
    fetch("http://api.cloudinary.com/v1_1/dbypdflem/image/upload", {
      method: "post",
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setPicture(data.url); //secure_url
        setModal(false);
      });
  };
  return (
    <View style={styles.root}>
      <TextInput
        label="Name"
        value={name}
        mode="outlined"
        theme={theme}
        style={styles.inputStyle}
        onChangeText={(text) => setName(text)}
      />
      <TextInput
        label="Email"
        value={email}
        mode="outlined"
        theme={theme}
        style={styles.inputStyle}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        label="Phone"
        value={phone}
        mode="outlined"
        keyboardType="number-pad"
        theme={theme}
        style={styles.inputStyle}
        onChangeText={(text) => setPhone(text)}
      />
      <TextInput
        label="Salary"
        value={salary}
        mode="outlined"
        theme={theme}
        style={styles.inputStyle}
        onChangeText={(text) => setSalary(text)}
      />

      <Button
        style={styles.inputStyle}
        icon={picture == "" ? "upload" : "check"}
        mode="contained"
        theme={theme}
        onPress={() => {
          setModal(true);
        }}
      >
        Upload Image
      </Button>
      <Button
        style={styles.inputStyle}
        icon="content-save"
        mode="contained"
        theme={theme}
        onPress={() => {
          console.log("saved");
        }}
      >
        Save
      </Button>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modal}
        onRequestClose={() => {
          console.log("pressed");
          setModal(false);
        }}
      >
        <View style={styles.modalView}>
          <View style={styles.modalButtonView}>
            <Button
              icon="camera"
              theme={theme}
              mode="contained"
              style={styles.inputStyle}
              onPress={() => pickFormCamera()}
            >
              Camera
            </Button>
            <Button
              icon="image-area"
              theme={theme}
              mode="contained"
              style={styles.inputStyle}
              onPress={() => pickFormGallery()}
            >
              Gallery
            </Button>
          </View>
          <Button
            // icon="camera"
            // mode="contained"
            theme={theme}
            style={styles.inputStyle}
            onPress={() => {
              setModal(false);
            }}
          >
            Cancel
          </Button>
        </View>
      </Modal>
    </View>
  );
};
const theme = {
  colors: {
    primary: "#006aff",
  },
};
export default EmployeeCreate;
