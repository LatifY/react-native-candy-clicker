import React, { useState, useEffect, useRef } from "react";
import { StyleSheet, TouchableOpacity, Animated, Image } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import candyImage from "../assets/img/candy.png";
import shineImage from "../assets/img/shine.png";

import { earnCandy, incrementPerSec } from "../store/actions/candyActions";

export default function Candy() {
  const candy = useSelector((state) => state.candy);
  const dispatch = useDispatch();

  setTimeout(() => dispatch(incrementPerSec()),1000);

  let animatedValue = useRef(new Animated.Value(0)).current;
  const candyAnimationDuration = 200;

  let animatedValueShine = useRef(new Animated.Value(0)).current;
  const shineAnimationDuration = 1000;

  let animatedValueRotate = useRef(new Animated.Value(0)).current;
  const rotateAnimationDuration = 360000;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(animatedValueShine, {
          toValue: 1,
          duration: shineAnimationDuration,
          useNativeDriver: false,
        }),
        Animated.timing(animatedValueShine, {
          toValue: 0,
          duration: shineAnimationDuration,
          useNativeDriver: false,
        }),
      ])
    ).start();

    Animated.loop(
      Animated.sequence([
        Animated.timing(animatedValueRotate, {
          toValue: 1,
          duration: rotateAnimationDuration,
          useNativeDriver: false,
        }),
        Animated.timing(animatedValueRotate, {
          toValue: 0,
          duration: rotateAnimationDuration,
          useNativeDriver: false,
        }),
      ])
    ).start();
  }, []);

  const handleCounter = () => {
    dispatch(earnCandy());

    Animated.timing(animatedValue, {
      toValue: 1,
      duration: candyAnimationDuration,
      useNativeDriver: false,
    }).start()

    setTimeout(() => {
      Animated.timing(animatedValue, {
        toValue: 0,
        duration: 1,
        useNativeDriver: false,
      }).start()
    }, candyAnimationDuration);
  };

  return (
    <>
      <TouchableOpacity onPress={handleCounter} activeOpacity={0.7}>
        <Animated.View
          style={[
            styles.candy,
            {
              transform: [
                {
                  scale: animatedValue.interpolate({
                    inputRange: [0, 0.5, 1],
                    outputRange: [1, 1.15, 1],
                  }),
                },
              ],
            },
          ]}
        >
          <Image style={styles.candyImage} source={candyImage} />
        </Animated.View>

        <Animated.View
          style={[
            styles.shine,
            {
              transform: [
                {
                  scale: animatedValueShine.interpolate({
                    inputRange: [0, 0.5, 1],
                    outputRange: [1, 1.2, 1],
                  }),
                },
                {
                  rotate: animatedValueRotate.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, 360],
                  }),
                },
              ],
            },
          ]}
        >
          <Image style={styles.shineImage} source={shineImage} />
        </Animated.View>
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  candy: {
    width: "100%",
    margin: 0,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },

  shine: {
    width: "100%",
    zIndex: -1,
    opacity: 0.2,
    margin: 0,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },

  candyImage: {
    width: 150,
    height: 150,
  },

  shineImage: {
    width: 180,
    height: 180,
  },
});
