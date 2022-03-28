import { View, Text } from "react-native";
import * as React from "react";
import { createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import Home from "./MainScreen";
import DetailsScreen from "./Details";
import SettingsScreen from "./Setting";
import ProfileScreen from "./Profile";

const homeName = "Home";
const detailsName = "Details";
const settingsName = "Settings";
const ProfileName = "Profile";

const Tab = createBottomTabNavigator();

export default function Activities() {
  return (
    <Tab.Navigator
      initialRouteName={homeName}
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: 'orange',
        tabBarLabelStyle:{ paddingBottom: 10, fontSize: 10 },
        tabBarStyle: { padding: 10, height: 70},
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let rn = route.name;

          if (rn === homeName) {
            iconName = focused ? "home" : "home-outline";
          } else if (rn === detailsName) {
            iconName = focused ? "list" : "list-outline";
          } else if (rn === settingsName) {
            iconName = focused ? "settings" : "settings-outline";
          } else if (rn === ProfileName) {
            iconName = focused ? "person" : "person-outline";
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name={homeName} component={Home} />
      <Tab.Screen name={detailsName} component={DetailsScreen} />
      <Tab.Screen name={ProfileName} component={ProfileScreen} />
      <Tab.Screen name={settingsName} component={SettingsScreen} />
    </Tab.Navigator>
  );
}
