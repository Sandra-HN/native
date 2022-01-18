import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  root: { flex: 1 },
  inputStyle: { margin: 5 },
  modalView: {
    position: "absolute",
    bottom: 2,
    width: "100%",
    backgroundColor: "#fff",
  },
  modalButtonView: { flexDirection: "row", justifyContent: "space-around" },
});
export default styles;
