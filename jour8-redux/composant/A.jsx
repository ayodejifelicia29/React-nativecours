import { StyleSheet, Text, View,Button} from 'react-native'
import React,{useState} from 'react'

const A = () => {

	const [nb,setNb] =useState(0);
	// plus impéra
  return (
	<View>
	  <Text>{nb}</Text>
	  <Button title='augmenter' onPress={() =>{setNb(nb + 1)}} color="purple"/>
	  <Button title='dimumer' onPress={() =>{setNb(nb - 1)}} color="pink"/>
	  <Button title='remise à 0' onPress={() =>{setNb(0)}} color=""/>
	 
	</View>
  )
}

export default A

const styles = StyleSheet.create({

})