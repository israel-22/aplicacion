// navegadores/Navegadores.tsx

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
import InicioScreen from '../screens/InicioScreen';
import RegistroScreen from '../screens/RegistroScreen';

type RootStackParamList = {
  Inicio: undefined;
  Registro: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();
const Tab = createMaterialTopTabNavigator<RootStackParamList>();

export const Navegadores: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Inicio">
        <Stack.Screen
          name="Inicio"
          component={MainTabs}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Registro"
          component={RegistroScreen}
          options={{ title: 'Registro de Productos' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

function MainTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Inicio" component={InicioScreen} />
      <Tab.Screen name="Registro" component={RegistroScreen} />
    </Tab.Navigator>
  );
};
