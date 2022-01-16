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
      profile: "https://cdn-icons-png.flaticon.com/512/168/168730.png",
    },
    {
      id: 2,
      name: "name2",
      position: "web dev",
      profile: "https://cdn-icons-png.flaticon.com/512/168/168730.png",
    },
    {
      id: 3,
      name: "name3",
      position: "web dev",
      profile: "https://cdn-icons-png.flaticon.com/512/168/168730.png",
    },
    {
      id: 4,
      name: "name4",
      position: "web dev",
      profile: "https://cdn-icons-png.flaticon.com/512/168/168730.png",
    },
    {
      id: 5,
      name: "name5",
      position: "web dev",
      profile: "https://cdn-icons-png.flaticon.com/512/168/168730.png",
    },
    {
      id: 6,
      name: "name6",
      position: "web dev",
      profile: "https://cdn-icons-png.flaticon.com/512/168/168730.png",
    },
    {
      id: 7,
      name: "name7",
      position: "web dev",
      profile: "https://cdn-icons-png.flaticon.com/512/168/168730.png",
    },
    {
      id: 8,
      name: "name8",
      position: "web dev",
      profile: "https://cdn-icons-png.flaticon.com/512/168/168730.png",
    },
    {
      id: 9,
      name: "name9",
      position: "web dev",
      profile: "https://cdn-icons-png.flaticon.com/512/168/168730.png",
    },
    {
      id: 10,
      name: "name10",
      position: "web dev",
      profile: "https://cdn-icons-png.flaticon.com/512/168/168730.png",
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
