import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import HomePage from "./src/components/HomePage";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Employment from "./src/components/Employment";
import JobDetails from "./src/components/JobDetails";
import Search from "./src/search/Search";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="HomePage" component={HomePage} />
        <Stack.Screen name="Employment" component={Employment} />
        <Stack.Screen name="JobDetails" component={JobDetails} />
        <Stack.Screen name="Search" component={Search} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
