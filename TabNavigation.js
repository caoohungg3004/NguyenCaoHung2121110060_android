// TabNavigator.js
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Content from './components/Content';

import CartScreen from './components/CartScreen'
const Tab = createBottomTabNavigator();



function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Content} />
      
      
      <Tab.Screen name="Cart" component={CartScreen} />
      
    </Tab.Navigator>
  );
}

export default TabNavigator;