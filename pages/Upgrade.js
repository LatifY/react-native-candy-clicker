import React from "react";

import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

import UpgradeArea from "../components/UpgradeArea";

import { t } from "../utilities/localization";
import { upgrades } from "../utilities/values"

import { MaterialCommunityIcons } from "@expo/vector-icons";

import "../utilities/storage"



export default function Upgrade() {
  
  return (
    <ScrollView style={styles.scrollView} indicatorStyle={"white"}>
      <View style={styles.centerView}>
        <Text style={styles.title}>
          {t("upgrade")}{" "}
          <MaterialCommunityIcons
            name="upload-multiple"
            color="#fff"
            size="40"
          />
        </Text>
        {upgrades.map((item, index) => (
          <UpgradeArea key={index} {...item} />
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 40,
    marginBottom: 20,
    color: "#fff",
    fontWeight: "bold",
  },

  scrollView: {
    margin: 0,
  },

  centerView: {
    flex: 1,
    marginTop: 20,
    marginBottom: 120,
    alignItems: "center",
  },
});
