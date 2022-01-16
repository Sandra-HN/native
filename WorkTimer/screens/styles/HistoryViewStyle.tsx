import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 40,
    paddingBottom: 20,
    textAlign: "center",
    fontWeight: "bold",
    borderBottomWidth: 1,
    borderBottomColor: "#EAEAEA",
  },
  name: {
    fontSize: 26,
    textAlign: "left",
  },
  textdate: {
    fontSize: 20,
    lineHeight: 30,
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
    height: 80,
  },
});
export default styles;
