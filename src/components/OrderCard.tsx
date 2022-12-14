import { useNavigation } from "@react-navigation/native";
import { Card, Icon } from "@rneui/themed";
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useTailwind } from "tailwind-rn/dist";

import { useCustomerOrders } from "../hooks/useCustomerOrders";
import { Colors } from "../shared/theme/Colors";
import { CustomerScreenNavigationProp } from "../types/navigator.types";

type Props = {
  order: Order;
  trackinId: string;
};

const OrderCard = ({ order, trackinId }: Props) => {
  const tw = useTailwind();
  // const { loading, error, orders } = useCustomerOrders();
  const { navigate } = useNavigation<CustomerScreenNavigationProp>();

  return (
    <TouchableOpacity onPress={() => {}}>
      <Card containerStyle={tw("p-5 rounded-lg")}>
        <View style={tw("flex-row justify-between")}>
          <View>
            <Text style={tw("font-bold text-2xl")}>asdsadsd</Text>
            <Text style={[tw("text-sm"), { color: Colors.primary }]}>ID:</Text>
          </View>
          <View style={tw("flex-row items-center justify-end")}>
            <Text style={{ color: Colors.primary }}>
              {/* {loading ? "loadging..." : `${orders.length} x`} */}
            </Text>
            <Icon
              style={tw("mb-5 ml-auto")}
              name='box'
              type='entypo'
              size={50}
              color={Colors.primary}
            />
          </View>
        </View>
        <Card.Divider />
        <View>
          <Text>sadsdsad</Text>
        </View>
      </Card>
    </TouchableOpacity>
  );
};

export default OrderCard;
