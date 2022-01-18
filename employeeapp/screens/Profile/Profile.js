import React, { useState } from "react";
import { View, Image, Text, Linking, Platform } from "react-native";
import styles from "./ProfileStyle";
import { Button, Card, Title } from "react-native-paper";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialIcons, Entypo } from "@expo/vector-icons";
const Profile = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [salary, setSalary] = useState("");
  const [picture, setPicture] = useState("");
  const [modal, setModal] = useState(false);

  const openDial = () => {
    if (Platform.OS === "android") {
      Linking.openURL("tel:123456");
    } else {
      Linking.openURL("telprompt:123456");
    }
  };
  return (
    <View style={styles.root}>
      <LinearGradient colors={["#0033ff", "#6bc1ff"]} style={styles.linar} />
      <View style={styles.imgView}>
        <Image
          style={styles.img}
          source={{
            uri: "https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1780&q=80",
          }}
        />
      </View>
      <View style={styles.titleView}>
        <Title>Sandra Altheeb Hnaidy</Title>
        <Text style={styles.titleText}>Web Developer</Text>
      </View>
      <Card
        style={styles.myCard}
        onPress={() => {
          Linking.openURL("mailto:abc@abc.com");
        }}
      >
        <View style={styles.cardContent}>
          <MaterialIcons name="email" size={32} color={theme.colors.primary} />
          <Text style={styles.myText}>abc@abc.com</Text>
        </View>
      </Card>
      <Card
        style={styles.myCard}
        onPress={() => {
          openDial();
        }}
      >
        <View style={styles.cardContent}>
          <Entypo name="phone" size={32} color={theme.colors.primary} />
          <Text style={styles.myText}>123456</Text>
        </View>
      </Card>
      <Card style={styles.myCard}>
        <View style={styles.cardContent}>
          <MaterialIcons
            name="attach-money"
            size={32}
            color={theme.colors.primary}
          />

          <Text style={styles.myText}>8 LPA</Text>
        </View>
      </Card>
      <View style={styles.actionView}>
        <Button
          icon="account-edit"
          theme={theme}
          mode="contained"
          style={styles.myText}
          onPress={() => {
            console.log("pressed");
          }}
        >
          Edit
        </Button>
        <Button
          icon="delete"
          theme={theme}
          mode="contained"
          style={styles.myText}
          onPress={() => {
            console.log("pressed");
          }}
        >
          Fire Employee
        </Button>
      </View>
    </View>
  );
};
const theme = {
  colors: {
    primary: "#006aff",
  },
};
export default Profile;
