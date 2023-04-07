import { StyleSheet, Text, View } from 'react-native'
import React , {useEffect,useState} from 'react'
import { Button } from 'react-native'

const Updated = () => {
    const [nb,setNb] =useState(0)

	useEffect(function () {
		console.log("le composant Updatesd a sa local state nb modifié")
	},[nb])

  return (
	<View>
	  <Text>Updated</Text>
	  <Button onPress={()=> setNb(nb+1)} title={JSON.stringify(nb)}/>
	</View>
  )
}

export default Updated

const styles = StyleSheet.create({})