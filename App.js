import React from 'react';
import Routes from './src/routes';
import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (

    <NavigationContainer>
      <Routes/>
    </NavigationContainer>
  );
}
