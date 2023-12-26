import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default function Header() {
  return (
    <View style={styles.content}>
      <Text>hung hung</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    width: '100%',
    height: '15%',
    backgroundColor: '#FF0000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});