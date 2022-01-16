import moment from "moment";
import React, { Component } from "react";
import { Animated, Text, TouchableOpacity, View } from "react-native";
import i18n from "../i18n/i18n";
import styles from "./StopWatchButtonStyle";

const StopWatchButton = ({
  time,
  startOnPressAction,
  timeOnPressAction,
  paused,
}) => {
  const timerOpacity = new Animated.Value(1);
  const Blink_delay = 500;

  const blinker = (toValue) => {
    if (paused) {
      Animated.timing(timerOpacity, {
        toValue,
        duration: Blink_delay,
        useNativeDriver: true,
      }).start(() => {
        blinker(toValue === 1 ? 0 : 1);
      });
    } else {
      Animated.timing(timerOpacity, {
        toValue: 1,
        duration: Blink_delay,
        useNativeDriver: true,
      }).start();
    }
  };
  blinker(0);
  if (time > 0) {
    return (
      <TouchableOpacity style={styles.button} onPress={timeOnPressAction}>
        <Animated.View style={[styles.button, { opacity: timerOpacity }]}>
          <Text style={styles.buttonText}>
            {moment.utc(time).format(i18n.Time_formate)}
          </Text>
          <Text style={[styles.buttonText, styles.buttonTextPause]}>
            {i18n.StopWatch.PAUSE}
          </Text>
        </Animated.View>
      </TouchableOpacity>
    );
  }
  return (
    <TouchableOpacity style={styles.button} onPress={startOnPressAction}>
      <Text style={styles.buttonText}>{i18n.StopWatch.START}</Text>
    </TouchableOpacity>
  );
};
export default StopWatchButton;
