import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types/type';

type NavigationProp = StackNavigationProp<RootStackParamList, 'SignUp'>;

export const LoginScreen: React.FC = () => {
  const navigation = useNavigation<NavigationProp>();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      {/* Welcome Text */}
      <Text style={styles.welcomeText}>Welcome</Text>

      {/* Input Fields */}
      <TextInput
        style={styles.inputField}
        placeholder="Username"
        placeholderTextColor="#D1E0EB9E"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.inputField}
        placeholder="Password"
        placeholderTextColor="#D1E0EB9E"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      {/* Buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.signInButton} onPress={() => console.log('Sign In Pressed')}>
          <Text style={styles.signInButtonText}>Sign In</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.forgotPasswordButton}
          onPress={() => console.log('Forgot Password Pressed')}
        >
          <Text style={styles.forgotPasswordText}>Forgot Password</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.createAccountButton}
          onPress={() => navigation.navigate('SignUp')} // Navigate back to SignUpScreen
        >
          <Text style={styles.createAccountButtonText}>Create Account</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

// Styles for LoginScreen
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    padding: 24,
    justifyContent: 'center',
  },
  welcomeText: {
    fontSize: 28,
    color: '#D7DFE4',
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 24,
  },
  inputField: {
    backgroundColor: '#B8CFE01F',
    color: '#FFFFFF',
    padding: 16,
    fontSize: 16,
    borderRadius: 8,
    marginBottom: 16,
  },
  buttonContainer: {
    marginTop: 24,
    alignItems: 'center',
  },
  signInButton: {
    backgroundColor: '#007BFF',
    borderRadius: 24,
    width: '100%',
    paddingVertical: 18,
    alignItems: 'center',
    marginBottom: 16,
  },
  signInButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
  },
  forgotPasswordButton: {
    width: '100%',
    alignItems: 'center',
    paddingVertical: 18,
    borderRadius: 24,
    backgroundColor: '#B8CFE01F',
    marginBottom: 16,
  },
  forgotPasswordText: {
    color: '#D7DFE4',
    fontSize: 14,
    fontWeight: '500',
  },
  createAccountButton: {
    borderWidth: 2,
    borderColor: '#B8CFE01F',
    borderRadius: 24,
    width: '100%',
    paddingVertical: 18,
    alignItems: 'center',
  },
  createAccountButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
  },
});

export default LoginScreen;
