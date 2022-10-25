import { ScrollView, Text } from "react-native";
import React, { useState } from "react";
import { useTailwind } from "tailwind-rn/dist";

import { useQuery } from "@apollo/client";
import { Image, Input } from "@rneui/themed";

import { Colors } from "../../shared/theme/Colors";
import { GET_CUSTOMERS } from "../../graphql/queries";
import CustomerCard from "../../components/CustomerCard";

const CustomersScreen = () => {
  const tw = useTailwind();
  const [input, setInput] = useState<string>("");
  const { loading, error, data } = useQuery(GET_CUSTOMERS);

  return (
    <ScrollView style={{ backgroundColor: Colors.primary }}>
      <Image
        source={{
          uri: "https://links.papareact.com/3jc",
        }}
        style={tw("w-full h-64")}
      />
      <Input
        placeholder='Search by Customer'
        value={input}
        onChangeText={setInput}
        containerStyle={tw("bg-white pt-5 pb-0  px-10")}
      />

      {!loading &&
        data &&
        data?.getCustomers
          .filter(({ value: { name } }: CustomerResponse) =>
            name.includes(input)
          )
          .map(({ name: ID, value: { name, email } }: CustomerResponse) => (
            <CustomerCard key={ID} name={name} email={email} userId={ID} />
          ))}

      {/* Loading handling */}
      {loading && <Text>Loading...</Text>}

      {/* Error handling */}
      {error && <Text>"Error try again"</Text>}
    </ScrollView>
  );
};

export default CustomersScreen;
