import React, { useState, useEffect } from 'react'
import { Dimensions, View, StyleSheet, Image } from 'react-native'

const { width, height } = Dimensions.get('window'); 

export default function BGCandy() {
  const [bottom, setBottom] = useState(height + 100)
  const [left, setLeft] = useState(Math.floor(Math.random() * (width - 200)) + 100)

  const [speed, setSpeed] = useState(Math.floor(Math.random() * 10))
  
  let timer

  timer = setInterval(() => {
    interval()
  }, 10);

  const interval = () => {
    setBottom(bottom - speed);
  }

  return (
    <>
      <View style= {[styles.bgCandy, {bottom: bottom, left: left}]}>

      </View>
    </>
  )
}

const styles = StyleSheet.create({
  bgCandy: {
    position: "absolute",
    width: 60,
    height: 60,
    backgroundColor: "pink",
    opacity: 0.6,
    borderRadius: 50
  }
})
