import React, { useState } from "react";
import { View, Modal } from "react-native";
import styles from "./EmployeeCreateStyle";
import { TextInput, Button } from "react-native-paper";

const EmployeeCreate = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [salary, setSalary] = useState("");
  const [picture, setPicture] = useState("");
  const [modal, setModal] = useState(false);
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
        icon="upload"
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
              onPress={() => {
                console.log("pressed");
              }}
            >
              Camera
            </Button>
            <Button
              icon="image-area"
              theme={theme}
              mode="contained"
              style={styles.inputStyle}
              onPress={() => {
                console.log("pressed");
              }}
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
