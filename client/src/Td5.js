import React from "react"
import { useState, useEffect } from 'react'
import Livre from "./Livre";

function Td5(){
    //const [dateAuj, setDate] = useState(new Date());
    // var dateAuj
    var dateAuj = new Date();
    var dateE = new Date('Februar 19, 2023')

    const [jk, setJk]=useState(dateAuj);
    const [jk1, setJk1]=useState(dateE);

    // console.log(document.getElementById("titre").value)
    const [titreCollection, setColl] = useState("");

    const [livres, setLivres] = useState(
        [
            {auteur: "Hugo Victor", titre: "La Légende des siècles", emprunt: {statut: false, dateEmprunt:dateAuj}, cote: "HUG001"},
            {auteur: "Hugo Victor", titre: "Les Misérables", emprunt: {statut: false, dateEmprunt:dateAuj}, cote: "HUG002"},
            {auteur: "Zola Émile", titre: "L'Assommoir", emprunt: {statut: true, dateEmprunt:dateE}, cote:"ZOL001"}
        ]
    )
    
    const [nbClicks, setNbClicks] = useState(0);
    useEffect(() => { document.title = `${nbClicks} clicks`; });


    const gesy = () =>{
        setColl(document.getElementById("titre").value);
    }

const update_livres = () =>{
    const t = document.getElementById("newtitre").value
    const a = document.getElementById("newauteur").value
    const c = document.getElementById("newcode").value


    setLivres(current => [...current, {auteur: a, titre: t, emprunt: {statut: false, dateEmprunt:dateAuj},cote:c}])

    
}


    return(
        <div>
            <h1>{titreCollection}</h1>
            <label for="titre">Titre de la collection?</label>
            <input id="titre" onChange={gesy}></input>
            <div>
                <br></br>

                It is {jk.toLocaleDateString()}
                <p>Yesterday was {jk1.toLocaleDateString()}</p>
                <p>Livres {livres[2].auteur}</p>
                
                <br></br>

            </div>

            <div>

                <ul>
                    { 
                    livres.map
                        (
                        l =>
                        <Livre titre={l.titre} auteur={l.auteur} cote={l.cote} emprunt = {l.emprunt}/>
                        )
                    }
                </ul>
                
                <br></br>
                <br></br>
                <br></br>
                
            </div>
                <h2> INPUT YOUR NEW BOOK </h2>
                <br></br>
                <label for="newtitre">New Titre? </label>
                <input id="newtitre" ></input>
                <br></br>
                <br></br>
                <label for="newauteur">New Auteur? </label>
                <input id="newauteur" ></input>
                <br></br>
                <br></br>
                <label for="newcode">New Code? </label>
                <input id="newcode" ></input>
                <br></br>
                <br></br>
                <button onClick= {update_livres}> BUTTTON BIG BIG BIG </button>

                
            <div>

            <button type="button" onClick={() => setNbClicks(nbClicks + 1)}>Click!</button>
            </div>
            

        </div>
    )
}



export default Td5