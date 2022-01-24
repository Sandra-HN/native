import { StyleSheet, Text, View } from "react-native";

import Home from "./screens/Home/Home";
import EmployeeCreate from "./screens/Employee/EmployeeCreate";
import Profile from "./screens/Profile/Profile";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { reducer } from "./reducers/reducer";
import { createContext, useReducer } from "react";
import { reducer, initState } from "./reducers/reducer";
// const store = createStore(reducer);
export const myContext = createContext();

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
    </View>
  );
}
export default () => {
  const [state, dispatch] = useReducer(reducer, initState);
  return (
    //<Provider store={store}>
    <myContext.Provider value={{ state, dispatch }}>
      <NavigationContainer>
        <App />
      </NavigationContainer>
    </myContext.Provider>
    //</Provider>
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
