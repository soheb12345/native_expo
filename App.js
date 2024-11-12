import * as React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from './screens/LoginScreen';
import SiswaListScreen from './screens/SiswaListScreen';
import AbsensiScreen from './screens/AbsensiScreen';
import DetailAbsensiScreen from './screens/DetailAbsensiScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
          <Stack.Screen name="SiswaList" component={SiswaListScreen} options={{ title: 'Daftar Siswa' }} />
          <Stack.Screen name="Absensi" component={AbsensiScreen} options={{ title: 'Absensi Siswa' }} />
          <Stack.Screen name="DetailAbsensi" component={DetailAbsensiScreen} options={{ title: 'Detail Absensi' }} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

