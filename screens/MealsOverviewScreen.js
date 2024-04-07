import { useLayoutEffect } from "react";
import MealItem from "../components/MealItem";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import { View, Text, StyleSheet, FlatList } from "react-native";

function MealsOverviewScreen({ route, navigation }) {
  let id = route.params.categoryId;

  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.includes(id);
  });

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id == id
    ).title;
    navigation.setOptions({
      title: categoryTitle,
    });
  }, [id, navigation]);

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={(data) => {
          let mealItemProps = {
            id: data.item.id,
            title: data.item.title,
            imageUrl: data.item.imageUrl,
            duration: data.item.duration,
            complexity: data.item.complexity,
            affordability: data.item.affordability,
          };
          return <MealItem {...mealItemProps} />;
        }}
      />
    </View>
  );
}

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
