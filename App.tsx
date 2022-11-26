import { TailwindProvider } from "tailwind-rn";
import { NavigationContainer } from "@react-navigation/native";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

import utilities from "./tailwind.json";
import RootNavigator from "./src/navigator/RootNavigator";

const client = new ApolloClient({
  uri: "https://cangucu.stepzen.net/api/ups-graphql/__graphql",
  cache: new InMemoryCache(),
  headers: {
    Authorization:
      "Apikey cangucu::stepzen.net+1000::ffc6ea518cb787e68d7e35ac601b5bdb366beec969881a35d0902f1476577a76",
  },
});

export default function App() {
  return (
    // @ts-ignore - TailwindProvider is missing a type definition
    <TailwindProvider utilities={utilities}>
      <ApolloProvider client={client}>
        <NavigationContainer>
          <RootNavigator />
        </NavigationContainer>
      </ApolloProvider>
    </TailwindProvider>
  );
}
