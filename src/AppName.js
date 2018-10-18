import React,  {Component} from 'react';
import './AppName.css';

class AppName extends React.Component{


  
    render(){

        name(){
    
        var person=prompt ("inserisci il tuo nome ");

        if(person != null)
        
            document.getElementById("AppName").innerHTML= "Campo di "+person;
        
        }
        
    

    	return(

        <div>
            <h2>{name}</h2>
        </div>


   		);

	}
}

export default AppName;

