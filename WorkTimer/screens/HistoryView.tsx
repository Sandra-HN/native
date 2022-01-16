import { SafeAreaView } from "react-native-safe-area-context";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Text, View, FlatList, TextInput } from "react-native";
import i18n from "./i18n/i18n";
import styles from "./styles/HistoryViewStyle";
import { useEffect, useState } from "react";

import React, { Component } from "react";
import PropTypes from "prop-types";
import moment from "moment";
import { ACTIVITY_STORAGE_KEY } from "./config/consts";

export default class HistoryView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      parseActivities: [],
    };

    this.getActivities = this.getActivities.bind(this);
    props.navigation.addListener("focus", this.getActivities);
  }
  async getActivities() {
    const storageKey = ACTIVITY_STORAGE_KEY;
    let activities = await AsyncStorage.getItem(storageKey);
    let parseActivities = [];
    if (activities !== null) {
      parseActivities = JSON.parse(activities);
    }
    this.setState({ parseActivities: parseActivities.reverse() });
  }
  renderItem({ item }) {
    return (
      <View style={styles.itemContainer}>
        <View style={{ flex: 4 }}>
          <Text style={styles.name}>{item.name}</Text>
        </View>
        <View style={styles.timeContainer}>
          <View>
            <Text style={styles.textdate}>
              {moment.utc(item.date).format(i18n.Date_formate)}
            </Text>
          </View>
          <View>
            <Text style={styles.textdate}>
              {moment.utc(item.timeSpent).format(i18n.Time_formate)}
            </Text>
          </View>
        </View>
      </View>
    );
  }
  render() {
    const { parseActivities } = this.state;
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>{i18n.HISTORY.HEADER}</Text>

        <FlatList
          data={parseActivities}
          renderItem={this.renderItem}
          keyExtractor={(item, index) => {
            return item.name + index;
          }}
        />
      </SafeAreaView>
    );
  }
}
