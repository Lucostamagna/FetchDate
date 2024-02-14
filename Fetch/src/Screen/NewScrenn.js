import React from "react";

import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import NewList from "../Components/NewList";
const NewScrenn = () => {
  return (
    <View style={styles.container}>
     <NewList/>
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
export default NewScrenn;
