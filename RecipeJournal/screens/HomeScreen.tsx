import React from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { HomeScreenProps } from "../utils/types/NavigationTypes";

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation, route }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => navigation.navigate("ShoppingList")}
      >
        <Text style={styles.addButtonText}>Head to Shopping List</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => navigation.navigate("MealPlanDetails")}
      >
        <Text style={styles.addButtonText}>Head to Meal Plan</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  addButton: {
    backgroundColor: "#7A2626",
    borderRadius: 4,
    paddingVertical: 8,
    paddingHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
  },
  addButtonText: {
    color: "white",
    fontSize: 16,
    marginLeft: 8,
  },
});

export default HomeScreen;
