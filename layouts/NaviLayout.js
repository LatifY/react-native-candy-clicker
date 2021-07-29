import * as React from "react";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { StyleSheet, View } from "react-native";

import Home from "../pages/Home";
import Upgrade from "../pages/Upgrade";
import Info from "../pages/Info";

import { t } from "../utilities/localization";

const Tab = createBottomTabNavigator();

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "transparent",
  },
};

export default function NaviLayout() {
  return (
    <NavigationContainer theme={MyTheme}>
      <Tab.Navigator
        initialRouteName="Home"
        tabBarOptions={{
          labelStyle: {
            fontSize: 14,
            margin: 0,
            padding: 0,
          },

          style: styles.tabBar,
          activeTintColor: "#fff",
          inactiveTintColor: "#9ed2de",
        }}
      >
        <Tab.Screen
          name="Shop"
          component={Home}
          options={{
            tabBarLabel: t("shop"),
            tabBarIcon: ({ color, focused, size }) => (
              <MaterialCommunityIcons
                name="candycane"
                color={color}
                size={focused ? size * 1.15 : size}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Upgrade"
          component={Upgrade}
          options={{
            tabBarLabel: t("upgrade"),
            tabBarIcon: ({ color, focused, size }) => (
              <MaterialCommunityIcons
                name="upload-multiple"
                color={color}
                size={focused ? size * 1.15 : size}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Info"
          component={Info}
          options={{
            tabBarLabel: t("info"),
            tabBarIcon: ({ color, focused, size }) => (
              <MaterialCommunityIcons
                name="information"
                color={color}
                size={focused ? size * 1.15 : size}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    borderTopColor: "transparent",
    backgroundColor: "#0096c7",
    opacity: 0.9,
    fontSize: 60,
    position: "absolute",
    bottom: 40,
    paddingBottom: 10,
    height: 60,
    marginHorizontal: 20,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 10,
      height: 10,
    },
  },
});
