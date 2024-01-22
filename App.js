// App.js
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Content from './components/Content';
import Productdetail from './components/Productdetail';
import LoginScreen from './components/Login';
import SignupScreen from './components/Signup';
import TabNavigator from './TabNavigation';
import HomeIcon from './components/Homeicon';
import CartScreen from './components/CartScreen';
import HomeBanner from './components/HomeBanner';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" headerMode="none">
        <Stack.Screen
          name="Home"
          component={TabNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Productdetail"
          component={Productdetail}
          options={{
            headerShown: false,
            headerTransparent: true,
            headerBackTitleVisible: false, // Ẩn title trên nút quay lại
            headerLeft: null, // Ẩn nút quay lại
            headerTitleAlign: 'center', // Căn giữa tiêu đề
            headerTitle: 'Productdetail',
            // Nội dung tiêu đề
          }}
        />
        <Stack.Screen name='Login' component={LoginScreen}/>
        <Stack.Screen name='Signup' component={SignupScreen}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}

const HomeScreen = () => (
  <View style={styles.container}>

    <Content />

    <StatusBar style="auto" />
  </View>
);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {},
  content: {
    flex: 8,
  },
  footer: {
    flex: 1,
  },
});