import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  linar: {
    height: "20%",
  },
  img: {
    marginTop: -140 / 2,
    width: 140,
    height: 140,
    borderRadius: 140 / 2,
  },
  imgView: {
    alignItems: "center",
  },
  titleView: {
    alignItems: "center",
    margin: 15,
  },
  titleText: {
    fontSize: 15,
  },
  myText: {
    fontSize: 18,
    marginTop: 3,
    marginLeft: 5,
  },
  myCard: {
    margin: 3,
  },
  cardContent: {
    flexDirection: "row",
    padding: 8,
  },
  actionView: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
  },
});
export default styles;
