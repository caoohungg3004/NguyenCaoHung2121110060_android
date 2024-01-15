// screens/LoginScreen.js

import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StyleSheet } from 'react-native';

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      // Lấy thông tin tài khoản từ AsyncStorage
      const storedUsername = await AsyncStorage.getItem('username');

      // Kiểm tra xem tài khoản có tồn tại không
      if (storedUsername && storedUsername === username) {
        // Gọi API để kiểm tra thông tin đăng nhập (ở đây là giả định)
        // Nếu thông tin hợp lệ, lưu thông tin đăng nhập vào AsyncStorage
        await AsyncStorage.setItem('username', username);
        alert('Đăng nhập thành công!');

        // Chuyển hướng đến màn hình chính (main)
        navigation.navigate('Home');
      } else {
        alert('Tài khoản không tồn tại!');
      }
    } catch (error) {
      console.error('Lỗi khi đăng nhập:', error);
    }
  };

  return (
    <View style={{ paddingLeft: 10, paddingRight: 10, marginTop: 20 }}>
      <Text  style={{fontSize:20,textAlign:"center"}}>Đăng Nhập Tài Khoản</Text>

      <TextInput
        placeholder="Tài khoản đăng nhập....."
        value={username}
        style={{ padding: 10, marginTop: 10,border:1 }}
        onChangeText={(text) => setUsername(text)}
      />
      <TextInput
        placeholder="Password"
        value={password}
        style={{ padding: 10, marginTop: 10,marginBottom:10 }}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
      />
      <Button title="Login"  onPress={handleLogin} />
      <Text style={{marginTop:10}} onPress={() => navigation.navigate('Signup')}>Don't have an account? Signup</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    color: 'blue',
  },
  button: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
});

export default LoginScreen;