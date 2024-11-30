import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types/type';

type NavigationProp = StackNavigationProp<RootStackParamList, 'Login'>;

export const SignUpScreen: React.FC = () => {
  const navigation = useNavigation<NavigationProp>();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <View style={styles.container}>
      {/* Welcome Text */}
      <Text style={styles.welcomeText}>Welcome</Text>

      {/* Input Fields */}
      <TextInput
        style={styles.input}
        placeholder="Username"
        placeholderTextColor="#D1E0EB9E"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#D1E0EB9E"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#D1E0EB9E"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        placeholderTextColor="#D1E0EB9E"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
      />

      {/* Buttons */}
      <TouchableOpacity
        style={styles.signUpButton}
        onPress={() => navigation.navigate('Login')} // Navigate to LoginScreen
      >
        <Text style={styles.signUpButtonText}>Sign Up</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.alreadyButton}
        onPress={() => navigation.navigate('Login')} // Navigate to LoginScreen
      >
        <Text style={styles.alreadyButtonText}>Already have an account</Text>
      </TouchableOpacity>
    </View>
  );
};

// Styles for SignUpScreen
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#02090D',
    paddingHorizontal: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcomeText: {
    fontSize: 28,
    color: '#FFFFFF',
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 32,
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#B8CFE01F',
    borderRadius: 12,
    paddingHorizontal: 16,
    color: '#FFFFFF',
    fontSize: 16,
    marginBottom: 16,
  },
  signUpButton: {
    width: '100%',
    height: 50,
    backgroundColor: '#0354D6',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    marginTop: 24,
  },
  signUpButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  alreadyButton: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    marginTop: 32,
    backgroundColor: '#B8CFE01F',
  },
  alreadyButtonText: {
    color: '#FDFEFE',
    fontSize: 17,
    fontWeight: '500',
    textAlign: 'center',
  },
});

export default SignUpScreen;
