import { AppState, TouchableOpacity } from "react-native";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import { FontAwesome } from "@expo/vector-icons";
import useColorScheme from "../hooks/useColorScheme";
import i18n from "./i18n/i18n";
import React from "react";
import moment from "moment";
import styles from "./styles/TabTwoScreenStyle";

import AsyncStorage from "@react-native-async-storage/async-storage";
import StopWatchButton from "./components/StopWatchButton";
class TabTwoScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      time: 0,
      paused: false,
    };
    this.handleAppStateChange = this.handleAppStateChange.bind(this);
    this.startTimer = this.startTimer.bind(this);
    this.pauseTimer = this.pauseTimer.bind(this);
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
    const readtime = parseInt(await AsyncStorage.getItem("@time"));
    const readappStateChangedTimeStamp = parseInt(
      await AsyncStorage.getItem("@appStateChangedTimeStamp")
    );

    const timeDiff = now - readappStateChangedTimeStamp;
    const newTime = readtime + timeDiff;

    const isPaused = await AsyncStorage.getItem("@isPaused");

    if (nextAppState == "active") {
      let waspaused = isPaused && isPaused == "true";
      let newstate = { time: readtime, paused: waspaused };
      if (!waspaused) {
        newstate.time = newTime;
      }
      this.setState(newstate, this.startTimer);
    } else {
      await AsyncStorage.setItem(
        "@isPaused",
        paused === true ? "true" : "false"
      );
      await AsyncStorage.setItem("@time", time + "");
      await AsyncStorage.setItem("@appStateChangedTimeStamp", now + "");
    }
  }
  startTimer() {
    this.clearTimer();
    this.timerIntervalId = setInterval(() => {
      const { time, paused } = this.state;
      if (!paused) {
        this.setState(
          {
            time: time + 1000,
          },
          () => {
            console.log("press start", time);
          }
        );
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
  render() {
    const { time, paused } = this.state;
    return (
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
          <TouchableOpacity
            style={styles.finishContainer}
            onPress={() => {
              this.clearTimer();

              this.setState({
                time: 0,
              });
            }}
          >
            <Text style={styles.finish}>{i18n.HOME.FINISH}</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default TabTwoScreen;
