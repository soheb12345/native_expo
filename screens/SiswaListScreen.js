// screens/SiswaListScreen.js
import React, { useState } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { Card, Text, Button, Checkbox, Divider } from 'react-native-paper';

const mockData = [
  { id: '1', name: 'Sohebul' },
  { id: '2', name: 'Riki' },
  { id: '3', name: 'Samsul' },
  { id: '4', name: 'Abdullah' },
  { id: '5', name: 'Bagas' },
  { id: '6', name: 'Farhan' },
  { id: '7', name: 'Masruroh' },
  { id: '8', name: 'Fino' },
];

export default function AttendanceScreen() {
  const [students, setStudents] = useState(mockData);

  const toggleAttendance = (id) => {
    setStudents((prevStudents) =>
      prevStudents.map((student) =>
        student.id === id ? { ...student, checked: !student.checked } : student
      )
    );
  };

  const handleSaveAttendance = () => {
    const presentStudents = students.filter((student) => student.checked);
    alert(
      `Absen tersimpan!\nHadir: ${presentStudents
        .map((student) => student.name)
        .join(', ')}`
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Daftar Kehadiran</Text>
      <FlatList
        data={students}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Card style={styles.card}>
            <Card.Content style={styles.cardContent}>
              <Text style={styles.studentName}>{item.name}</Text>
              <Checkbox
                status={item.checked ? 'checked' : 'unchecked'}
                onPress={() => toggleAttendance(item.id)}
              />
            </Card.Content>
            <Divider />
          </Card>
        )}
      />
      <Button
        mode="contained"
        style={styles.saveButton}
        onPress={handleSaveAttendance}
      >
        Simpan Kehadiran
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f4f4f4',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 16,
    color: '#6200ee',
  },
  card: {
    marginBottom: 10,
    elevation: 3,
  },
  cardContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  studentName: {
    fontSize: 18,
    color: '#333',
  },
  saveButton: {
    marginTop: 20,
    backgroundColor: '#6200ee',
    paddingVertical: 10,
  },
});