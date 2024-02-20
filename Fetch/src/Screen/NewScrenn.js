import React from "react";
import { globalStyles } from "../Global/Styles";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import NewList from "../Components/NewList";
const NewScrenn = () => {
  return (
    <View style={globalStyles.container}>
     <NewList/>
      <StatusBar style="auto" />
    </View>
  );
};


export default NewScrenn;
