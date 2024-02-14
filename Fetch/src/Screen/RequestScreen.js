import React from "react";


import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
const RequestScreen = () => {
  return (
    <View>
      <Text> Request Screen</Text>
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
});
export default RequestScreen;