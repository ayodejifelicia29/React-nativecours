// cas pratique créer un nouveau composant Exo1
// titre => exo 1
// champ input monologne => email
// champ input monologne => sujet
// champ input multiligne => description
// bouton de soumission
// ajouter ce formulaire sous le formulaire Form

import { StyleSheet, Text, View , TextInput, Button} from 'react-native'
import React from 'react'


const Exo1 = () => {
  return (
	<View style = {styles.box}>
	  <Text style = {styles.sty}>Exo1</Text>
	  <TextInput placeholder = 'Email' style = { styles.input2} />
	  <TextInput placeholder = 'Sujet' style = { styles.input2} />
	  <TextInput placeholder = ' Description' multiline ={true} numberOfLines={5} style = {[styles.input2]}/>
	  <Button title="Soumission" onPress={() => {}}  />
	
	</View>
  )
}

export default Exo1

const styles = StyleSheet.create({
	sty : {padding : 4 , textAlign : "center" , margin : 5},
	box: { paddingHorizontal :15},
	input2 :{borderColor :"black" , padding : 5 , borderWidth : 1, marginBottom: 10}
});