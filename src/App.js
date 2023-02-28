import React from "react";
import Handlename from "./Components/Handlename";
import "./App.css";

function App() {
  const profil = [
    {
      image : "logo512.png",
      nom: "Simo",
      bio: "Célibatire",
      profession: "Graphic designer",
    },
  ];
  return (
    <div className="mainContainer">
      <h1>Dossier Personnel</h1>
      <Handlename dossierPerso={profil} />
    </div>
  );
}

export default App;
