import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import InicioScreen from './screens/InicioScreen';
import RegistroScreen from './screens/RegistroScreen';

type RootStackParamList = {
  Inicio: undefined;
  Registro: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();
const Tab = createMaterialTopTabNavigator<RootStackParamList>();

function MainTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Inicio" component={InicioScreen} />
      <Tab.Screen name="Registro" component={RegistroScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Inicio">
        <Stack.Screen 
          name="Inicio" 
          component={MainTabs} 
          options={{ headerShown: false }} 
        />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
