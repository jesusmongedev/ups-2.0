import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CustomersScreen from "../screens/CustomersScreen/index";
import OrdersScreen from "../screens/OrdersScreen";
import { Colors } from "../shared/theme/Colors";
import { Icon } from "@rneui/themed";
import { Text } from "react-native";

export type TabParamList = {
  Customers: undefined;
  Orders: undefined;
};

const Tab = createBottomTabNavigator<TabParamList>();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route: { name } }) => ({
        headerShown: false,
        tabBarActiveTintColor: Colors.primary,
        tabBarInactiveTintColor: Colors.gray,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName = "home";
          let iconColor = color;

          if (name === "Customers") {
            iconName = "users";
          } else if (name === "Orders") {
            iconName = "box";
            iconColor = focused ? Colors.secondary : Colors.gray;
          }

          return (
            <Icon name={iconName} type='entypo' size={size} color={iconColor} />
          );
        },
      })}>
      <Tab.Screen name='Customers' component={CustomersScreen} />
      <Tab.Screen
        options={{
          tabBarLabel: ({ focused, color }) => (
            <Text
              style={{
                color: focused ? Colors.secondary : color,
                fontSize: 10,
              }}>
              Orders
            </Text>
          ),
        }}
        name='Orders'
        component={OrdersScreen}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
