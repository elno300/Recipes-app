import { StyleSheet, Text, View, ScrollView, Image } from "react-native";

export default function CardScreen() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Image style={styles.image}></Image>
        <Text>This is a card</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ff5733",
    height: "150",
    width: "2",
  },
  image: {
    height: " 200",
    width: "200",
    backgroundColor: "#c6e2ff",
  },
});
