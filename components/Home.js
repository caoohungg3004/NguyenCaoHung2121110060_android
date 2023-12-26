import * as React from 'react';
import { SafeAreaView, StyleSheet, TextInput} from 'react-native';

export default function Home() {
    const [text, onChangeText] = React.useState('Useless Text');
    const [number, onChangeNumber] = React.useState('');
  
    return (
      <SafeAreaView>
      
        <TextInput
          style={styles.input}
          onChangeText={onChangeNumber}
          value={number}
          placeholder="Nhap"
          keyboardType="numeric"
        />
      </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
  });