import { Button, Image, Input } from "@rneui/themed";
import React, { useState } from "react";
import {
  ActivityIndicator,
  Alert,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";
import { useTailwind } from "tailwind-rn/dist";
import { CompositeScreenProps } from "@react-navigation/native";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { initializeApp } from "firebase/app";

import { Colors } from "../../shared/theme/Colors";
import { firebaseConfig } from "../../../firebase.config";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../navigator/RootNavigator";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export interface LoginProps
  extends NativeStackNavigationProp<RootStackParamList, "Login"> {}

export const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const tw = useTailwind();

  const { navigate } = useNavigation<LoginProps>();

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  //   const {} useNavigation<LoginProps>()

  const handleCreateUser = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        // Signed in
        console.log("user", user);
        // ...
      })
      .catch((error) => {
        const errorMessage = error.message;
        Alert.alert("Error", errorMessage);
        console.log("error", errorMessage);
        // ..
      });
  };

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        // Signed in
        console.log("user", user);
        navigate("Main");
        // ...
      })
      .catch((error) => {
        const errorMessage = error.message;
        Alert.alert("Error", errorMessage);
        console.log("error", errorMessage);
        // ..
      });
  };

  return (
    <ScrollView style={{ backgroundColor: Colors.primary }}>
      <Image
        source={{
          uri: "https://links.papareact.com/3jc",
        }}
        style={tw("w-full h-64")}
        PlaceholderContent={<ActivityIndicator />}
      />
      <View style={tw("px-10 bg-white pb-4")}>
        <Input
          placeholder='Email'
          value={email}
          onChangeText={setEmail}
          containerStyle={tw("pt-5 pb-0 ")}
          keyboardType='email-address'
        />
        <Input
          placeholder='Password'
          value={password}
          onChangeText={setPassword}
          containerStyle={tw("pt-5 pb-0")}
          secureTextEntry={true}
        />
        <Button
          color={Colors.secondary}
          title={"Login"}
          onPress={handleLogin}
        />
        <Button
          title={"Register"}
          type='outline'
          containerStyle={tw("my-2")}
          onPress={handleCreateUser}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({});
