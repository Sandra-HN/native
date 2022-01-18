import { StatusBar } from "expo-status-bar";
import { Text, View, Image, FlatList } from "react-native";
import Contants from "expo-constants";
import { Card, FAB } from "react-native-paper";
import styles from "./HomeStyle";

const Home = ({ navigation }) => {
  const data = [
    {
      id: 1,
      name: "Sandra",
      position: "web dev",
      email: "sandra@abc.com",
      salary: "8 LPA",
      phone: "123465",
      picture:
        "https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1780&q=80",
    },
    {
      id: 2,
      name: "name2",
      position: "markiting",
      email: "abc@abc.com",
      salary: "5 LPA",
      phone: "123465",
      picture:
        "https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1780&q=80",
    },
    {
      id: 3,
      name: "name3",
      position: "mobile dev",
      email: "abc@abc.com",
      salary: "10 LPA",
      phone: "123465",
      picture:
        "https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1780&q=80",
    },
  ];
  const renderList = (e) => (
    <Card
      style={styles.mycard}
      key={e.id}
      onPress={() => navigation.navigate("Profile", { item: e })}
    >
      <View style={styles.cardView}>
        <Image
          style={styles.img}
          source={{
            uri: e.picture,
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
    <View style={styles.root}>
      <FlatList
        data={data}
        renderItem={({ item }) => {
          return renderList(item);
        }}
        keyExtractor={(item) => item.id}
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
