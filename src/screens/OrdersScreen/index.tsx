import { View, ScrollView, ActivityIndicator, FlatList } from "react-native";
import React, { useState } from "react";
import { useTailwind } from "tailwind-rn/dist";
import { useOrders } from "../../hooks/useOrders";
import { Button, Image } from "@rneui/themed";
import { Colors } from "../../shared/theme/Colors";
import { sortOrdersByDate } from "../../utils/orders.utils";
import OrderCard from "../../components/OrderCard";

const OrdersScreen = () => {
  const tw = useTailwind();
  const { loading, error, orders } = useOrders();
  console.log("order", orders);
  const [ascending, setAscending] = useState<boolean>(false);

  const toggleSort = () => setAscending((prevSort) => !prevSort);

  return (
    <ScrollView style={{ backgroundColor: Colors.secondary }}>
      <Image
        source={{
          uri: "https://links.papareact.com/m51",
        }}
        containerStyle={tw("w-full h-64")}
        PlaceholderContent={<ActivityIndicator />}
      />
      <View style={tw("mx-4")}>
        <Button
          onPress={toggleSort}
          containerStyle={{
            backgroundColor: Colors.lighGray,
          }}
          color={Colors.neomorfismo}
          titleStyle={{ color: Colors.gray }}>
          Showing {ascending ? "Oldest" : "Most Recent"} First
        </Button>

        {sortOrdersByDate(orders, ascending).map((order) => (
          <OrderCard
            key={order.trackingId}
            order={order}
            trackinId={order.trackingId}
          />
        ))}
      </View>
    </ScrollView>
  );
};

export default OrdersScreen;
