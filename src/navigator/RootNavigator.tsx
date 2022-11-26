import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import TabNavigator from "./TabNavigator";
import ModalScreen from "../screens/ModalScreen";
import { LoginScreen } from "../screens/LoginScreen";

export type RootStackParamList = {
  Login: undefined;
  Main: undefined;
  MyModal: { userId: string; name: string };
  Order: { order: any };
};

const RootStack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = () => {
  return (
    <RootStack.Navigator initialRouteName='Main'>
      <RootStack.Screen
        name='Login'
        component={LoginScreen}
        options={{
          headerShown: false,
        }}
      />
      <RootStack.Group>
        <RootStack.Screen
          name='Main'
          component={TabNavigator}
          options={{
            headerShown: false,
          }}
        />
      </RootStack.Group>

      <RootStack.Group screenOptions={{ presentation: "modal" }}>
        <RootStack.Screen
          name='MyModal'
          component={ModalScreen}
          options={{
            headerShown: false,
          }}
        />
      </RootStack.Group>
    </RootStack.Navigator>
  );
};

export default RootNavigator;
