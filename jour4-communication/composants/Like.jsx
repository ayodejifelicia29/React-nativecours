{/*cas pratique :
créer un nouveau composant qui s'appelle Like
dans ce composant 
image svg en forme de like => https://icons.getbootstrap.com/icons/hand-thumbs-up-fill/
un chiffre à côté 

si vous cliquez l'image en forme de pouce => augmenter le chiffre à côté du pouce de + 1*/}

import { StyleSheet, Text, View ,TouchableWithoutFeedback} from 'react-native'
import React,{useState} from 'react'
import HandLogo from "../assets/hand-thumbs-up-fill.svg"

const Like = () => {
	const [nb,setNb] =useState(0);
  return (
	<View style={styles.box}>
	 <TouchableWithoutFeedback onPress={() => {setNb(nb+1) }}>
	  <HandLogo width={30} height={30} fill='#3b5998' />
	  </TouchableWithoutFeedback>
	  <Text>{nb}</Text>
	</View>
  )
}

export default Like

const styles = StyleSheet.create({
	box: {flexDirection: "row" ,alignItems:"flex-end", marginBottom:30},
	espace:{marginLeft:20}
})

/**
npm i react-native-svg react-native-svg-transformer
npx expo install react-native-svg@13.4.0
npx expo customize metro.config.js
svg 
npm i 
npx create-expo-app --template => ajouter svg en + 
// props => App => Composant (Premier)
// Like state local que l'on modifier avec setNb => mettre à jour la vue 
// Essayer d'envoyer des info° => parent => Enfant => enfant lorsque l'on va cliquer sur 
// une action > modidifier la valeur stockée dans le parent 
*/