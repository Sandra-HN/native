import React, { useState } from "react";
import { View, Image, Text, Linking, Platform } from "react-native";
import styles from "./ProfileStyle";
import { Button, Card, Title } from "react-native-paper";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialIcons, Entypo } from "@expo/vector-icons";
const Profile = (props) => {
  const { id, name, phone, email, salary, picture, position } =
    props.route.params.item;

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
            uri: picture,
          }}
        />
      </View>
      <View style={styles.titleView}>
        <Title>{name}</Title>
        <Text style={styles.titleText}>{position}</Text>
      </View>
      <Card
        style={styles.myCard}
        onPress={() => {
          Linking.openURL(`mailto:${email}`);
        }}
      >
        <View style={styles.cardContent}>
          <MaterialIcons name="email" size={32} color={theme.colors.primary} />
          <Text style={styles.myText}>{email}</Text>
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
          <Text style={styles.myText}>{phone}</Text>
        </View>
      </Card>
      <Card style={styles.myCard}>
        <View style={styles.cardContent}>
          <MaterialIcons
            name="attach-money"
            size={32}
            color={theme.colors.primary}
          />

          <Text style={styles.myText}>{salary}</Text>
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
