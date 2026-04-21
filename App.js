import "react-native-gesture-handler";
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { DrawerActions } from "@react-navigation/native";

// Screens
import ContatoScreen from "./src/screens/ContatoScreen.js";
import DetalhesScreen from "./src/screens/DetalhesScreen.js";
import LocaisScreen from "./src/screens/LocaisScreen.js";
import RestaurantesScreen from "./src/screens/RestaurantesScreen.js";
import SobreScreen from "./src/screens/SobreScreen.js";

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
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
            <MaterialCommunityIcons name="silverware-fork-knife" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}


function StackNavigator({ navigation }) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Tourly"
        component={TabNavigator}
        options={{
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
      />

      <Stack.Screen
        name="Detalhes"
        component={DetalhesScreen}
        options={{
          headerStyle: { backgroundColor: "#6A1B9A" },
          headerTintColor: "#fff",
        }}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <Drawer.Navigator screenOptions={{ headerShown: false }}>
          <Drawer.Screen name="Início" component={StackNavigator} />
          <Drawer.Screen name="Sobre" component={SobreScreen} />
          <Drawer.Screen name="Contato" component={ContatoScreen} />
        </Drawer.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}
