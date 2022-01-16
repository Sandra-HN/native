import { AppState, SafeAreaView, TouchableOpacity } from "react-native";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import { FontAwesome } from "@expo/vector-icons";
import useColorScheme from "../hooks/useColorScheme";
import i18n from "./i18n/i18n";
import React from "react";
import styles from "./styles/HomeViewStyle";

import AsyncStorage from "@react-native-async-storage/async-storage";
import StopWatchButton from "./components/StopWatchButton";
import {
  APP_STATE_CHANGED_TIMESTAMP_STORAGE_KEY,
  IS_PAUSED_STORAGE_KEY,
  TIME_STORAGE_KEY,
} from "./config/consts";
import { initialWindowMetrics } from "react-native-safe-area-context";
class HomeView extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      time: 0,
      paused: false,
    };
    this.startTimer = this.startTimer.bind(this);
    this.pauseTimer = this.pauseTimer.bind(this);
    this.handleAppStateChange = this.handleAppStateChange.bind(this);
    this.handleAppStateChange("initial");
  }
  componentDidMount() {
    AppState.addEventListener("change", this.handleAppStateChange);
  }
  componentUnmount() {
    AppState.removeEventListener("change", this.handleAppStateChange);
  }

  async handleAppStateChange(nextAppState) {
    console.log("change", nextAppState);
    const now = new Date().getTime();
    const { time, paused } = this.state;
    const readtime = parseInt(await AsyncStorage.getItem(TIME_STORAGE_KEY));
    const readappStateChangedTimeStamp = parseInt(
      await AsyncStorage.getItem(APP_STATE_CHANGED_TIMESTAMP_STORAGE_KEY)
    );

    const timeDiff = now - readappStateChangedTimeStamp;
    const newTime = readtime + timeDiff;
    const isPaused = await AsyncStorage.getItem(IS_PAUSED_STORAGE_KEY);

    if (nextAppState == "active" || nextAppState == "initial") {
      let waspaused = isPaused && isPaused == "true";
      let newstate = { time: readtime, paused: waspaused };
      if (!waspaused) {
        newstate.time = newTime;
      }
      this.setState(newstate, this.startTimer);
    } else {
      await AsyncStorage.setItem(
        IS_PAUSED_STORAGE_KEY,
        paused === true ? "true" : "false"
      );
      await AsyncStorage.setItem(TIME_STORAGE_KEY, time + "");
      await AsyncStorage.setItem(
        APP_STATE_CHANGED_TIMESTAMP_STORAGE_KEY,
        now + ""
      );
    }
  }
  startTimer() {
    this.clearTimer();
    this.timerIntervalId = setInterval(() => {
      const { time, paused } = this.state;
      if (!paused) {
        this.setState({
          time: time + 1000,
        });
      }
    }, 1000);
  }
  clearTimer() {
    if (this.timerIntervalId) {
      clearInterval(this.timerIntervalId);
    }
  }
  pauseTimer() {
    const { paused } = this.state;
    this.setState({ paused: !paused });
  }
  TabBarIcon(props: {
    name: React.ComponentProps<typeof FontAwesome>["name"];
    color: string;
  }) {
    return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
  }
  renderFinishButton() {
    const { time, paused } = this.state;
    if (time && !paused) {
      return (
        <TouchableOpacity
          onPress={() => {
            this.clearTimer();
            console.log("FINISH COUNTING and NAVIGATE TO THE NEXT PAGE", time);
            this.props.navigation.navigate("Finish", { timeSpent: time });
            this.setState({
              time: 0,
            });
          }}
        >
          <Text style={HomeViewStyles.finishButtonText}>
            {i18n.HOME.FINISH_BTN_CAPTION}
          </Text>
        </TouchableOpacity>
      );
    }
    return null;
  }
  render() {
    const { time, paused } = this.state;
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}>
          {/* <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <EditScreenInfo path="/screens/TabTwoScreen.tsx" /> */}
          <Text style={styles.title}>
            {i18n.HOME.WELCOME_HEADER}
            <this.TabBarIcon name="sun-o" color={"#f2f542"} />
          </Text>
          <View
            style={{
              flex: 2,
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <StopWatchButton
              paused={paused}
              time={time}
              timeOnPressAction={this.pauseTimer}
              startOnPressAction={this.startTimer}
            />
            {time > 0 ? (
              <TouchableOpacity
                style={styles.finishContainer}
                onPress={() => {
                  this.clearTimer();

                  this.props.navigation.navigate("Finish", { timeSpent: time });
                  this.setState({
                    time: 0,
                  });
                }}
              >
                <Text style={styles.finish}>{i18n.HOME.FINISH}</Text>
              </TouchableOpacity>
            ) : null}
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

export default HomeView;
