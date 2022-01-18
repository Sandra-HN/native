import { StatusBar } from "expo-status-bar";
import { Text, View, Image, FlatList } from "react-native";
import Contants from "expo-constants";
import { Card, FAB } from "react-native-paper";
import styles from "./HomeStyle";

const Home = () => {
  const data = [
    {
      id: 1,
      name: "name1",
      position: "web dev",
      profile:
        "https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1780&q=80",
    },
    {
      id: 2,
      name: "name2",
      position: "web dev",
      profile:
        "https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1780&q=80",
    },
    {
      id: 3,
      name: "name3",
      position: "web dev",
      profile:
        "https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1780&q=80",
    },
    {
      id: 4,
      name: "name4",
      position: "web dev",
      profile:
        "https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1780&q=80",
    },
    {
      id: 5,
      name: "name5",
      position: "web dev",
      profile:
        "https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1780&q=80",
    },
    {
      id: 6,
      name: "name6",
      position: "web dev",
      profile:
        "https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1780&q=80",
    },
    {
      id: 7,
      name: "name7",
      position: "web dev",
      profile:
        "https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1780&q=80",
    },
    {
      id: 8,
      name: "name8",
      position: "web dev",
      profile:
        "https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1780&q=80",
    },
    {
      id: 9,
      name: "name9",
      position: "web dev",
      profile:
        "https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1780&q=80",
    },
    {
      id: 10,
      name: "name10",
      position: "web dev",
      profile:
        "https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1780&q=80",
    },
  ];
  const renderList = (e) => (
    <Card style={styles.mycard} key={e.id}>
      <View style={styles.cardView}>
        <Image
          style={styles.img}
          source={{
            uri: e.profile,
          }}
        />
        <View style={styles.cardDesc}>
          <Text style={styles.text}>{e.name}</Text>
          <Text style={styles.text}>{e.position}</Text>
        </View>
      </View>
    </Card>
  );

  return (
    <View>
      <FlatList
        data={data}
        renderItem={({ item }) => {
          return renderList(item);
        }}
        keyExtractor={(item) => `${item.id}`}
      />
      <FAB
        style={styles.fab}
        small={false}
        icon="plus"
        theme={{ colors: { accent: "#006aff" } }}
        onPress={() => {
          console.log("pressed");
        }}
      />
    </View>
  );
};
export default Home;
