import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  StatusBar,
} from "react-native";
import { RecipeScreenProps } from "../utils/types/NavigationTypes";

const RecipeDetail: React.FC<RecipeScreenProps> = ({ navigation, route }) => {
  let recipe = route.params?.recipe;
  return (
    <View style={styles.wrapper}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.contentContainer}
      >
        <View style={styles.innerContainer}>
          <Text style={styles.textStyle}>{recipe?.title}</Text>
          <Image style={styles.iconStyle} source={{ uri: recipe?.imgURL }} />
          <View style={styles.boxStyle}>
            <Text style={styles.contentTextStyle}>{recipe?.description}</Text>
            <Text style={styles.subHeadingText}>Ingredients Needed</Text>
            <View style={styles.twoColWrapper}>
              {recipe?.ingredients.map((ingredient: string, index: number) => (
                <Text style={styles.twoColText} key={index}>
                  {ingredient}
                </Text>
              ))}
            </View>
            <Text style={styles.subHeadingText}>Instructions</Text>
            {recipe?.instructions.map((instruction: string, index: number) => (
              <Text style={styles.contentTextStyle} key={index}>
                {index + 1}. {instruction}
              </Text>
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  innerContainer: {
    paddingHorizontal: 10,
    paddingBottom: 50,
  },
  scrollView: {
    flexGrow: 1,
  },
  contentContainer: {
    backgroundColor: "lightgrey",
    flexGrow: 1,
  },
  boxStyle: {
    width: "100%",
    backgroundColor: "white",
  },
  twoColWrapper: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    textAlign: "center",
  },
  twoColText: {
    width: "50%",
    padding: 10,
  },
  textStyle: {
    textAlign: "center",
    fontSize: 22,
    fontWeight: "bold",
  },
  contentTextStyle: {
    fontSize: 16,
    fontWeight: "normal",
    padding: 8,
  },
  iconStyle: {
    width: "100%",
    height: 400,
  },
  mainHeadingText: {
    padding: 2,
    fontSize: 25,
    fontWeight: "900",
  },
  subHeadingText: {
    padding: 2,
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
});
export default RecipeDetail;
