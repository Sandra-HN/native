import AsyncStorage from "@react-native-async-storage/async-storage";
import moment from "moment";
import React, { useState } from "react";
import {
  Button,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import ActionButton from "./ActionButton";
import i18n from "./i18n/i18n";
import ResponsiveCentered from "./ResponsiveCentered";
import styles from "./styles/FinishViewStyle";

const FinishView = (props) => {
  const [name, setName] = useState("");
  const timeSpent = props.route.params.timeSpent;
  const saveTime = async () => {
    const storageKey = "@activities";
    let activities = await AsyncStorage.getItem(storageKey);

    if (activities === null) {
      activities = [];
    } else {
      activities = JSON.parse(activities);
    }
    const date = new Date().getTime();
    activities.push({
      name,
      timeSpent,
      date,
    });
    console.log("activities", activities);
    await AsyncStorage.setItem(storageKey, JSON.stringify(activities));
    props.navigation.goBack();
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flex: 4, justifyContent: "space-between" }}>
        {/* <View style={{ flex: 1 }} /> */}
        <Text style={styles.title}>{i18n.FINISH.HEADER}</Text>
        <Text style={styles.subtitle}>
          {moment.utc(timeSpent).format(i18n.Time_formate)}
        </Text>
        <View style={{ flex: 0.2 }} />
      </View>
      <View style={{ flex: 1 }}>
        <ResponsiveCentered>
          <Text style={styles.activityNameLabel}>
            {i18n.FINISH.ACTIVITY_NAME}
          </Text>
        </ResponsiveCentered>
        <ResponsiveCentered>
          <TextInput
            style={styles.activityNameInput}
            value={name}
            onChangeText={(e) => {
              setName(e);
            }}
          />
        </ResponsiveCentered>
      </View>
      <View style={{ flex: 5 }}>
        <ResponsiveCentered>
          <View style={styles.actionsContainer}>
            <ActionButton
              label={i18n.CANCEL}
              backgroundColor={"#F39527"}
              textColor={"#fff"}
              onPress={() => {
                props.navigation.goBack();
              }}
            />
            <ActionButton
              label={i18n.SAVE}
              backgroundColor={"#00CD5E"}
              textColor={"#fff"}
              onPress={saveTime}
            />
          </View>
        </ResponsiveCentered>
      </View>
    </SafeAreaView>
  );
};
export default FinishView;
