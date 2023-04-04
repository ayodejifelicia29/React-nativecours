 // composant racine (root) de notre projet
 // divisé en 3 parties

 // import importer des fonctionnalités qui sont stockées dans le dossier node_modules
 // React Native utilise le système de module  ES6
// il n'y a ./ devant les noms des librairies => node_modules (import explication)
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

// le composant => fonction javascript
// APP () il faut OBLIGATOIREMENT s'appeler APP (export)
// return (
// pas html pas du javascript pas xml
// JSX mix entre entre html / js et xml
//)
// HMR => Hot Module Reload  react et expo

 import { Bonjour } from './composants/Bonjour';

export default function App() {
  return (
    <View style={styles.container}>
       <Bonjour />
       {/* composant => un peu comme si on crée une balise */}
        {/* function Bonjour (){} Bonjour () => <Bonjour />*/}
       {/** commentaire en jsx */}
      <Text> Formation Doranco 2023 </Text>
      <Text> Groupe CDA </Text>
      <StatusBar style="auto" />
    </View>
  );
}

// facultative
// permet de mettre en forme le composant
// StyleSheet => pas de css classique  => css à la sauce javascript 
//  <Text> => html balise => React Composant
//  <Text>  => <p> <h1> <h2> <li> 
// <View> => <div>
// <StatusBar> => Zone de haut de l'écran
// <Text> </Text> composant ouvert et fermant
// <StausBar style ="auto" /> composant orphelin ne pas oublier
// le / dans le composant
// <p class = "first"> coucou >/p> => attribut de la balise p
// < View style ={styles. container}>  => style attribut ou props

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
