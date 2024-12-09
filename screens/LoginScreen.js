// screens/LoginScreen.js
import React, { useState } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { TextInput, Button, Text, Card } from 'react-native-paper';

export default function LoginScreen({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (username === 'admin' && password === 'admin') {
      navigation.navigate('SiswaList');
    } else {
      alert('Username atau password salah');
    }
  };

  return (
    <View style={styles.container}>
      
      
      {/* Kartu Form Login */}
      <Card style={styles.card}>
        <Card.Title title="Selamat Datang" titleStyle={styles.cardTitle} />
        <Card.Content>
          <TextInput
            label="Username"
            value={username}
            onChangeText={setUsername}
            style={styles.input}
            mode="outlined"
            left={<TextInput.Icon name="account" />}
          />
          <TextInput
            label="Password"
            value={password}
            onChangeText={setPassword}
            style={styles.input}
            mode="outlined"
            secureTextEntry
            left={<TextInput.Icon name="lock" />}
          />
          <Button
            mode="contained"
            onPress={handleLogin}
            style={styles.button}
            labelStyle={styles.buttonText}
          >
            Login
          </Button>
        </Card.Content>
        <Text style={styles.footerText}>© 2024 Aplikasi Absensi Siswa</Text>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f0f4f8',
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  card: {
    width: '100%',
    padding: 20,
    borderRadius: 10,
    elevation: 5,
  },
  cardTitle: {
    fontSize: 24,
    textAlign: 'center',
    color: '#6200ee',
    marginBottom: 10,
  },
  input: {
    marginBottom: 15,
  },
  button: {
    marginTop: 10,
    backgroundColor: '#6200ee',
    paddingVertical: 8,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  footerText: {
    textAlign: 'center',
    fontSize: 12,
    marginTop: 20,
    color: '#888',
  },
});

