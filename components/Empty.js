import React from 'react'
import { View } from 'react-native'

export default function Empty({ width, height }) {
  return (
    <View style={{ width: width ? width : "100%", height: height ? height : "100%" }}/>
  )
}
