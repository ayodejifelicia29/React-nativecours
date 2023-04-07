import { StatusBar } from 'expo-status-bar';
import { ScrollView } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import Mounted from './composants/Mounted';
import Updated from './composants/Updated';

export default function App() {

  /* function texteLong() {
    let texte = '';
    for (let i= 0; index < array.length; index++) {
      const element = array[index];
      
    }
   }*/
  return (
    <View style={styles.container}>
      <Mounted/>
      <Updated/>
      <Text></Text>
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop:25
  },
});
