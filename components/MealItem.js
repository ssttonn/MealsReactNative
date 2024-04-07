import { useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  Pressable,
  Image,
  StyleSheet,
  Platform,
} from "react-native";
import MealDetails from "./MealDetails";

function MealItem({
  id,
  title,
  imageUrl,
  duration,
  complexity,
  affordability,
}) {
  let navigation = useNavigation();
  return (
    <View style={styles.mealItem}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        onPress={() => {
          navigation.navigate("MealDetail", {
            mealId: id,
          });
        }}
        style={({ pressed }) => [pressed ? styles.buttonPressed : null]}
      >
        <View style={styles.innerContainer}>
          <View>
            <Image style={styles.image} source={{ uri: imageUrl }} />
            <Text style={styles.title}>{title}</Text>
          </View>
          <MealDetails
            duration={duration}
            affordability={affordability}
            complexity={complexity}
          />
        </View>
      </Pressable>
    </View>
  );
}

export default MealItem;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 200,
  },
  innerContainer: {
    borderRadius: 10,
    overflow: "hidden",
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
    marginVertical: 8,
  },

  mealItem: {
    marginBottom: 14,
    borderRadius: 10,
    backgroundColor: "white",
    elevation: 4,
    shadowColor: "black",
    shadowOpacity: 0.25,
    backgroundColor: "white",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    overflow: Platform.OS === "ios" ? "visible" : "hidden",
    shadowRadius: 2,
  },
  buttonPressed: {
    opacity: 0.5,
  },
});
