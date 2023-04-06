import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,Image} from 'react-native';
import Premier from './composants/Premier';
import Diapositive from './composants/Diapositive';
import Compteur from './composants/Compteur';
import Like from './composants/Like';
import {useState  } from "react";
import LikeCompteur from './composants/LikeCompteur';

export default function App() {
    
     const liste =[
       {largeur: 40, hauteur : 40 , unite: "cm"},
       {largeur: 10, hauteur : 30 , unite: "km"},
       {largeur: 60, hauteur : 12 , unite: "mm"},
       {largeur: 60, hauteur : 12 , unite: "mm"},
     ]

     const diapo=[
      "https://source.unsplash.com/random/200x100",
      "https://source.unsplash.com/random/200x101",
      "https://source.unsplash.com/random/200x102"
      
     ]
     /*const likes =[
       {id:1 ,nb:3},
       {id:1 ,nb:3},
     ]*/
      const [likes,setLikes]=useState([
                     {id:1 , nb:3},
                     {id: 2 ,nb: 10},
      ]);
      const modifierLike = (id) => {
       // rechercher dans likes le compteur à modifier
       const cloneLikes =[...likes] // clone de l'état dans une variable clonLikes
                                    // la variable cloneLikes contient les même valeurs que 
                                    //likes  Mais dispose d'un référence mémoire différente
                                    // c'est la variable que l'on va modifier
       const compteAModifier =cloneLikes.find (function (item) {return item.id ===id })
                               // rechercher dans un tableau l'élement qui a l'id ===1
                               // {id : 1 , nb: 3} ===compteAModifier
       const index = cloneLikes.indexOf(compteAModifier)
                                 // indexOf ({id : 1 , nb: 3})permet d'avoir la position
                                 // de cet élément dans le tableau
                                 // index ===0
       cloneLikes[index].nb++
                        // augmenter de + 1 la valeur de la propriété nb pour l'élement qui a pour position dans le tableau 0 dans le tableau cloné.
       setLikes(cloneLikes);
                       // on passe au setter de like le clone => react va comparer likes inital et le cloneLikes => il fait la mise à jour juste pour l'élément modifié

      // persistance => SQLITE (sur le smartphone)
      // requête AJAX => API => stocker dans une base de données MongoDB le nombre de like 
      //
      }
  return (
    <View style={styles.container}>
          {likes.map(function (item,index) {
            return <LikeCompteur key={index} compteur={item} augmenter ={modifierLike} />
          })}
          <Like/>
          <Compteur/>
         
      {/** exécute le composant Premier dans APP en lui ajoutant des props en htlm => attribut
       * vous pouvez en mettre autant que nécessaire nommer comme vous voulez
       */}
      {/*<Premier largeur={10} hauteur= "40" unite="cm"/>
      <Premier largeur={30} hauteur="30" unite="km"/>
      <Premier largeur={50} hauteur= "1é" unite="mm"/> */}
     
     {/** it's the same as the up but in différent form */}
      {liste.map(function (item, index) {
        return <Premier
         largeur={item.largeur}
         hauteur={item.hauteur}
         unite={item.unite}
         key={index}
         />
         {/** props spéciale qui permet à React Native de distinguer les différents éléments <Premier /> de la liste */}
      }) }

     {diapo.map(function (uri,index) {
        return <Diapositive
            uri = {uri}
            key={index}
         />
        }) }
    
       <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
