import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View, ImageBackground } from "react-native";

import NaviLayout from "./layouts/NaviLayout";

import bg from "./assets/img/bg.jpg";

import { Provider } from "react-redux";
import { configureStore } from "./store/configureStore";

const store = configureStore();

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <StatusBar style="light" />
        <ImageBackground source={bg} resizeMode="cover" style={styles.bg}>
          <View style={styles.safeView}></View>
          <NaviLayout />
        </ImageBackground>
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },

  safeView: {
    height: 50,
  },

  bg: {
    flex: 1,
    justifyContent: "center",
  },
});
