import { StyleSheet, Text, View ,Image} from 'react-native'
import React from 'react'

const Diapositive = ({uri}) => {
  return (
	<View style={styles.box}>
	   <Text >Diapositive </Text>
        <View style={styles.text}>
       <Image source={{uri:uri, width :100, height:100}}/>
	   </View>
	</View>
	    
  )
}

export default Diapositive

const styles = StyleSheet.create({
	box : {paddingHorizontal :10},
	text:{flexDirection :"row",justifyContent:"space-around",}
})
