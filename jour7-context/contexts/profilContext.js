// vous pouvez l'appel comme vous volez
// dans ce fichier que l'on créer un state global

import{createContext, useState} from "react" // cette fonction qui permet de créer un état global

export const ProfilConxtext = createContext(); // store

export function ProfilConxtextProvider (props){
	// un composabt qui va emballer l'intégralité de notre application
	// Provider => Fournir à l'ensemble de notre APP le state global
    const [profil,setProfil] = useState({
		nom :"Alain",
		email : "a@yahoo.fr",
		password : "123456",
		isLogged : false
	})

    function login(crediantials) { // identifiants
		const cloneProfil ={...profil}
		if(crediantials.email === profil.email && crediantials.password ===profil.password){
			cloneProfil.isLogged = true
			setProfil(cloneProfil)
			return ;
		}
		cloneProfil.message ="identifiants invalides" ;
		setProfil(cloneProfil)
	}
	function logout() { // change la valeur isLogged de profil=> true => false(déconnexion)
		const cloneProfil ={...profil};
		cloneProfil.isLogged = false
		setProfil(cloneProfil)	
	}
	 // le context n'est pas PERSISTANT => modifier dans la RAM les valeurs du profils
    // MAIS si le smartphone s'éteint ou modification code => les valeurs modifiées sont 
    // remise à zero
   return <ProfilConxtext.Provider value ={{profil, login, logout}} >
        {props.children}
		{/** children est une propriété spéciale de pros 
		 * permet d'afficher les composants à l'intérieur d'un autre */}
      </ProfilConxtext.Provider>
}