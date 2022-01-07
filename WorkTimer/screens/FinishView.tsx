import React from "react";
import {
  Button,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from "react-native";
const FinishView = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Text>You just spent</Text>
      <Text>01:15:00</Text>
      <Text>Activity name</Text>
      <TextInput />
      <TouchableOpacity>
        <Text>Cancel</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text>Save</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
export default FinishView;
