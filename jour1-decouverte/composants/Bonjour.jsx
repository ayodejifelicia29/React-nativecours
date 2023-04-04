import {Text, StyleSheet} from "react-native"

 export function Bonjour() {
	return <Text style={styles.miseEnFormeP}>Bonjour</Text> // pas"à la fin"
}

const styles =StyleSheet.create({
	miseEnFormeP : {
		color : "green",
		fontSize : 60
	}
})