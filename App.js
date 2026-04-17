import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import ContatoScreen from './src/screens/ContatoScreen.js'
import InicioScreen from './src/screens/InicioScreen.js'
import LocaisSreen from './src/screens/LocaisScreen.js'
import RestaurantesScreen from './src/screens/RestaurantesScreen.js'
import SobreScreen from './src/screens/SobreScreen.js'

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
