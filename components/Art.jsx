import { StyleSheet, View, Image, Text } from "react-native";
import { getAllArts } from "../redux/arts/artsSelector";
import { useDispatch, useSelector } from "react-redux";
import { getArts } from "../redux/arts/artsOperations";
import { useEffect } from "react";

export default function Art() {
  const arts = useSelector(getAllArts);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getArts());
  }, []);

  return (
    Boolean(arts.length) && (
      <View style={styles.container}>
        <Image
          source={require("../assets/arts/lorem-ipsum-001.jpg")}
          style={styles.image}
        />
        <View style={styles.text_container}>
          <Text style={styles.text}>{arts[0].title}</Text>
          <Text style={styles.text}>Price {arts[0].price}$</Text>
        </View>
      </View>
    )
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f6f6f6",
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    flexDirection: "row",
  },
  text_container: { width: "50%" },
  text: {
    color: "#141311",
    padding: 5,
    fontSize: 18,
  },
  image: {
    width: "35%",
    height: "20%",
    resizeMode: "cover",
    borderRadius: 20,
    marginRight: 10,
  },
});
