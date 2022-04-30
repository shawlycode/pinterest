import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Profile from "../Screens/Profile";
import PinDetails from "../Screens/PinDetails";
import Tabs from "../Navigations/Tabs";
import Basket from "../Screens/Basket";
import CategoryScreen from "../Screens/CategoryScreen";
import RegisterScreen from "../Screens/AuthScreens/RegisterScreen";
import SignInScreen from "../Screens/AuthScreens/SignInScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="SignInScreen" component={SignInScreen} />
        <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
        <Stack.Screen name="category" component={CategoryScreen} />
        <Stack.Screen name="Home" component={Tabs} />
        <Stack.Screen name="details" component={PinDetails} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Basket" component={Basket} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
