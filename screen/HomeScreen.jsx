import { useEffect } from "react";
import { FlatList, TouchableOpacity, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import Art from "../components/Art";
import { getArts } from "../redux/arts/artsOperations";
import { getAllArts } from "../redux/arts/artsSelector";

const HomeScreen = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getArts());
  }, []);
  const arts = useSelector(getAllArts);

  return (
    <View>
      {Boolean(arts.length) && (
        <FlatList
          data={arts}
          renderItem={({ item }) => (
            <TouchableOpacity>
              <Art title={item.title} price={item.price} imageUrl={item.img} />
            </TouchableOpacity>
          )}
        />
      )}
    </View>
  );
};
export default HomeScreen;
