import {Text, StyleSheet} from "react-native"

 export function Bonjour() {
	return <Text style={styles.miseEnFormeP}>Bonjour</Text> // pas"à la fin"
}

const styles =StyleSheet.create({
	miseEnFormeP : {
		color : "green",
		fontSize : 60
	}
})
{/**dans le projet react native 

créer un nouveau composant Exo1 

ce composant retourne le texte 
je suis l'exo1 

mettre le texte en rose et taille de police en 30

=> une fois le composant créé => exécuté dans le composant App */}