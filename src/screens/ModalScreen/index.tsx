import React from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { Icon } from "@rneui/themed";
import { useTailwind } from "tailwind-rn/dist";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";

import { Colors } from "../../shared/theme/Colors";
import { RootStackParamList } from "../../navigator/RootNavigator";
import { useCustomerOrders } from "../../hooks/useCustomerOrders";
import DeliveryCard from "../../components/DeliveryCard";

type ModalScreenRouteProps = RouteProp<RootStackParamList, "MyModal">;

const ModalScreen = () => {
  const tw = useTailwind();

  const { goBack } = useNavigation();

  const {
    params: { name, userId },
  } = useRoute<ModalScreenRouteProps>();

  const { top } = useSafeAreaInsets();

  const { loading, error, orders } = useCustomerOrders(userId);

  return (
    <View style={{ marginTop: top }}>
      <TouchableOpacity
        style={tw("absolute right-5 top-5 z-10")}
        onPress={() => goBack()}>
        <Icon name='closecircle' type='antdesign' />
      </TouchableOpacity>

      <View style={{ marginTop: 10 }}>
        <View style={[tw("py-5 border-b"), { borderColor: Colors.primary }]}>
          <Text
            style={[
              tw("text-center text-xl font-bold"),
              { color: Colors.primary },
            ]}>
            {name}
          </Text>
          <Text style={tw("text-center italic text-sm")}>Deliveries</Text>
        </View>
      </View>

      {/* Delivery Card */}
      <FlatList
        data={orders}
        keyExtractor={(order) => order.trackingId}
        renderItem={({ item: order }) => <DeliveryCard order={order} />}
      />
    </View>
  );
};

export default ModalScreen;
