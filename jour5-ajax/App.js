import { StatusBar } from 'expo-status-bar';

import { StyleSheet, Text, View,Button } from 'react-native';
import Mounted from './composants/Mounted';
import Updated from './composants/Updated';
import Unmounted from './composants/Unmounted';
import { useState } from 'react';

export default function App() {

  /* function texteLong() {
    let texte = '';
    for (let i= 0; index < array.length; index++) {
      const element = array[index];
      
    }
   }*/
   const [show, setShow]=useState(true)
  return (
    <View style={styles.container}>
      <Mounted/>
      <Updated/>
       <View style={{marginTop :20}}>
       <Button onPress={() => {setShow(!show)}} title='show/hide'/>
       {show ? <Unmounted /> : ""}
       {/**show && <Unmounted /> même chose */}
       </View>
      {/** composant dans lequel on a 
       * <TextInput> saisir cocktail
       * <Button>
       * <View> => update de la liste
       * <Liste>
         => cliquer récupérer le texte saisi input et lancer une requête ajax*/}
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
