import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  actionsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 65,
  },
  btnText: {
    fontSize: 24,
    textTransform: "lowercase",
  },
  button: {
    height: 44,
    width: 134,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  activityNameLabel: {
    fontSize: 16,
  },
  activityNameInput: {
    fontSize: 16,
    borderRadius: 5,
    borderColor: "#848484",
    borderWidth: 1,
    height: 44,
    marginTop: 7,
  },
  title: {
    fontSize: 40,
    flex: 2,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 40,
    flex: 2,
    textAlign: "center",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
export default styles;
