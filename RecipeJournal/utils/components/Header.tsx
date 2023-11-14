import React from "react";
import { Text, View, StyleSheet, SafeAreaView, Platform } from "react-native";

const PageHeader = () => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <Text style={styles.textStyle}>Recipe Detail</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: "#808080",
    padding: 10,
    paddingTop: Platform.OS === "android" ? 30 : 20,
  },
  textStyle: {
    color: "#fff",
    textAlign: "center",
    fontSize: 22,
    fontWeight: "500",
  },
});
export default PageHeader;
