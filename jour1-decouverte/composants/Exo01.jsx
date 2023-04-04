import {Text, StyleSheet} from "react-native"

 export function Exo1() { // the first word is only capital letter for the name of the function
	return <Text style={styles.p }>je suis l'exo1 </Text> // pas"à la fin"
}

  // fonction flechée 
  // export const Exo1 = () => <Text style={styles.p} >je suis l'exo1</Text>
const styles =StyleSheet.create({
	p : {
		color : "pink",
		fontSize : 30
	}
});

{/**dans le projet react native 

créer un nouveau composant Exo1 

ce composant retourne le texte 
je suis l'exo1 

mettre le texte en rose et taille de police en 30

=> une fois le composant créé => exécuté dans le composant App */}