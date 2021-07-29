import React from "react";
import {
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function Area({ texts }) {//texts
  return (
    <>
      <View style={styles.area}>
        {texts && texts.map((item, index) => (
          <Text key={index} style={[styles.text, {fontSize: item?.fontSize}]}>{item.text}</Text>
        ))}
      </View>
    </>
  )
}


const styles = StyleSheet.create({
  area: {
    marginTop: 15,
    width: "100%",
    height: "auto",
    backgroundColor: "black",
    opacity: 0.3,
    marginBottom: 60,
  },
  

  text: {
    textAlign: "center",
    color: "#fff",
    borderBottomWidth: 6,
  }
})
