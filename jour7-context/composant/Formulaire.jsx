import { Button, StyleSheet, Text, View ,TextInput} from 'react-native'
import React ,{useContext}from 'react'
import { ProfilConxtext } from '../contexts/profilContext'

const Formulaire = () => {
	const{profil, login} = useContext(ProfilConxtext)
  return (
	<View style={styles.box}>  
	   <Text>Formulaire</Text>
	   <TextInput placeholder='email' style={styles.input} />
	   <TextInput placeholder= 'password'style={styles.input}  />
	   <Button title="soumettre" onPress={()=> ("")}/>

	</View>
  )
}

export default Formulaire

const styles = StyleSheet.create({
	box: {margin:10},
	input :{borderWidth: 1, borderColor:"black", padding : 5 , marginBottom : 10}
})