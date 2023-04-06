import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Premier from './composants/Premier';

export default function App() {
    
     const liste =[
       {largeur: 40, hauteur : 40 , unite: "cm"},
       {largeur: 10, hauteur : 30 , unite: "km"},
       {largeur: 60, hauteur : 12 , unite: "mm"},
       {largeur: 60, hauteur : 12 , unite: "mm"},
     ]
  return (
    <View style={styles.container}>
      {/** exécute le composant Premier dans APP en lui ajoutant des props en htlm => attribut
       * vous pouvez en mettre autant que nécessaire nommer comme vous voulez
       */}
      {/*<Premier largeur={10} hauteur= "40" unite="cm"/>
      <Premier largeur={30} hauteur="30" unite="km"/>
      <Premier largeur={50} hauteur= "1é" unite="mm"/> */}
     
     {/** it's the same as the up but in différent form */}
      {liste.map(function (item, index) {
        return <Premier
         largeur={item.largeur}
         hauteur={item.hauteur}
         unite={item.unite}
         key={index}
         />
         {/** props spéciale qui permet à React Native de distinguer les différents éléments <Premier /> de la liste */}
      }) }
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
