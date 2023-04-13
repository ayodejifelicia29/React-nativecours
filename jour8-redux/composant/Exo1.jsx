import { StyleSheet, Text, View ,Image, Button} from 'react-native'
import React, { useReducer } from 'react'
import {reducer} from "../reducer/imageReducer"


const Exo1 = () => {
	const[style,dispatch]= useReducer(reducer, {width: 100 , height :100} )
  return (
	<View>
	  <Text>Exo1</Text>
	  <Image source={{ uri : "https://source.unsplash.com/random/300x300"  }} style={style} />
      <Button onPress={ () => dispatch("ZOOM") } title="zoom"  color="pink"/>
      <Button onPress={ () => dispatch("DEZOOM") } title="dezoom"color="green"  />
      <Button onPress={ () => dispatch("HIDE") } title="HIDE" color="purple" />
      <Button onPress={ () => dispatch("RESET") } title="remise à zéro" />
	  

	</View>
  )
}

export default Exo1

const styles = StyleSheet.create({})