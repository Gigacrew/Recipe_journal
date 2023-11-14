import React from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableHighlight,
} from "react-native";
import { AddRecipeScreenProps } from "../utils/types/NavigationTypes";

const AddNewRecipe: React.FC<AddRecipeScreenProps> = ({
  navigation,
  route,
}) => {
  return (
    <View style={styles.mainContainer}>
      <Text
        style={styles.recipeHeader}
      >
        Add New Recipe
      </Text>
      <View style={{ margin: 20 }}>
        <Text>Recipe Name</Text>
        <TextInput
          style={styles.input}
          // onChangeText={onChangeNumber}
          value={""}
          keyboardType="numeric"
        />
        <TextInput />
        <View style={{ flexDirection: "row" }}>
          <View>
            <Text>Recipe Servings</Text>
            <TextInput
              style={styles.input}
              // onChangeText={onChangeNumber}
              value={""}
              keyboardType="numeric"
            />
            <TextInput />
          </View>

          <View style={{ marginLeft: 40 }}>
            <Text>Cooking Time</Text>
            <TextInput
              style={styles.input}
              // onChangeText={onChangeNumber}
              value={""}
              keyboardType="numeric"
            />
            <TextInput />
          </View>
        </View>
        <Text>Recipe Ingredients</Text>
        <TextInput
          style={styles.input4}
          // onChangeText={onChangeNumber}
          value={""}
          keyboardType="numeric"
        />
        <TextInput />
        <Text>Recipe Instructions</Text>
        <TextInput
          style={styles.input4}
          // onChangeText={onChangeNumber}
          value={""}
          keyboardType="numeric"
        />
        <TextInput />

        <View
          style={styles.buttonContainer}
        >
          <TouchableHighlight
            style={styles.cancelButton}
          >
            <Text>Cancel</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={styles.addRecipeButton}
          >
            <Text style={{ color: "white" }}>Add Recipe</Text>
          </TouchableHighlight>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: { 
    flex: 1, 
    backgroundColor: "white" 
  },
  input: {
    height: 40,
    marginTop: 12,
    borderWidth: 1,
    padding: 10,
    borderColor: "lightgray",
    borderRadius: 4,
  },
  input4: {
    height: 140,
    marginTop: 12,
    borderWidth: 1,
    padding: 10,
    borderColor: "lightgray",
    borderRadius: 4,
  },
  addRecipeButton : {
    backgroundColor: "#873e23",
    height: 40,
    width: 120,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
  cancelButton : {
    borderWidth: 4,
    borderColor: "#873e23",
    height: 40,
    width: 120,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 20,
  },
  recipeHeader : {
    textAlign: "center",
    fontSize: 32,
    fontWeight: "bold",
    marginTop: 18,
  }
});

export default AddNewRecipe;
