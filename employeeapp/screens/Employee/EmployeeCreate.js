import React, { useState } from "react";
import { View, Modal, Alert, KeyboardAvoidingView } from "react-native";
import styles from "./EmployeeCreateStyle";
import { TextInput, Button } from "react-native-paper";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";

const EmployeeCreate = ({ navigation, route }) => {
  const getDetails = (type) => {
    if (route.params) {
      switch (type) {
        case "name":
          return route.params.name;
          break;
        case "email":
          return route.params.email;
          break;
        case "phone":
          return route.params.phone;
          break;
        case "picture":
          return route.params.picture;
          break;
        case "position":
          return route.params.position;
          break;
        case "salary":
          return route.params.salary;
          break;
        default:
          break;
      }
    }
    return "";
  };

  const [name, setName] = useState(getDetails("name"));
  const [phone, setPhone] = useState(getDetails("phone"));
  const [email, setEmail] = useState(getDetails("email"));
  const [salary, setSalary] = useState(getDetails("salary"));
  const [picture, setPicture] = useState(getDetails("picture"));
  const [position, setPosition] = useState(getDetails("position"));
  const [modal, setModal] = useState(false);
  const [enableShift, setEnableShift] = useState(false);
  const updateDetails = () => {
    fetch("http://10.0.2.2:3000/update", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: route.params._id,
        name,
        email,
        phone,
        picture,
        salary,
        position,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        Alert.alert(`${data.name} is updated`);
        navigation.navigate("Home");
      })
      .catch((err) => {
        console.log(err);
        Alert.alert("something went wrong!");
      });
  };
  const submitData = () => {
    fetch("http://10.0.2.2:3000/send-data", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        email: email,
        phone: phone,
        picture: picture,
        salary: salary,
        position: position,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        Alert.alert(`${data.name} is saved successfuly`);
        navigation.navigate("Home");
      })
      .catch((err) => {
        console.log(err);
        Alert.alert("something went wrong!");
      });
  };

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
      })
      .catch((err) => {
        console.log(err);
        Alert.alert("something went wrong!");
      });
  };
  return (
    <KeyboardAvoidingView
      behavior="position"
      style={styles.root}
      enabled={enableShift}
    >
      <View>
        <TextInput
          label="Name"
          value={name}
          mode="outlined"
          theme={theme}
          style={styles.inputStyle}
          onFocus={() => setEnableShift(false)}
          onChangeText={(text) => setName(text)}
        />
        <TextInput
          label="Email"
          value={email}
          mode="outlined"
          theme={theme}
          style={styles.inputStyle}
          onFocus={() => setEnableShift(false)}
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          label="Phone"
          value={phone}
          mode="outlined"
          keyboardType="number-pad"
          theme={theme}
          style={styles.inputStyle}
          onFocus={() => setEnableShift(false)}
          onChangeText={(text) => setPhone(text)}
        />
        <TextInput
          label="Salary"
          value={salary}
          mode="outlined"
          theme={theme}
          style={styles.inputStyle}
          onFocus={() => setEnableShift(true)}
          onChangeText={(text) => setSalary(text)}
        />
        <TextInput
          label="Position"
          value={position}
          mode="outlined"
          theme={theme}
          style={styles.inputStyle}
          onFocus={() => setEnableShift(true)}
          onChangeText={(text) => setPosition(text)}
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
        {route.params ? (
          <Button
            style={styles.inputStyle}
            icon="content-save"
            mode="contained"
            theme={theme}
            onPress={() => {
              updateDetails();
            }}
          >
            Update
          </Button>
        ) : (
          <Button
            style={styles.inputStyle}
            icon="content-save"
            mode="contained"
            theme={theme}
            onPress={() => {
              submitData();
            }}
          >
            Save
          </Button>
        )}
        <Modal
          animationType="slide"
          transparent={true}
          visible={modal}
          onRequestClose={() => {
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
    </KeyboardAvoidingView>
  );
};
const theme = {
  colors: {
    primary: "#006aff",
  },
};
export default EmployeeCreate;
