<<<<<<< Updated upstream
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
=======
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
>>>>>>> Stashed changes

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app! test push</Text>
      <StatusBar style="auto" />
<<<<<<< Updated upstream
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
=======
    //</View>
  );
}
>>>>>>> Stashed changes
