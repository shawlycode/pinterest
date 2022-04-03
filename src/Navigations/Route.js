import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Profile from "../components/Profile";
import CreatePin from "../components/CreatePin";
import Tabs from "../Navigations/Tabs";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Tabs} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="createPin" component={CreatePin} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
