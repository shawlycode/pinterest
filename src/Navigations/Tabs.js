import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Home from "../Screens/Home";
import Profile from "../Screens/Profile";
import { FontAwesome } from "@expo/vector-icons";

import CreatePin from "../Screens/CreatePin";
import Basket from "../Screens/Basket";

const Tab = createBottomTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#e91e63"
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: () => (
            <MaterialCommunityIcons name="home" color={"grey"} size={35} />
          ),
          showLabel: false,
        }}
      />
      <Tab.Screen
        name="CreatePin"
        component={CreatePin}
        options={{
          tabBarIcon: () => (
            <MaterialCommunityIcons name="plus" color={"grey"} size={35} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: () => (
            <MaterialCommunityIcons name="account" color={"grey"} size={35} />
          ),
        }}
      />
      <Tab.Screen
        name="Basket"
        component={Basket}
        options={{
          tabBarIcon: () => (
            <FontAwesome name="shopping-basket" size={24} color="black" />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
export default Tabs;
