import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { ShoppingListScreenProps } from "../utils/types/NavigationTypes";

const ShoppingList: React.FC<ShoppingListScreenProps> = ({
  navigation,
  route,
}) => {
  let shoppingListItems = [
    {
      name: "Sourdough",
      category: "bakery",
      quantity: "2",
    },
    {
      name: "Cucumber",
      category: "Produce",
      quantity: "3",
    },
    {
      name: "Pork Tenderloin",
      category: "meat",
      quantity: "1",
    },
    {
      name: "Apple",
      category: "produce",
      quantity: "6",
    },
  ];

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>Categories</Text>
        <View style={styles.typesContainer}>
          <Text style={styles.type}>Bakery</Text>
          <Text style={styles.type}>Produce</Text>
          <Text style={styles.type}>Meat</Text>
        </View>
        <View style={styles.itemsContainer}>
          {shoppingListItems.map((item, index) => {
            return (
              <View {...styles.itemContainer}>
                <Text style={styles.item}>{item.name}</Text>
                <Text style={styles.itemReference}>{item.category}</Text>
                <Text style={styles.itemQuantity}>{item.quantity}</Text>
                <View style={styles.line} />
              </View>
            );
          })}
        </View>
      </ScrollView>
      <TouchableOpacity
        onPress={() => alert("Add a new item!!")}
        style={styles.addButton}
      >
        <Text style={styles.addIcon}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
  title: {
    fontSize: 24,
    fontStyle: "italic",
    color: "maroon",
    marginBottom: 20,
  },
  typesContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  type: {
    flex: 1,
    backgroundColor: "#f2f2f2",
    padding: 15,
    marginHorizontal: 5,
    textAlign: "center",
    borderRadius: 5,
  },
  itemsTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  itemsContainer: {
    padding: 10,
    borderRadius: 5,
  },
  itemContainer: {
    marginBottom: 10,
    marginTop: 5,
  },
  item: {
    marginBottom: 5,
  },
  itemReference: {
    fontSize: 12,
    color: "gray",
  },
  itemQuantity: {
    flex: 1,
    fontSize: 12,
    color: "gray",
    textAlign: "right",
  },
  line: {
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
  },
  addButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    margin: 8,
    backgroundColor: "#873e23",
    alignSelf: "flex-end",
  },
  addIcon: { color: "white", fontSize: 32, textAlign: "center" },
});

export default ShoppingList;
