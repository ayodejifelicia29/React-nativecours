import { Text, View } from "react-native";

export function deuxieme() {
	return (
	 	<View> {/**the same thing as div */}
			<Text>premier ligne </Text>
			<Text>deuxieme ligne </Text>
			{/** si vous plusieurs composants frères
			 * <Text>
			 * <Text>
			 * => erreur
			 * il FAUT OBLIGATOIRE avoir un seule composaant
			 * parent comme d'une composant
			 */}
		</View>
	)
}