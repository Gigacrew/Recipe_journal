import React, {useState} from "react";
import {
  View,
  Text,
  TextInput,
  Switch,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import {MealPlanDetailsScreenProps} from "../utils/types/NavigationTypes";
import Checkbox from "../utils/components/Checkbox";
import Icon from "react-native-vector-icons/Ionicons";

const MealPlanDetailsScreen: React.FC<MealPlanDetailsScreenProps> = ({
  navigation,
  route,
}) => {
  const [switchStates, setSwitchStates] = useState<{
    [key: string]: boolean;
  }>({
    LactoseIntolerance: false,
    Vegetarian: false,
    GlutenIntolerance: false,
    PeanutAllergy: false,
    Vegan: false,
    Celiac: false,
  });

  const toggleSwitch = (key: string) => {
    setSwitchStates(prevState => ({
      ...prevState,
      [key]: !prevState[key],
    }));
  };
  const [checkboxStates, setCheckboxStates] = useState<{
    [key: string]: boolean;
  }>({});

  const toggleCheckbox = (key: string): void => {
    setCheckboxStates((prevState: {[key: string]: boolean}) => ({
      ...prevState,
      [key]: !prevState[key],
    }));
  };

  const switches = [
    {label: "Lactose Intolerance", key: "LactoseIntolerance"},
    {label: "Vegetarian", key: "Vegetarian"},
    {label: "Gluten Intolerance", key: "GlutenIntolerance"},
    {label: "Peanut Allergy", key: "PeanutAllergy"},
    {label: "Vegan", key: "Vegan"},
    {label: "Celiac", key: "Celiac"},
  ];
  const checkboxes = [
    {label: "Breakfast", key: "Breakfast"},
    {label: "Lunch", key: "Lunch"},
    {label: "Dinner", key: "Dinner"},
    {label: "Snack", key: "Snack"},
  ];

  return (
    <View style={styles.formBody}>
      <Text style={styles.h2}>Create a New Meal Plan</Text>
      <TextInput placeholder="Amount of Days" style={styles.input} />
      <View style={styles.inputGroup}>
        {checkboxes.map(({label, key}) => (
          <Checkbox
            label={label}
            checked={!!checkboxStates[key]}
            onChange={() => toggleCheckbox(key)}
            key={key}
          />
        ))}
      </View>
      <View style={styles.inputGroup}>
        {switches.map(({label, key}) => (
          <View style={styles.switchElement} key={key}>
            <Text> {label} </Text>
            <Switch
              trackColor={{false: "#767577", true: "#7A2626"}}
              thumbColor={switchStates[key] ? "#fff" : "#fff"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={() => toggleSwitch(key)}
              value={switchStates[key]}
            />
          </View>
        ))}
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.cancelButton}>
          <Text style={styles.cancelButtonText}>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.addButton}>
          <Icon name="add" size={24} color="white" />
          <Text style={styles.addButtonText}>Add Meal Plan</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  h2: {
    fontFamily: "Atocha",
    fontSize: 36,
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: 44,
  },
  input: {
    height: 55,
    width: 350,
    padding: 16,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "#BDBDBD",
    marginBottom: 16,
  },
  inputGroup: {
    flexDirection: "row",
    flexWrap: "wrap",
    padding: 10,
    borderWidth: 3,
    borderColor: "#7A2626",
    justifyContent: "center",
    marginBottom: 16,
  },
  switchElement: {
    width: "50%",
    marginBottom: 16,
  },
  formBody: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 16,
  },
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    marginTop: 16,
  },
  cancelButton: {
    borderWidth: 2,
    borderColor: "#7A2626",
    borderRadius: 4,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  cancelButtonText: {
    color: "#7A2626",
    fontSize: 16,
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

export default MealPlanDetailsScreen;
