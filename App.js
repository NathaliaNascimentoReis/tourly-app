import "react-native-gesture-handler";
import React from "react";
import { TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import { NavigationContainer, DrawerActions } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import ContatoScreen from "./src/screens/ContatoScreen";
import DetalhesScreen from "./src/screens/DetalhesScreen";
import LocaisScreen from "./src/screens/LocaisScreen";
import RestaurantesScreen from "./src/screens/RestaurantesScreen";
import SobreScreen from "./src/screens/SobreScreen";

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#6A1B9A",
          borderTopWidth: 0,
          height: 60,
        },
        tabBarActiveTintColor: "#fff",
        tabBarInactiveTintColor: "#D1B3E0",
      }}
    >
      <Tab.Screen
        name="Pontos Turísticos"
        component={LocaisScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="map-marker" color={color} size={size} />
          ),
        }}
      />

      <Tab.Screen
        name="Restaurantes"
        component={RestaurantesScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="silverware-fork-knife"
              color={color}
              size={size}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function StackNavigator({ route, navigation }) {

  const initialRoute =
    route.name === "Sobre"
      ? "Sobre"
      : route.name === "Contato"
      ? "Contato"
      : "Tourly";

  return (
    <Stack.Navigator
      initialRouteName={initialRoute}
      screenOptions={{
        headerStyle: { backgroundColor: "#6A1B9A" },
        headerTintColor: "#fff",
        headerTitleAlign: "center",

        headerLeft: () => (
          <TouchableOpacity
            onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
            style={{ marginLeft: 15 }}
          >
            <MaterialCommunityIcons name="menu" size={30} color="#fff" />
          </TouchableOpacity>
        ),

        headerRight: () => (
          <TouchableOpacity style={{ marginRight: 15 }}>
            <MaterialCommunityIcons
              name="account-circle-outline"
              size={28}
              color="#fff"
            />
          </TouchableOpacity>
        ),
      }}
    >
      <Stack.Screen name="Tourly" component={TabNavigator} />
      <Stack.Screen name="Sobre" component={SobreScreen} />
      <Stack.Screen name="Contato" component={ContatoScreen} />
      <Stack.Screen name="Detalhes" component={DetalhesScreen} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <Drawer.Navigator screenOptions={{ headerShown: false }}>
          <Drawer.Screen name="Início" component={StackNavigator} />
          <Drawer.Screen name="Sobre" component={StackNavigator} />
          <Drawer.Screen name="Contato" component={StackNavigator} />
        </Drawer.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}