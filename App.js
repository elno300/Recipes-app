import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  FlatList,
  Image,
} from "react-native";
// import Card from "./src/components/Card";
import Test from "./src/components/Test";
import axios from "axios";
const apiUrl = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
import { useEffect, useState } from "react";

export default function App() {
  // const [mealName, setMealName] = useState([]);
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    const fetchMeal = async () => {
      const url = `${apiUrl}arr`;
      const response = await axios.get(url);
      // console.log(response.data);

      setRecipes(response.data.meals);
    };

    fetchMeal();
  }, []);

  return (
    <ScrollView style={styles.cardContainer}>
      <View style={styles.container}>
        <Test></Test>
        <Text>recipes</Text>
        <StatusBar style="auto" />
        <Text>Hej</Text>
      </View>
      {/* All recipes cards are created */}
      <FlatList
        data={recipes}
        keyExtractor={(item) => item.idMeal}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image
              source={{ uri: item.strMealThumb }}
              style={{ width: 150, height: 150 }}
              borderRadius={8}
            />
            <Text style={styles.title}>{item.strMeal}</Text>
            <Text>{item.strArea}</Text>
            <Text>{item.strCategory}</Text>
          </View>
        )}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  card: {
    alignItems: "center",
  },
  cardContainer: {
    backgroundColor: "palegreen",
    // flexWrap: "wrap",
    // flexDirection: "row",
    // alignContent: "center",

    // justifyContent: "flex-end"
  },
  title: {
    color: "blue",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
