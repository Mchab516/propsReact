import React from "react";

const Handlename = ({dossierPerso}) => {
    const handlenames = dossierPerso.map(({image,nom,bio,profession}, idx) =>(
        <div class="cardWrapper" key={idx}>
        <div>
          <img src="logo512.png" alt=""/>
        </div>
        <div>Nom : {nom}</div>
        <div>Bio : {bio}</div>
        <div>Profession : {profession}</div>

        </div>
    ));
   
  return<div>{handlenames}</div>
  
};

export default Handlename;
