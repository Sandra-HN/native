import React, { useEffect, useState } from "react";
import { View, Image, Text, Linking, Platform, Alert } from "react-native";
import styles from "./ProfileStyle";
import { Button, Card, Title } from "react-native-paper";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialIcons, Entypo } from "@expo/vector-icons";
const Profile = (props) => {
  const { _id, name, phone, email, salary, picture, position } =
    props.route.params.item;

  const deleteEmployee = () => {
    fetch("http://10.0.2.2:3000/delete", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: _id,
      }),
    })
      .then((res) => res.json())
      .then((deletedEmployee) => {
        Alert.alert(`${deletedEmployee.name} deleted`);
        props.navigation.navigate("Home");
      })
      .catch((err) => {
        console.log(err);
        Alert.alert("something went wrong!");
      });
  };
  const openDial = () => {
    if (Platform.OS === "android") {
      Linking.openURL(`tel:${phone}`);
    } else {
      Linking.openURL(`telprompt:${phone}`);
    }
  };
  return (
    <View style={styles.root}>
      <LinearGradient colors={["#0033ff", "#6bc1ff"]} style={styles.linar} />
      <View style={styles.imgView}>
        <Image
          style={styles.img}
          source={{
            uri: picture
              ? picture
              : "https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1780&q=80",
          }}
        />
      </View>
      <View style={styles.titleView}>
        <Title>{name}</Title>
        <Text style={styles.titleText}>{position ? position : ""}</Text>
      </View>
      <Card
        style={styles.myCard}
        onPress={() => {
          Linking.openURL(`mailto:${email}`);
        }}
      >
        <View style={styles.cardContent}>
          <MaterialIcons name="email" size={32} color={theme.colors.primary} />
          <Text style={styles.myText}>{email ? email : ""}</Text>
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
          <Text style={styles.myText}>{phone ? phone : ""}</Text>
        </View>
      </Card>
      <Card style={styles.myCard}>
        <View style={styles.cardContent}>
          <MaterialIcons
            name="attach-money"
            size={32}
            color={theme.colors.primary}
          />

          <Text style={styles.myText}>{salary ? salary : ""}</Text>
        </View>
      </Card>
      <View style={styles.actionView}>
        <Button
          icon="account-edit"
          theme={theme}
          mode="contained"
          style={styles.myText}
          onPress={() => {
            props.navigation.navigate("Create", { ...props.route.params.item });
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
            deleteEmployee();
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
