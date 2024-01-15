// screens/SignupScreen.js

import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
const SignupScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async () => {
    try {
      // Gọi API để đăng ký tài khoản (ở đây là giả định)
      // Nếu đăng ký thành công, lưu thông tin đăng nhập vào AsyncStorage
      await AsyncStorage.setItem('username', username);
      alert('Đăng ký thành công!');
    } catch (error) {
      console.error('Lỗi khi đăng ký:', error);
    }
  };

  return (
    <View>
      <Text>Signup Screen</Text>
      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={(text) => setUsername(text)}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
      />
      <Button title="Signup" onPress={handleSignup} />
      <Text onPress={() => navigation.navigate('Login')}>Already have an account? Login</Text>
    </View>
  );
};

export default SignupScreen;