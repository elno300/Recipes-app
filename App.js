// import { StatusBar } from "expo-status-bar";
import * as React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  FlatList,
  Image,
} from "react-native";
// import Card from "./src/components/Card";
// import Test from "./src/components/Test";
import axios from "axios";
const apiUrl = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
import { useEffect, useState } from "react";

// import { NavigationContainer } from "@react-navigation/native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import CardScreen from "./src/components/CardScreen";
// import TestScreen from "./src/components/Test";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default function App() {
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
  // const Stack = createNativeStackNavigator();

  return (
    <ScrollView style={styles.cardContainer}>
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.heading}>Recipes</Text>
        </View>
      </ScrollView>
      {/* <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          {/* <Stack.Screen name="Home" component={CardScreen} /> */}
      {/* <Stack.Screen name="Details" component={TestScreen} />
        </Stack.Navigator>
      </NavigationContainer> */}
      {/* All recipes cards are created */}
      <FlatList
        data={recipes}
        keyExtractor={(item) => item.idMeal}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image
              source={{ uri: item.strMealThumb }}
              style={{ width: 150, height: 150 }}
              // borderRadius={8}
            />
            <Text style={styles.title}>{item.strMeal}</Text>
            <Text>{item.strArea}</Text>
            <Text>{item.strCategory}</Text>
            {/* <Button
              title="Go to Details"
              onPress={() => navigation.navigate("Details")}
            /> */}
          </View>
        )}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#80b286",
    height: 50,
    justifyContent: "space-evenly",
  },
  heading: {
    color: "white",
    fontWeight: "500",
    fontSize: 20,
    alignSelf: "center",
  },
  card: {
    alignItems: "center",
    borderWidth: 2,
    borderColor: "blue",
    backgroundColor: "hotpink",
  },
  cardContainer: {
    backgroundColor: "palegreen",
  },
  title: {
    fontSize: 18,
    fontWeight: "500",
    fontFamily: "Quicksand_300Light",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
