import {  Text, View ,StyleSheet} from "react-native";

export function Boucle() {
	
	const etudiants =[
		{nom : "Alain" ,age : 20},
		{nom : "Benoit" ,age : 12},
		{nom : "Céline" ,age : 20}
	];

	 return (
		 <View>  
			<Text style={styles.p }>{etudiants[0]. nom} a {etudiants[0].age}</Text>
			<Text> faire une boucle </Text> 
			{/** to choose the name of the etudiant with boucle */}
			{etudiants.map (function(item ,index) {
				return <Text key={index}>{item.nom}</Text>
				
			})}
		</View>
	 )
};

  const styles =StyleSheet.create({
	p : {
		color : "blue",
		fontSize : 30
	}
    });
