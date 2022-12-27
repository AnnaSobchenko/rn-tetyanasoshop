import { StyleSheet, View, Image, Text } from "react-native";

const Art = ({ title, price, imageUrl }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: `${imageUrl}` }} style={styles.image} />
      <View style={styles.text_container}>
        <Text style={styles.text}>{title}</Text>
        <Text style={styles.text}>Price {price}$</Text>
      </View>
    </View>
  );
};

export default Art;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f6f6f6",
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    flexDirection: "row",
    marginBottom: 10,
  },
  text_container: { width: "70%" },
  text: {
    color: "#141311",
    padding: 5,
    fontSize: 18,
  },
  image: {
    width: "20%",
    height: "100%",
    resizeMode: "cover",
    borderRadius: 20,
    marginRight: 10,
  },
});
