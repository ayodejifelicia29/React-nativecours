import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Article = (props) => {
  return (
	<View>
	  <Text>titre</Text>
	  <Text>{JSON.stringify(props.compteur)}</Text>
	  <View>
	  <Button title='+' onPress={()=> {props.augmenter (props.compteur.id)}}/>
		
	  </View>
	</View>
  )
}

export default Article

const styles = StyleSheet.create({})
