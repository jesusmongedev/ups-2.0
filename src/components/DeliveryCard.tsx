import { View, Text } from "react-native";
import React from "react";
import { useTailwind } from "tailwind-rn/dist";
import { Card, Icon } from "@rneui/themed";
import { Colors } from "../shared/theme/Colors";

type Props = {
  order: Order;
};

const DeliveryCard = ({ order }: Props) => {
  const tw = useTailwind();
  return (
    <Card containerStyle={{ backgroundColor: Colors.primary }}>
      {/* Details */}
      <View>
        <Icon name='box' type='entypo' size={50} color={Colors.white} />
        <Text>
          {order.carrier} - {order.trackingId}
        </Text>
        <Text>Expected Delivery: {order.createdAt}</Text>
      </View>

      {/* Address */}
      <View>
        <Text>Address</Text>
        <Text>
          {order.Address}, {order.City}
        </Text>
        <Text>Shipping Cost: ${order.shippingCost}</Text>
      </View>
      <Card.Divider />
      {/* Items */}
      <View>
        {order.trackingItems.items.map(({ item_id, name, quantity }) => (
          <View key={item_id}>
            <Text>{name}</Text>
            <Text>x {quantity}</Text>
          </View>
        ))}
      </View>
    </Card>
  );
};

export default DeliveryCard;
