import React from "react";

import { Text, View, StyleSheet, ScrollView, Image } from "react-native";
import candy from "../assets/img/candy.png";

import Empty from "../components/Empty";

import { t } from "../utilities/localization";

export default function Info() {
  return (
    <ScrollView style={styles.scroll}>
      <View style={styles.centerView}>
        <Image style={styles.image} source={candy} />

        <Text style={[styles.text, { fontSize: 45 }]}>Candy Clicker</Text>
        <Text style={[styles.text, { color: "#ccc" }]}>{t("credit")}</Text>

        <Empty height={60} />

        <Text style={[styles.text, { fontSize: 24, color: "orange" }]}>
          {t("proverb")}
        </Text>
        <Empty height={10} />
        <Text style={[styles.text, { fontSize: 16, color: "#ffd36e" }]}>
          {t("proverb_label")}
        </Text>

        <Empty height={80} />

        <Text style={[styles.text, { fontSize: 20 }]}>{t("made_with")}</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  centerView: {
    marginTop: 80,
    flex: 1,
    alignItems: "center"
  },

  scroll: {
    flex: 1,
    textAlign: "center"
  },

  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },

  image: {
    width: 100,
    height: 100,
  },
});
