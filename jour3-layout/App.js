import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {styles} from "./style"

const carre ={ width : 120 , height : 100 ,marginBottom :20 }

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.zone1}>
        <Text style = {{fontSize :30}}>Premier</Text>
        <Text>{'Deuxieme'} {'\n'} {'test'} </Text>
        <Text>Troiseme</Text>
        <Text>Quatrieme</Text>
      </View>
      
      <View style ={{flex : 3 , backgroundColor :"green" ,flexDirection :"row",
      flexWrap :"wrap" ,justifyContent :"space-between", paddingTop :20}}>
     <View style ={[{backgroundColor :"white"} , carre]} />
     <View style ={[{backgroundColor :"pink"}, carre]} />
     <View style ={[{backgroundColor :"purple"} , carre]} />
     <View style = {[{backgroundColor :"maroon"} , carre]} />
     <View style = {[{backgroundColor :"white"} , carre]} />
     <View style = {[{backgroundColor :"lightgrey"} , carre]} />
      </View>

      <View style={{ backgroundColor : "blue" , flex : 2 , width:"100%" , justifyContent: "space-between" }} >
        <View style={{ flexDirection : "row" , justifyContent: "space-around" }}>
          <Text style={{color : "white"}}>Premier</Text>
          <Text style={{color : "white"}}>Deuxieme</Text>
        </View>
        <View style={{ flexDirection : "row" , justifyContent: "space-between" }}>
          <Text style={{color : "white"}}>Troisieme</Text>
          <Text style={{color : "white"}}>Quatrieme</Text>
        </View>
      </View>

      <View style={{ backgroundColor: "yellow", flex: 0.5, 
      flexDirection:"row", alignItems : "center", justifyContent: "space-around" }}>
        <Text style = {[styles.color2, styles.menu]}>Accueil</Text>
        <Text style = {[styles.color, styles.menu]}>Profil</Text>
        
      </View>
      {/**<StatusBar hidden ={true} */}
      <StatusBar style="auto" />
    </View>
  );
}

