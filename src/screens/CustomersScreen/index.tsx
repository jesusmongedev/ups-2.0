import { ScrollView } from "react-native";
import React, { useState } from "react";
import { useTailwind } from "tailwind-rn/dist";
import { Image, Input } from "@rneui/themed";

import { Colors } from "../../shared/theme/Colors";

const CustomersScreen = () => {
  const tw = useTailwind();
  const [input, setInput] = useState<string>("");

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
    </ScrollView>
  );
};

export default CustomersScreen;
