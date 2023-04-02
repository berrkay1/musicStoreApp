import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import songData from "./music-data.json";
import { NavigationContainer } from "@react-navigation/native";
import {
  StyleSheet,
  Switch,
  Text,
  View,
  FlatList,
  SafeAreaView,
} from "react-native";
import SongCart from "./src/components/SongCart";
import SearchBar from "./src/components/SearchBar";

export default function App() {
  const [text, setText] = useState("");
  const [list, setList] = useState(songData);

  const seperatorItem = () => <Text style={styles.seperator} />;

  const handleSearch = (text) => {
    const filtered = songData.filter((song) => {
      return song.title.toLowerCase().indexOf(text.toLowerCase()) > -1;
    });
    setList(filtered);
  };

  return (
    <NavigationContainer>
      <SafeAreaView style={styles.container}>
        <SearchBar handleSearch={handleSearch} />
        {list.length > 0 ? (
          <FlatList
            data={list}
            renderItem={({ item }) => <SongCart item={item} />}
            ItemSeparatorComponent={seperatorItem}
            style={{ marginTop: 49 }}
          />
        ) : (
          <Text>Albüm bulunamadı...</Text>
        )}
      </SafeAreaView>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 5,
  },
  seperator: {
    borderWidth: 0.01,
    backgroundColor: "#000",
    opacity: 0.4,
  },
});
