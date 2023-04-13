import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import A from './composant/A';
import B from './composant/B';
import Exo1 from './composant/Exo1';

export default function App() {
  return (
    <View style={styles.container}>
      <Exo1/>
       <A/>
       <B/>
      <StatusBar style="auto" />
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
