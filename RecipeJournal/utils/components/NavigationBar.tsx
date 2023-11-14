import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Pressable,
  TouchableOpacity,
} from "react-native";
import {
  NavigationBarProps,
  RootStackParamList,
} from "../types/NavigationTypes";
import { auth } from "@react-native-firebase/auth";

const NavigationBar: React.FC<NavigationBarProps> = ({ navigation }) => {
  const screens: RootStackParamList = {
    Home: {
      navButtonText: "Home",
      text: " Came from Nav Bar",
    },
    // Recipe: {
    //   navButtonText: "Recipe",
    //   title: "Recipe Name"
    // },
    MealPlanDetails: {
      navButtonText: "Meal Plan ",
      text: "Meal Plan Details",
    },
    RecipeList: {
      navButtonText: "Recipe",
    },
  };

  const screenNames: (keyof RootStackParamList)[] = Object.keys(
    screens
  ) as (keyof RootStackParamList)[];

  const navigateToScreen = (
    screenName: keyof RootStackParamList,
    params: RootStackParamList[typeof screenName]
  ) => {
    navigation.navigate(screenName, params);
  };

  const styles = StyleSheet.create({
    button: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      paddingVertical: 12,
      paddingHorizontal: 32,
      marginBottom: 20,
      marginHorizontal: 10,
      borderRadius: 4,
      elevation: 3,
      backgroundColor: "black",
    },
    text: {
      fontSize: 16,
      lineHeight: 21,
      fontWeight: "bold",
      letterSpacing: 0.25,
      color: "white",
    },
  });

  return (
    <View style={{ flexDirection: "row", justifyContent: "center" }}>
      {screenNames.map((screenName) => (
        <Pressable
          style={styles.button}
          key={screenName}
          onPress={() => navigateToScreen(screenName, screens[screenName])}
        >
          <Text style={styles.text}>{screens[screenName].navButtonText}</Text>
        </Pressable>
      ))}
    </View>
  );
};
export default NavigationBar;
