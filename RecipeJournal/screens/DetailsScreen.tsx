import React from "react";
import { View, Text, Button } from "react-native";
import { DetailsScreenProps } from "../utils/types/NavigationTypes";
import NavigationBar from "../utils/components/NavigationBar";

const DetailsScreen: React.FC<DetailsScreenProps> = ({ navigation, route }) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Details Screen</Text>
      <Text>{route.params?.text}</Text>
    </View>
  );
};

export default DetailsScreen;
