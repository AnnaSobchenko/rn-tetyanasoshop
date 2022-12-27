import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { Provider } from "react-redux";
import store from "./redux/store";
import HomeScreen from "./screen/HomeScreen";

// import {API_URL} from '@env';

// console.log('API_URL :>> ', API_URL);

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <StatusBar style="auto" />
        {/* <Text style={styles.text}>Hello!</Text> */}
        <HomeScreen />
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
