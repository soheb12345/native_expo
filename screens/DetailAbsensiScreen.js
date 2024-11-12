// screens/DetailAbsensiScreen.js
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';

export default function DetailAbsensiScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Detail Absensi</Text>
      {/* Tambahkan informasi detail absensi di sini */}
      <Text>Contoh: Siswa A - Hadir</Text>
      <Text>Contoh: Siswa B - Tidak Hadir</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 24, marginBottom: 20 },
});

