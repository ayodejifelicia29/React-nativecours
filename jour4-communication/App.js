import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, ScrollView ,Image} from 'react-native';
import Premier from './composants/Premier';
import Diapositive from './composants/Diapositive';
import Compteur from './composants/Compteur';
import Like from './composants/Like';
import {useState  } from "react";
import LikeCompteur from './composants/LikeCompteur';
import Article from './composants/Article';
import Composant from './composants/Composant';

export default function App() {
    /** Premier */
     const liste =[
       {largeur: 40, hauteur : 40 , unite: "cm"},
       {largeur: 10, hauteur : 30 , unite: "km"},
       {largeur: 60, hauteur : 12 , unite: "mm"},
       {largeur: 60, hauteur : 12 , unite: "mm"},
     ]
     /** Diapositive */
     const diapo=[
      "https://source.unsplash.com/random/200x100",
      "https://source.unsplash.com/random/200x101",
      "https://source.unsplash.com/random/200x102"
      
     ]
     /*const likes =[
       {id:1 ,nb:3},
       {id:1 ,nb:3},
     ]*/
     /** Exo4 (Article solution withusesuse) */ 
      const  [articles,setArticles] =useState([
         
    {id : 1 , titre : "article 1" , contenu : "lorem ipsum 1" , nb : 0},
    {id : 2 , titre : "article 2" , contenu : "lorem ipsum 2" , nb : 2},
    {id : 3 , titre : "article 3" , contenu : "lorem ipsum 3" , nb : 10}
      ]);
      const modifierArticle =(id) =>{
        const cloneArticles =[...articles]
        const compteAModifier =cloneArticles.find(function (item)  {return item.id ===id})
        const index =cloneArticles.indexOf(compteAModifier)
        cloneArticles[index].nb++
        setArticles(cloneArticles);
      }

        /** LikeCompteur solution with useState  */
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
    <ScrollView style={styles.container}>
            <Composant/>
                {/* Affichage d'Article*/}
          {likes.map(function (item,index) {
            return <LikeCompteur key={index} compteur={item} augmenter ={modifierLike} />
          })}

          {/* Affichage d'Article*/}
          {articles.map(function (item,index) {
            return<Article key={index} compteur={item} augmenter={modifierArticle}/>
            
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
            {/* Affichage map*/}
      {liste.map(function (item, index) {
        return <Premier
         largeur={item.largeur}
         hauteur={item.hauteur}
         unite={item.unite}
         key={index}
         />
         {/** props spéciale qui permet à React Native de distinguer les différents éléments <Premier /> de la liste */}
      }) }
            {/* Affichage diapostive*/}
     {diapo.map(function (uri,index) {
        return <Diapositive
            uri = {uri}
            key={index}
         />
        }) }
    
       <StatusBar style="auto" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop : 25
  },
});
