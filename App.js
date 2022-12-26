import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Art from "./components/Art";
import { Provider, useDispatch } from "react-redux";
import store from "./redux/store";

// import {API_URL} from '@env';

// console.log('API_URL :>> ', API_URL);

export default function App() {
  

  return (
    <Provider store={store}>
      <View style={styles.container}>
        {/* <Text style={styles.text}>Hello!</Text> */}
        <Art />
        <StatusBar style="auto" />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f6f6f6",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#141311",
  },
});
