import { View, Text } from "react-native";
import React from "react";
import { Card, Icon } from "@rneui/themed";

import { useTailwind } from "tailwind-rn/dist";
import MapView, { Marker } from "react-native-maps";

import { Colors } from "../shared/theme/Colors";

type Props = {
  order: Order;
};

const DeliveryCard = ({ order }: Props) => {
  const tw = useTailwind();
  return (
    <Card
      containerStyle={[
        tw("rounded-t-lg my-2"),
        {
          backgroundColor: Colors.primary,
          padding: 0,
          paddingTop: 16,
          shadowColor: Colors.black,
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.25,
          shadowRadius: 4,
        },
      ]}>
      {/* Details */}
      <View>
        <Icon name='box' type='entypo' size={50} color={Colors.white} />
        <Text
          style={tw("text-center text-xs uppercase font-bold text-white mt-2")}>
          {order.carrier} - {order.trackingId}
        </Text>
        <Text style={tw("text-center text-white text-lg font-bold")}>
          Expected Delivery: {new Date(order.createdAt).toLocaleDateString()}
        </Text>
      </View>
      <Card.Divider color={Colors.lighGray} style={tw("mt-2")} />
      {/* Address */}
      <View style={tw("pb-5")}>
        <Text style={tw("text-center text-white text-base font-bold")}>
          Address
        </Text>
        <Text style={tw("text-center text-xs text-white")}>
          {order.Address}, {order.City}
        </Text>
        <Text style={tw("text-center text-xs  text-white italic")}>
          Shipping Cost: ${order.shippingCost}
        </Text>
      </View>
      <Card.Divider color={Colors.lighGray} />
      {/* Items */}
      <View style={tw("pt-2 px-4 pb-4")}>
        {order.trackingItems.items.map(({ item_id, name, quantity }) => (
          <View
            key={item_id}
            style={tw("flex-row justify-between items-center")}>
            <Text style={tw("text-sm text-white italic")}>{name}</Text>
            <Text style={tw("text-white text-xl")}>x {quantity}</Text>
          </View>
        ))}
      </View>
      {/* Map */}
      <MapView
        initialRegion={{
          latitude: order.Lat,
          longitude: order.Lng,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}
        style={[tw("w-full"), { height: 200 }]}>
        {/* Marker */}
        {order.Lat && order.Lng && (
          <Marker
            coordinate={{ latitude: order.Lat, longitude: order.Lng }}
            title='Delivery Location'
            description={order.Address}
            identifier='destination'
          />
        )}
      </MapView>
    </Card>
  );
};

export default DeliveryCard;
