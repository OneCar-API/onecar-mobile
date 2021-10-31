import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Routes from './src/routes';
import AppProvider from './src/hooks';

export default function App() {
  return (
    <AppProvider>
      <Routes />
    </AppProvider>
  );
}

