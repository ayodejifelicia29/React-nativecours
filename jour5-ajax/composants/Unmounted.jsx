import { StyleSheet, Text, View } from 'react-native'
import React, {useEffect} from 'react'

const Unmounted = () => {

	useEffect(function () {
		return ()=> {
		 console.log("le composant Unmounted est supprimé de l'ecran");
		}
	})
  return (
	<View>
	  <Text>Unmounted</Text>
	</View>
  )
}

export default Unmounted

const styles = StyleSheet.create({})