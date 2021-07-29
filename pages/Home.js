import React, { useState, useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Alert,
  Animated,
} from "react-native";

import { useDispatch, useSelector } from "react-redux";

import Candy from "../components/Candy";

import TouchableArea from "../components/TouchableArea";
import Area from "../components/Area";

import Edit from "../assets/svg/edit.svg";

import { t } from "../utilities/localization";
import { formatNumberText, formatNumber } from "../utilities/constants";

export default function Home() {
  const candy = useSelector((state) => state.candy);
  const dispatch = useDispatch()

  const [shopName, setShopName] = useState(t("first_shop_name"));

  const getCandySum = () => {
    return candy.candies + candy.incrementPerSecSum;
  };

  const handleShopName = () => {
    Alert.prompt(
      t("change_shop_name"),
      t("example_shop_name"),
      (value) => {
        if (value == "" || value == undefined || value == null) {
          Alert.alert(t("enter_value_shop_name"));
          return null;
        }
        setShopName(value);
      },
      undefined,
      shopName
    );
  };

  const shopTexts = [
    {
      text: (
        <>
          {shopName} <Edit width="22px" height="22px" />
        </>
      ),
      fontSize: 22,
    },
  ];
  const infoTexts = [
    {
      text: `${formatNumberText(getCandySum())} ${t("candy")}`,
      fontSize: 30,
    },
    {
      text: `${formatNumberText(candy.incrementPerSecValue)}/${t("per_second")}`,
      fontSize: 20,
    },
  ];

  return (
    <View style={styles.display}>
      <Text style={styles.title}>{t("title")}</Text>

      <TouchableArea texts={shopTexts} onPress={handleShopName} />
      <Area texts={infoTexts} />

      <Candy />
    </View>
  );
}

const styles = StyleSheet.create({
  display: {
    marginTop: 80
  },
  title: {
    color: "#fff",
    position: "relative",
    textAlign: "center",
    fontSize: 55,
    fontWeight: "bold",
  },

  candy: {
    width: "100%",
    margin: 0,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },

  image: {
    width: 150,
    height: 150,
  }
});
