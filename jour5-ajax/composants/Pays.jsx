import { StyleSheet, Text, View,TextInput , Button ,FlatList } from 'react-native'
import React ,{useState, useEffect}from 'react'


const Pays = () => {
	const [recherche , setRecherche] = useState("")
	const [resultats , setResultats] = useState([]);

	useEffect( function(){
        setRecherche("all")
    }, [])

	useEffect(function(){
        fetch("https://restcountries.com/v3.1/all")
        .then(reponse => reponse.json())
        .then(data => { 
			setResultats (data);
		}); 
        
    } , [])

	useEffect(function(){
        fetch("https://restcountries.com/v3.1/all="+recherche)
        .then(reponse => reponse.json())
        .then(data => {
			if (data.pays.length >0) {
				setResultats(data)
			}else{
				setResultats([])
			}
		});
    } , [recherche])

  return (
      
	<View>
		<View>
			<TextInput
			placeholder='recherche'
			value={recherche}
            onChangeText={(nomPays) => {setRecherche(Pays)}}
             keyboardType="default"/>
			<Button title="recherche" onPress={() => {}}/>
		</View>
		<View>
            { resultats.length === 0 
                ?   
				<Text>Pays</Text>
                : 
                <FlatList 
                    data={resultats}
                    renderItem={ ({item}) => <View>
                    {/*≈Text>{ item.nomPays }</Text>
                        <Text>{ item.drapeau } </Text>
			<Text>{ item.population } </Text> */}

      {/** Text>{JSON.stringify(item, "" )}</Text>  */}
			 <Text>{item.flag}</Text>
			 <Text>{item.name.common}</Text>
			 <Text>{item.population}</Text>
			 
			 
			 
                    </View>}
                    keyExtractor={item => item.idPays}
                />
            }
             
        </View>
	
	</View>
  )
}

export default Pays

const styles = StyleSheet.create({})