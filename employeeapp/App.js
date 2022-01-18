import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Contants from "expo-constants";
import Home from "./screens/Home/Home";
import EmployeeCreate from "./screens/Employee/EmployeeCreate";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Home /> */}
      <EmployeeCreate />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ebebeb",
    marginTop: Contants.statusBarHeight,
    // alignItems: "center", //row
    // justifyContent: "center", //col
  },
});
