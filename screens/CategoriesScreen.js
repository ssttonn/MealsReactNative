import { FlatList } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";

export default function CategoriesScreen({ navigation }) {
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      numColumns={2}
      renderItem={(data) => (
        <CategoryGridTile
          title={data.item.title}
          color={data.item.color}
          onPress={() => {
            navigation.navigate("MealsOverview", {
              categoryId: data.item.id,
            });
          }}
        />
      )}
    />
  );
}
