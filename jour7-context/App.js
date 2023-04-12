import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Formulaire from './composant/Formulaire';
import Profil from './composant/Profil';
import { ProfilConxtextProvider } from './contexts/profilContext';

export default function App() {
  return (
    <ProfilConxtextProvider>
    <View style={styles.container}>
      {/** Formulaire ET Profil composants frères */}
      <Formulaire/>
      <Profil/>
      <StatusBar style="auto" />
    </View>
    </ProfilConxtextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});
