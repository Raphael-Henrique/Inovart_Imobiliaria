import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import animationTransitionPage from './src/components/styles/animation_transition_page'

import HomeScreen from './src/pages/home'
import ListagemScreen from './src/pages/consulta';
import CadastroScreen from './src/pages/cadastro';

const Stack = createStackNavigator()

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ transitionSpec: { open: animationTransitionPage, close: animationTransitionPage } }}>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{
              //createAppbarStyle('Imobiliaria')
              headerShown: false,
              title: 'Imobiliária',
              headerStyle: {
                backgroundColor: '#000000',
              },
              headerTintColor: '#ffff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}
          />
  
          <Stack.Screen name="Listagem"
            component={ListagemScreen}
            options={{
              title: 'Consulta de anúncio',
              headerStyle: {
                backgroundColor: '#000000',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}
          />

          <Stack.Screen name="Cadastro"
            component={CadastroScreen}
            options={{
              title: 'Cadastro de anúncio',
              headerStyle: {
                backgroundColor: '#000000',
              },
              headerTintColor: '#ffff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}
          />

        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}