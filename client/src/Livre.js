import { green } from '@mui/material/colors'
import React from 'react'

function Livre(props) {

  // const livres =v

  return (
    <li>
      Titre : {props.titre}, Auteur : {props.auteur}, Code : {props.cote}
        <br></br>
        { props.emprunt.statut ? <p style = {{color:"red"}}>Livre emprunté le {props.emprunt.dateEmprunt.toLocaleDateString()}</p> : <p style={{color:"green"}}>Livre disponible </p>   }
    </li>
  )
}

export default Livre