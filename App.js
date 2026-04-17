import "react-native-gesture-handler";
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { GestureHandlerRootView } from "react-native-gesture-handler";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import ContatoScreen from "./src/screens/ContatoScreen.js";
//import InicioScreen from "./src/screens/InicioScreen.js";
import DetalhesScreen from "./src/screens/DetalhesScreen.js"
import LocaisScreen from "./src/screens/LocaisScreen.js";
import RestaurantesScreen from "./src/screens/RestaurantesScreen.js";
import SobreScreen from "./src/screens/SobreScreen.js";

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator screenOptions=
      {{
        headerShown: false,
      }}>
      <Tab.Screen name="Pontos Turísticos" component={LocaisScreen} />
      <Tab.Screen name="Restaurantes" component={RestaurantesScreen} />
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
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.openDrawer()}
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
          headerShown: true,
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
          <Drawer.Screen name="Início" component={StackNavigation} />
          <Drawer.Screen name="Sobre" component={SobreScreen} />
          <Drawer.Screen name="Contato" component={ContatoScreen} />
        </Drawer.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}
