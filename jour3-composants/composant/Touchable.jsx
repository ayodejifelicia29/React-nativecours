//rnfes

import { 
	StyleSheet,
	 Text, 
	 View ,
	 Image,
	 TouchableHighlight,
	 TouchableNativeFeedback, // ne fonctionne que sur les téléphone andriod
	 TouchableOpacity,
	 TouchableWithoutFeedback
	 // site internet => https://icons.getbootstrap.com/icons/android2/
	 // télécharger une image de votre choix 
	 //stocker dans le doisser assets du projet jour3-composants
	} from 'react-native'
import React from 'react'
import AndroidLogo from "../assets/android2.svg"

const Touchable = () => {
  return (
	<View style={styles.box}>
	  <Text>Touchable</Text>
	  <View style={{flexDirection :"row",justifyContent:"space-evenly"}}>
	  <TouchableOpacity style={styles.touchableOpacity} >
		<Image source ={{uri :"https://via.placeholder.com/50x50" , width :50 , height :50}} />
	  </TouchableOpacity>
	  {/** couleur actuelle => */}
	  <TouchableNativeFeedback style={ {padding:20}} background={TouchableNativeFeedback.Ripple(
       "#000",
	   "#fff",
	  )} onPress={()=> {}}>
	  <Image source ={{uri :"https://via.placeholder.com/50x50" , width :50 , height :50}} />
	  </TouchableNativeFeedback>
	  <TouchableHighlight style={styles.touchableOpacity} activeOpacity={0.6} underlayColor="#DDDDDD" onPress={()=> {}}>
	  <Image source ={{uri :"https://via.placeholder.com/50x50" , width :50 , height :50}} />
	  </TouchableHighlight>
	  <TouchableWithoutFeedback onPress={() => {console.warn("no feed back")}} style={styles.touchableOpacity}>
	  <AndroidLogo width={50} height={50} fill='#009FBD' />
	  </TouchableWithoutFeedback>
	  
	  </View>
	  
	</View>
  )
} 

export default Touchable

const styles = StyleSheet.create({
	box : {paddingHorizontal :10},
	touchableOpacity :{width :100, height :100 ,backgroundColor :"#eee", justifyContent : "center", alignItems : "center" }
})
// props // action event // communiquer des coposants 
// useState