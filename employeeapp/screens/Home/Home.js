import { Text, View, Image, FlatList, Alert } from "react-native";
import { Card, FAB } from "react-native-paper";
import styles from "./HomeStyle";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

const Home = ({ navigation }) => {
  // const [data, setData] = useState([]);
  // const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const { data, loading } = useSelector((state) => {
    return state;
  });
  const fetchData = () => {
    fetch("http://10.0.2.2:3000/")
      .then((res) => res.json())
      .then((results) => {
        // setData(results);
        // setLoading(false);
        dispatch({ type: "ADD_DATA", payload: results });
        dispatch({ type: "SET_LOADING", payload: false });
      })
      .catch((err) => {
        console.log(err);
        Alert.alert("something went wrong!");
      });
  };
  useEffect(() => {
    fetchData();
  }, []);

  const renderList = (e) => {
    return (
      <Card
        style={styles.mycard}
        key={e._id}
        onPress={() => navigation.navigate("Profile", { item: e })}
      >
        <View style={styles.cardView}>
          <Image
            style={styles.img}
            source={{
              uri: e.picture
                ? e.picture
                : "https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1780&q=80",
            }}
          />
          <View style={styles.cardDesc}>
            <Text style={styles.text}>{e.name ? e.name : ""}</Text>
            <Text style={styles.text}>{e.position ? e.position : ""}</Text>
          </View>
        </View>
      </Card>
    );
  };

  return (
    <View style={styles.root}>
      <FlatList
        data={data}
        renderItem={({ item }) => {
          return renderList(item);
        }}
        keyExtractor={(item) => item._id}
        onRefresh={() => fetchData()}
        refreshing={loading}
      />
      <FAB
        style={styles.fab}
        small={false}
        icon="plus"
        theme={{ colors: { accent: "#006aff" } }}
        onPress={() => navigation.navigate("Create")}
      />
    </View>
  );
};
export default Home;
