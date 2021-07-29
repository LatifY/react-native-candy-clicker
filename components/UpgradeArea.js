import React, { useEffect, useState } from "react";

import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  Image,
  Alert,
} from "react-native";

import { t } from "../utilities/localization";
import { formatNumber, applyEval, formatNumberText } from "../utilities/constants";
import { useDispatch, useSelector } from "react-redux";

import { upgradeArea } from "../store/actions/upgradeActions";
import { spendCandy,increaseIncrementPerSec } from "../store/actions/candyActions";

import candyImage from "../assets/img/candy.png";

import Empty from "../components/Empty"

export default function UpgradeArea({
  name,
  mirrorImage,
  initialPrice,
  increasePerSecond,
  evalPrice,
  normalImage,
  darkImage,
}) {
  const upgrade = useSelector((state) => state.upgrade);
  const candy = useSelector((state) => state.candy);

  const dispatch = useDispatch();

  const [active, setActive] = useState(true);
  const [locked, setLocked] = useState(false);
  const [price, setPrice] = useState(0);

  const getCandySum = () => {
    return candy.candies + candy.incrementPerSecSum;
  };

  const handleUpgrade = () => {
    if (locked || !active) {
      Alert.alert(t("locked"));
      return null;
    }
    // if(getCandySum() < price){
    //   Alert.alert("Şekerin yok 😀")
    //   return null
    // }
    dispatch(upgradeArea(name))
    dispatch(increaseIncrementPerSec(increasePerSecond))
    dispatch(spendCandy(price))
  };

  useEffect(() => {
    const values = [
      {
        name: "currentLevel",
        value: upgrade.levels[name],
      },
      {
        name: "initialPrice",
        value: initialPrice,
      },
    ];
    setPrice(applyEval(evalPrice, values));
  }, [upgrade.levels[name]]);

  return (
    <>
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={handleUpgrade}
        style={styles.upgradeArea}
      >
        <Text style={styles.title}>{locked ? "???" : t(name)}</Text>
        <Text style={styles.description}>
          {locked ? t("locked") : t(name + "_description")}
        </Text>
        <Text style={styles.increasePerSecond}>
          {locked
            ? ""
            : `[+${formatNumberText(increasePerSecond)} ${t("per_second")}]`}
        </Text>

        <Text style={styles.levelText}>{upgrade.levels[name]}</Text>

        {active && !locked ? (
          <View style={styles.price}>
            <Text style={styles.priceText}>
              {formatNumberText(price)}
              <Empty width={5}/>
              <Image
              source={candyImage}
              style={[styles.candyImage]}
              />
            </Text>

          </View>
        ) : null}

        <Image
          source={locked ? darkImage : normalImage}
          style={[styles.image, mirrorImage ? styles.mirror : null]}
        />
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  upgradeArea: {
    width: "85%",
    height: 130,
    backgroundColor: "#90e0ef",
    borderRadius: 20,
    marginVertical: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: {
      width: 10,
      height: 10,
    },
  },

  levelText: {
    position: "absolute",
    left: 5,
    top: 20,
    color: "#555",
    opacity: 0.15,
    fontSize: 90,
    fontWeight: "bold",
  },

  price: {
    display: "flex",
    paddingTop: 5,
    paddingRight: 5,
    paddingBottom: 5,
    height: 30,
    marginLeft: 12,
    marginTop: 5,
    justifyContent: "center",
  },

  priceText: {
    lineHeight: 20,
    fontWeight: "bold"
  },

  candyImage: {
    width: 22,
    height: 22
  },

  title: {
    color: "#444",
    marginHorizontal: 12,
    marginTop: 6,
    marginBottom: 6,
    fontSize: 32,
    fontWeight: "bold",
  },

  description: {
    marginLeft: 12,
    width: "64%",
    fontSize: 13,
  },

  increasePerSecond: {
    marginLeft: 12,
    position: "absolute",
    bottom: 6,
    width: "60%",
    fontSize: 10,
    color: "#555",
    opacity: 0.8,
  },

  image: {
    width: 138,
    height: "100%",
    position: "absolute",
    right: -1,
    bottom: 0,
    borderRadius: 20,
  },

  mirror: {
    transform: [{ rotateY: "180deg" }],
  },
});
