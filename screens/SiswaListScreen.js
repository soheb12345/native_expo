// screens/SiswaListScreen.js
import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { Card, Text, TouchableRipple } from 'react-native-paper';

const siswaData = [
  { id: '1', name: 'Sohebul' },
  { id: '2', name: 'Riki' },
  { id: '3', name: 'Samsul' },
  { id: '4', name: 'Abdullah' },
  { id: '5', name: 'Bagas' },
  { id: '6', name: 'Farhan' },
  { id: '7', name: 'Masruroh' },
  { id: '7', name: 'Fino' },
];

export default function SiswaListScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <FlatList
        data={siswaData}
        renderItem={({ item }) => (
          <TouchableRipple onPress={() => navigation.navigate('Absensi', { siswa: item })}>
            <Card style={styles.card}>
              <Card.Content>
                <Text style={styles.name}>{item.name}</Text>
              </Card.Content>
            </Card>
          </TouchableRipple>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10 },
  card: { marginVertical: 5, borderRadius: 8 },
  name: { fontSize: 18 },
});

