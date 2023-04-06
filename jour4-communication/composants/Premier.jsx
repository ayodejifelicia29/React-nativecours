import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Premier = ({largeur,hauteur,unite}) => {
	// destructuré le paramétre props pour prendre les propriétés intéressantes.
  return (
	<View>
		{/** App => Composants Parent
		 * Premier => Composant Enfant (exécuté dans le composant APP)
		 * lorsque l'on a exécuté le composant Premier avec des props
		 * 
		 * 1 seule composant utilisable avec des valeurs différentes
		 * envoyer des données de <APP> => <Premier/> */}
	  <Text>Premier {largeur} {hauteur}  {unite} </Text>
	  {/** on peut alors utiliser directement les valeurs sans avoir à répéter pros.largeur, props.hauteur et props.unite */}
	</View>
  )
}

export default Premier

const styles = StyleSheet.create({})