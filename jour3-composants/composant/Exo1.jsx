// cas pratique créer un nouveau composant Exo1
// titre => exo 1
// champ input monologne => email
// champ input monologne => sujet
// champ input multiligne => description
// bouton de soumission
// ajouter ce formulaire sous le formulaire Form

import { StyleSheet, Text, View , TextInput, Button} from 'react-native'
import BouncyCheckbox from "react-native-bouncy-checkbox"
import React from 'react'


const Exo1 = () => {
  return (
	<View style={[styles.box , styles.delimiter]}>
	  <Text style={styles.sty}>Exo1</Text>
	  <TextInput placeholder=' Votre Email' style={ styles.input2} />
	  <TextInput placeholder=' Votre Sujet' style={ styles.input2} />
	  <TextInput placeholder=' Description' multiline={true} numberOfLines={5} style={[styles.input2]}/>
	  <BouncyCheckbox onPress={() => {}} text="accepter les conditions" style={{marginBottom : 10}}/>
	  <Button title="Envoyer" onPress={() => {}}  />
	
	</View>
  )
}

export default Exo1

const styles = StyleSheet.create({
	sty : { paddingHorizontal : 4 , textAlign : "center" , margin : 4},
	box: { paddingHorizontal :15 },
	input2 :{borderColor :"black" , padding : 5 , borderWidth : 1, marginBottom: 10 , width :"100%"},
	delimiter : {paddingTop : 10 , marginTop : 10 , borderTopColor : "black" , borderTopWidth : 1}
});