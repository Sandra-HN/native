import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 40,
    textAlign: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#EAEAEA",
  },
  name: {
    fontSize: 18,
  },
  textdate: {
    fontSize: 14,
  },
  timeContainer: {
    flex: 2,
    alignItems: "flex-end",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  itemContainer: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#EAEAEA",
    justifyContent: "space-between",
    padding: 12,
    height: 60,
  },
});
export default styles;
