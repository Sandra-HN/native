import { StyleSheet, Text, View } from "react-native";
import Contants from "expo-constants";
import Home from "./screens/Home/Home";
import EmployeeCreate from "./screens/Employee/EmployeeCreate";
import Profile from "./screens/Profile/Profile";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
const Stack = createStackNavigator();
const myOptions = {
  title: "My Sweet Home",
  headerTintColor: "#fff",
  headerStyle: {
    backgroundColor: "#006aff",
  },
};

function App() {
  return (
    <View style={styles.container}>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={myOptions} />
        <Stack.Screen
          name="Create"
          component={EmployeeCreate}
          options={{ ...myOptions, title: "Create Employee" }}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{ ...myOptions, title: "Profile" }}
        />
      </Stack.Navigator>
      {/* <Home /> */}
      {/* <EmployeeCreate /> */}
      {/* <Profile /> */}
    </View>
  );
}
export default () => {
  return (
    <NavigationContainer>
      <App />
    </NavigationContainer>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e0e0e0",
    //marginTop: Contants.statusBarHeight,
    // alignItems: "center", //row
    // justifyContent: "center", //col
  },
});
