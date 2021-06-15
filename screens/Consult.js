import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
//import firebase from "../database/firebaseDB";
import {MapView, Permissions} from 'expo';

//const db = firebase.firestore().collection("consults");

export default function Consult() {
  render()
  return (
      <MapView>
        style={{flex:1}}
      </MapView>
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