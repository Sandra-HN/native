import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    paddingBottom: 50,
  },
  finishContainer: {
    justifyContent: "space-between",
  },
  finish: {
    fontSize: 60,
    fontWeight: "bold",
    color: "#ea4c4c",
  },
  title: {
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 50,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
export default styles;
