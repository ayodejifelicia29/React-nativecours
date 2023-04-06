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