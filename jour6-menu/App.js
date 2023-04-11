import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from "@react-navigation/native"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Accueil from "./composants/Accueil"
import ProfilNavigation from "./composants/ProfilNavigation"

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Menu = createBottomTabNavigator()

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
      <Menu.Navigator screenOptions={{
        tabBarActiveBackgroundColor : "#eee",
        tabBarStyle : { borderColor : "red" , borderWidth : 3 },
        tabBarShowLabel : false, 
       /*  title : ((text) => { return <View>
          <Text>{JSON.stringify(text)}</Text>
          <MaterialCommunityIcons name="air-horn" color="black" size={40} />
          </View>  
        })() */
      }}>
        {/** https://reactnavigation.org/docs/bottom-tab-navigator */}
        <Menu.Screen name="home" component={Accueil} 
          options={{
            tabBarIcon : function(){
              return <MaterialCommunityIcons name="home-heart" color="black" size={40} />
            }
          }} />
          {/**  npm i ... => https://www.npmjs.com/ 
           *  react-native-vector-icons
           * https://www.npmjs.com/package/react-native-vector-icons
           * https://pictogrammers.com/library/mdi/
           */}
        <Menu.Screen name="profil" component={ ProfilNavigation } options={{
          tabBarIcon : function(){
            return <MaterialCommunityIcons name="account-box" color="black" size={40} />
          }
        }}/>
         
       </Menu.Navigator>

      </NavigationContainer>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});