import React from "react";
import {} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../HomePage/index";
import ICQPage from "../ICQPage/index";
import IMCPage from "../IMCPage/index";

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="home"
        component={Home}
        options={{
          title: "",
          headerTintColor: "#FFF",
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="ICQ"
        component={ICQPage}
        options={{
          title: "",
          headerTintColor: "#FFF",
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="IMC"
        component={IMCPage}
        options={{
          title: "",
          headerTintColor: "#FFF",
          headerTransparent: true,
        }}
      />
    </Stack.Navigator>
  );
}
