import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  fab: { position: "absolute", margin: 16, right: 0, bottom: 0 },
  mycard: {
    margin: 5,
  },
  cardView: {
    padding: 6,
    flexDirection: "row",
    alignItems: "center",
  },
  cardDesc: {
    marginLeft: 10,
  },
  text: {
    fontSize: 18,
  },
  img: {
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
  },
});
export default styles;
