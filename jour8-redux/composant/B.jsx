import { StyleSheet, Text, View ,Button} from 'react-native'
import React,{useReducer} from 'react'

function reduce(state,action) {
	switch (action) {
		case "AUGMENTER" :
			return state +1;
	  case "DIMINUER" :
		return state -1;
	 case "ZERO"	 :
		return 0;
		default:
			return state;
	}
	
}
// expliquer le hook useReducer
// il a la même fonction que useState => hook permet de gérer
// state manager gérer l'état du composant
// dans React quand vous utilisez useState =>useReducer
// comme pour useState =>useReducer lorsqu'il est exécuté
//il retourne un tableau avec 2 valeurs
//nb => state
// fonction que l'on appeler un dispatcher
//par contre useReducer prend 2 paramètres (fonction,valeur initial de l'état)
// la fonction fonction reductrice 
// dans la fonction réductrice que l'on va stocker l'ensemble des traitements que l'on veut effectuer sur l'état
// Contexte + useReducer => Redux   

const B = () => {
	//const [nb,setNb] =useState(0);

	const[nb, dispatch]=useReducer(reduce,0)
  return (
	<View>
		<Text>Composant b</Text>
	  <Text>{nb}</Text>
	  <Button title='augmenter' onPress={() => dispatch("AUGMENTER")} color="purple"/>
	  <Button title='dimumer' onPress={() => dispatch("DIMINUER")} color="pink"/>
	  <Button title='remise à 0' onPress={() => dispatch("ZERO")} color=""/>
	</View>
  )
}

export default B

const styles = StyleSheet.create({})