// screens/AbsensiScreen.js
import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Button } from 'react-native-paper';

export default function AbsensiScreen({ route, navigation }) {
  const { siswa } = route.params;
  const [status, setStatus] = useState(null);

  const handleAbsensi = (newStatus) => {
    setStatus(newStatus);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Absensi untuk {siswa.name}</Text>
      <Text>Status: {status || 'Belum Absen'}</Text>
      <Button mode="contained" onPress={() => handleAbsensi('Hadir')} style={styles.button}>
        Hadir
      </Button>
      <Button mode="contained" onPress={() => handleAbsensi('Tidak Hadir')} style={styles.button}>
        Tidak Hadir
      </Button>
      <Button mode="outlined" onPress={() => navigation.goBack()} style={styles.button}>
        Selesai
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 24, marginBottom: 20 },
  button: { marginVertical: 5, width: '80%' },
});

