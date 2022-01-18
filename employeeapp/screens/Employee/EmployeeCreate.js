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
        icon="camera"
        mode="contained"
        onPress={() => {
          console.log("pressed");
          setModal(true);
        }}
      >
        Press Me
      </Button>
      <Modal
        animationType="slide"
        transparent={false}
        visible={modal}
        onRequestClose={() => {
          console.log("pressed");

          setModal(false);
        }}
      >
        <View>
          <View style={styles.modalButtonView}>
            <Button
              icon="camera"
              mode="contained"
              onPress={() => {
                console.log("pressed");
                setModal(false);
              }}
            >
              cancel
            </Button>
            <Button
              icon="camera"
              mode="contained"
              onPress={() => {
                console.log("pressed");
                setModal(false);
              }}
            >
              cancel
            </Button>
          </View>
          <Button
            icon="camera"
            // mode="contained"
            onPress={() => {
              console.log("pressed");
              setModal(false);
            }}
          >
            cancel
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
