 //rnfe (to create import)
 // rnfes (to create import/ style)

import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const Form = () => {
  return (
	<View style={styles.box}>
	  <Text>Créer un formulaire</Text>
	  {/**https://reactnative.dev/docs/textinput */}
	  <TextInput placeholder='votre nom' style={ styles.input} />
	  <TextInput placeholder=' commentaire' multiline={true} numberOfLines={5} style={[styles.input]}/>
	  <Button title="Soumettre" onPress={() => {}}  />
	</View>
  )
}

export default Form

const styles = StyleSheet.create({
box : { paddingHorizontal :10 , alignItems: 'flex-start'},
input :{borderColor :"black" , padding : 5 , borderWidth : 1, marginBottom: 10 , width :"100%"}
});