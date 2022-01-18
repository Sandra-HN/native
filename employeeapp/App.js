import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Contants from "expo-constants";
import Home from "./screens/Home/Home";
import EmployeeCreate from "./screens/Employee/EmployeeCreate";
import Profile from "./screens/Profile/Profile";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Home /> */}
      {/* <EmployeeCreate /> */}
      <Profile />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e0e0e0",
    marginTop: Contants.statusBarHeight,
    // alignItems: "center", //row
    // justifyContent: "center", //col
  },
});
