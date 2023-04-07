import { StyleSheet, Text, View } from 'react-native'
import React ,{useEffect}from 'react'

const Mounted = () => {

      useEffect(function () {
		// traitement ici n'est exécuteé QUE 1 seule fois au moment de l'affichage du composant
		console.log("le composant  Mounted est monté");
		//il est exécute 1 fois
	  },[])

  return (
	<View>
	  <Text>Mounted</Text>
	</View>
  )
}

export default Mounted

const styles = StyleSheet.create({})