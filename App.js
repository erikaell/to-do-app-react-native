import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import TextField from './src/components/TextField'
import { KontenbaseClient } from '@kontenbase/sdk'
import axios from 'axios';
import ToDoList from './src/components/ToDoList';

export default function App() {
  const kontenbase = new KontenbaseClient({ apiKey: '1c55b5c1-2ad0-458c-9f34-b4c5e5fcc640' })

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <ToDoList/>
      <TextField/>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
