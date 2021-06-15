import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FontAwesome from "react-native-vector-icons/FontAwesome";

import Consult from "./screens/Consult";
import Pharm from "./screens/Pharm";
import Inv from "./screens/Inv";
import Settings from "./screens/Settings";

const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app! test push</Text>
      <StatusBar style="auto" />
    </View>
  );
}
