import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.zone1}>
        <Text style = {{fontSize :30}}>Premier</Text>
        <Text>deuxieme</Text>
        <Text>Troiseme</Text>
      </View>
      <View style={{ backgroundColor: "blue", flex: 2, width: "100%" }}></View>
      <View style={{ backgroundColor: "yellow", flex: 0.5, width: "100%" }}></View>
      {/**<StatusBar hidden ={true} */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 25,
    backgroundColor: '#fff',
    //flexDirection :"row"

  },
  zone1: {
    backgroundColor: "red",
     flex: 1, 
     width: "100%",
      flexDirection : "row",
      justifyContent: "space-around" ,/* attention  justifyContent centrer horizontalement SI flexDirection:
      "row" par défaut justifyContent : "center" va centrer Verticalement
      Flex-start 
      flex-end
      center 
      space-evenly
      space-between 
      space-around 
      */ 
  
      alignItems: "baseline" // verticalement SI flexDirection: "row" ,  par contre si on est sur flexDirection: "column" permet de gérer l'espacement horizontalement 
      // flex-start
      // flex-end
      // center
      // baseline
  
  }
});
