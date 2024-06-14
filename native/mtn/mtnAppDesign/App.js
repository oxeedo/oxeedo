import { StyleSheet, Text, View, Image } from "react-native";
import HomePage from "./pages/HomePage";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Play from "./pages/bottompages/Play";
import Help from "./pages/bottompages/Help";
import More from "./pages/bottompages/More";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={HomePage}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Play"
          component={Play}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Help"
          component={Help}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="More"
          component={More}
          options={{ headerShown: false }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
