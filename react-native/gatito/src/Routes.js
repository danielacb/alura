import React from "react";
import { NavigationContainer, ServerContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Services from "./screens/Services";
import Cart from "./screens/Cart";

import { colors } from "./styles/styles";

const Tab = createBottomTabNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: colors.purple,
          inactiveTintColor: colors.light,
          activeBackgroundColor: colors.purple,
          inactiveBackgroundColor: colors.orange,
          style: {
            height: 70,
          },
          labelStyle: {
            width: "100%",
            flex: 1,
            fontWeight: "bold",
            fontSize: 16,
            lineHeight: 21,
            marginTop: 3,
            paddingTop: 21,
            backgroundColor: colors.orange,
          },
          keyboardHidesTabBar: true,
        }}
      >
        <Tab.Screen name="Services" component={Services} />
        <Tab.Screen name="Cart" component={Cart} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
